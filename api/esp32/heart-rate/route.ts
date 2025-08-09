import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { userId, bpm, quality } = body

    if (!userId || !bpm) {
      return NextResponse.json(
        { error: 'Missing required fields: userId and bpm' },
        { status: 400 }
      )
    }

    // Validate heart rate range
    if (bpm < 30 || bpm > 200) {
      return NextResponse.json(
        { error: 'Invalid heart rate value' },
        { status: 400 }
      )
    }

    const heartRateData = await prisma.heartRateData.create({
      data: {
        userId,
        bpm,
        quality: quality || 'normal',
      },
    })

    // Check for alerts
    if (bpm > 100) {
      await prisma.notification.create({
        data: {
          userId,
          title: 'High Heart Rate Alert',
          message: `Your heart rate is elevated at ${bpm} BPM. Consider taking a break.`,
          type: 'alert',
        },
      })
    } else if (bpm < 50) {
      await prisma.notification.create({
        data: {
          userId,
          title: 'Low Heart Rate Alert',
          message: `Your heart rate is low at ${bpm} BPM. Please consult a healthcare provider if this persists.`,
          type: 'warning',
        },
      })
    }

    return NextResponse.json({
      success: true,
      data: heartRateData,
    })
  } catch (error) {
    console.error('Error processing heart rate data:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')
    const limit = parseInt(searchParams.get('limit') || '100')

    if (!userId) {
      return NextResponse.json(
        { error: 'Missing userId parameter' },
        { status: 400 }
      )
    }

    const heartRateData = await prisma.heartRateData.findMany({
      where: { userId },
      orderBy: { timestamp: 'desc' },
      take: limit,
    })

    return NextResponse.json({
      success: true,
      data: heartRateData,
    })
  } catch (error) {
    console.error('Error fetching heart rate data:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 