
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendNotificationEmail, sendNewVolunteerNotification } from '@/lib/email'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { name, email, phone, area, interests, message } = body

        // basic validation
        if (!name || !email || !phone) {
            return NextResponse.json(
                { error: 'Name, email, and phone are required' },
                { status: 400 }
            )
        }

        // Convert interests array to string if it is an array
        const interestsString = Array.isArray(interests)
            ? interests.join(', ')
            : (interests || '')

        const volunteer = await prisma.volunteer.create({
            data: {
                name,
                email,
                phone,
                area: area || '',
                interests: interestsString,
                message: message || '',
            },
        })

        // Send notification email to admin about new volunteer
        await sendNewVolunteerNotification(volunteer)

        return NextResponse.json(
            { message: 'Volunteer application submitted successfully', id: volunteer.id },
            { status: 201 }
        )
    } catch (error) {
        console.error('Volunteer submission error:', error)
        return NextResponse.json(
            { error: 'Failed to submit application. Please try again.' },
            { status: 500 }
        )
    }
}
