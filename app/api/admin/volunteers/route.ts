
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

const ADMIN_ACCESS_KEY = process.env.ADMIN_ACCESS_KEY

export async function GET(request: NextRequest) {
    // 1. Security Check
    const authHeader = request.headers.get('x-admin-key')

    if (!ADMIN_ACCESS_KEY || authHeader !== ADMIN_ACCESS_KEY) {
        return NextResponse.json(
            { error: 'Unauthorized' },
            { status: 401 }
        )
    }

    try {
        const volunteers = await prisma.volunteer.findMany({
            orderBy: { createdAt: 'desc' }
        })

        return NextResponse.json({ volunteers })
    } catch (error) {
        console.error('Failed to fetch volunteers:', error)
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        )
    }
}
