import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { userId, temperature, location } = body

    if (!userId || !temperature) {
      return NextResponse.json(
        { error: 'Missing required fields: userId and temperature' },
        { status: 400 }
      )
    }

    // Validate temperature range (Celsius)
    if (temperature < 30 || temperature > 45) {
      return NextResponse.json(
        { error: 'Invalid temperature value' },
        { status: 400 }
      )
    }

    const temperatureData = await prisma.temperatureData.create({
      data: {
        userId,
        temperature,
        location: location || 'forehead',
      },
    })

    // Check for alerts
    if (temperature > 38) {
      await prisma.notification.create({
        data: {
          userId,
          title: 'High Temperature Alert',
          message: `Your body temperature is elevated at ${temperature}°C. Consider resting and monitoring.`,
          type: 'alert',
        },
      })
    } else if (temperature < 35) {
      await prisma.notification.create({
        data: {
          userId,
          title: 'Low Temperature Alert',
          message: `Your body temperature is low at ${temperature}°C. Please warm up and monitor.`,
          type: 'warning',
        },
      })
    }

    return NextResponse.json({
      success: true,
      data: temperatureData,
    })
  } catch (error) {
    console.error('Error processing temperature data:', error)
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

    const temperatureData = await prisma.temperatureData.findMany({
      where: { userId },
      orderBy: { timestamp: 'desc' },
      take: limit,
    })

    return NextResponse.json({
      success: true,
      data: temperatureData,
    })
  } catch (error) {
    console.error('Error fetching temperature data:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 