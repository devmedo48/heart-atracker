import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      userId,
      duration,
      quality,
      deepSleep,
      lightSleep,
      remSleep,
      startTime,
      endTime
    } = body

    if (!userId || !duration || !quality || !startTime || !endTime) {
      return NextResponse.json(
        { error: 'Missing required fields: userId, duration, quality, startTime, endTime' },
        { status: 400 }
      )
    }

    // Validate sleep duration (hours)
    if (duration < 0 || duration > 24) {
      return NextResponse.json(
        { error: 'Invalid sleep duration' },
        { status: 400 }
      )
    }

    // Validate sleep quality (1-10)
    if (quality < 1 || quality > 10) {
      return NextResponse.json(
        { error: 'Invalid sleep quality value' },
        { status: 400 }
      )
    }

    const sleepData = await prisma.sleepData.create({
      data: {
        userId,
        duration,
        quality,
        deepSleep: deepSleep || null,
        lightSleep: lightSleep || null,
        remSleep: remSleep || null,
        startTime: new Date(startTime),
        endTime: new Date(endTime),
      },
    })

    // Check for alerts
    if (duration < 6) {
      await prisma.notification.create({
        data: {
          userId,
          title: 'Insufficient Sleep Alert',
          message: `You slept for only ${duration} hours. Aim for 7-9 hours of sleep.`,
          type: 'warning',
        },
      })
    } else if (quality < 5) {
      await prisma.notification.create({
        data: {
          userId,
          title: 'Poor Sleep Quality Alert',
          message: `Your sleep quality was rated ${quality}/10. Consider improving your sleep environment.`,
          type: 'warning',
        },
      })
    }

    return NextResponse.json({
      success: true,
      data: sleepData,
    })
  } catch (error) {
    console.error('Error processing sleep data:', error)
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
    const limit = parseInt(searchParams.get('limit') || '30')

    if (!userId) {
      return NextResponse.json(
        { error: 'Missing userId parameter' },
        { status: 400 }
      )
    }

    const sleepData = await prisma.sleepData.findMany({
      where: { userId },
      orderBy: { timestamp: 'desc' },
      take: limit,
    })

    return NextResponse.json({
      success: true,
      data: sleepData,
    })
  } catch (error) {
    console.error('Error fetching sleep data:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 