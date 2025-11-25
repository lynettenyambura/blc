import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendConfirmationEmail, sendNotificationEmail } from '@/lib/email'

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Simple rate limiting (in-memory store)
// For production, consider using Redis or a proper rate limiting library
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const limit = 5 // Max 5 requests
  const window = 60 * 1000 // Per minute (60 seconds)

  const record = rateLimitMap.get(ip)

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + window })
    return true
  }

  if (record.count >= limit) {
    return false
  }

  record.count++
  return true
}

function getClientIP(request: NextRequest): string {
  // Try to get IP from various headers (for production behind proxies)
  const forwarded = request.headers.get('x-forwarded-for')
  const realIP = request.headers.get('x-real-ip')
  const ip = forwarded?.split(',')[0] || realIP || 'unknown'
  return ip
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = getClientIP(request)
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { email } = body

    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Check email format
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Normalize email
    const normalizedEmail = email.toLowerCase().trim()

    // Store subscription in database using Prisma
    try {
      await prisma.newsletter.create({
        data: {
          email: normalizedEmail,
        },
      })
      console.log('Newsletter subscription saved:', normalizedEmail)
    } catch (error: any) {
      // Handle duplicate email error
      if (error.code === 'P2002') {
        return NextResponse.json(
          { error: 'This email is already subscribed to our newsletter.' },
          { status: 409 }
        )
      }
      // Re-throw other errors to be caught by outer catch
      throw error
    }

    // Send emails (non-blocking - don't fail subscription if email fails)
    try {
      // Send confirmation email to subscriber
      await sendConfirmationEmail(normalizedEmail)
      
      // Send notification email to admin (commented out)
      // await sendNotificationEmail(normalizedEmail)
    } catch (emailError) {
      // Log but don't fail - subscription is already saved
      console.error('Email sending failed (subscription still saved):', emailError)
    }

    return NextResponse.json(
      { 
        message: 'Successfully subscribed to newsletter! Check your email for confirmation.',
        email: normalizedEmail
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to process subscription. Please try again later.' },
      { status: 500 }
    )
  }
}

// Optional: GET endpoint to check subscription status
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const email = searchParams.get('email')

  if (!email) {
    return NextResponse.json(
      { error: 'Email parameter is required' },
      { status: 400 }
    )
  }

  // Check database for subscription status
  try {
    const subscription = await prisma.newsletter.findUnique({
      where: { email: email.toLowerCase().trim() },
    })

    return NextResponse.json({
      subscribed: !!subscription,
      email,
      subscribedAt: subscription?.subscribedAt || null,
    })
  } catch (error) {
    console.error('Error checking subscription:', error)
    return NextResponse.json(
      { error: 'Failed to check subscription status' },
      { status: 500 }
    )
  }
}

