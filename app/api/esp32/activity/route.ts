import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { userId, steps, calories, distance, duration } = body

    if (!userId || !steps || !calories) {
      return NextResponse.json(
        { error: 'Missing required fields: userId, steps, and calories' },
        { status: 400 }
      )
    }

    // Validate steps (reasonable range)
    if (steps < 0 || steps > 100000) {
      return NextResponse.json(
        { error: 'Invalid steps value' },
        { status: 400 }
      )
    }

    // Validate calories (reasonable range)
    if (calories < 0 || calories > 10000) {
      return NextResponse.json(
        { error: 'Invalid calories value' },
        { status: 400 }
      )
    }

    const activityData = await prisma.activityData.create({
      data: {
        userId,
        steps,
        calories,
        distance: distance || null,
        duration: duration || null,
      },
    })

    // Check for achievements
    if (steps >= 10000) {
      await prisma.notification.create({
        data: {
          userId,
          title: 'Step Goal Achieved!',
          message: `Congratulations! You've reached ${steps} steps today.`,
          type: 'success',
        },
      })
    } else if (steps >= 5000) {
      await prisma.notification.create({
        data: {
          userId,
          title: 'Good Progress',
          message: `You've taken ${steps} steps today. Keep it up!`,
          type: 'info',
        },
      })
    }

    return NextResponse.json({
      success: true,
      data: activityData,
    })
  } catch (error) {
    console.error('Error processing activity data:', error)
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

    const activityData = await prisma.activityData.findMany({
      where: { userId },
      orderBy: { timestamp: 'desc' },
      take: limit,
    })

    return NextResponse.json({
      success: true,
      data: activityData,
    })
  } catch (error) {
    console.error('Error fetching activity data:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 