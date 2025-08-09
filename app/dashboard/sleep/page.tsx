"use client"

import { useState, useEffect } from 'react'
import { Moon, TrendingUp, TrendingDown, Activity, Clock, Zap } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts'

const sleepData = [
  { time: '22:00', deep: 45, light: 35, rem: 20, quality: 85 },
  { time: '22:30', deep: 50, light: 30, rem: 20, quality: 88 },
  { time: '23:00', deep: 55, light: 25, rem: 20, quality: 90 },
  { time: '23:30', deep: 60, light: 20, rem: 20, quality: 92 },
  { time: '00:00', deep: 65, light: 15, rem: 20, quality: 95 },
  { time: '00:30', deep: 70, light: 10, rem: 20, quality: 97 },
  { time: '01:00', deep: 75, light: 5, rem: 20, quality: 98 },
  { time: '01:30', deep: 80, light: 0, rem: 20, quality: 99 },
  { time: '02:00', deep: 75, light: 5, rem: 20, quality: 98 },
  { time: '02:30', deep: 70, light: 10, rem: 20, quality: 97 },
  { time: '03:00', deep: 65, light: 15, rem: 20, quality: 95 },
  { time: '03:30', deep: 60, light: 20, rem: 20, quality: 92 },
  { time: '04:00', deep: 55, light: 25, rem: 20, quality: 90 },
  { time: '05:00', deep: 50, light: 30, rem: 20, quality: 88 },
  { time: '06:00', deep: 45, light: 35, rem: 20, quality: 85 },
]

const weeklySleepData = [
  { day: 'Mon', duration: 7.5, quality: 85, deep: 2.1, light: 3.2, rem: 1.8 },
  { day: 'Tue', duration: 6.8, quality: 78, deep: 1.9, light: 3.1, rem: 1.6 },
  { day: 'Wed', duration: 8.2, quality: 92, deep: 2.4, light: 3.5, rem: 2.0 },
  { day: 'Thu', duration: 7.1, quality: 82, deep: 2.0, light: 3.0, rem: 1.7 },
  { day: 'Fri', duration: 6.5, quality: 75, deep: 1.8, light: 2.8, rem: 1.5 },
  { day: 'Sat', duration: 8.5, quality: 95, deep: 2.6, light: 3.8, rem: 2.1 },
  { day: 'Sun', duration: 7.8, quality: 88, deep: 2.2, light: 3.3, rem: 1.9 },
]

export default function SleepPage() {
  const [currentTime, setCurrentTime] = useState('')
  const [isSleeping, setIsSleeping] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const getSleepStatus = (quality: number) => {
    if (quality >= 90) return { status: 'Excellent', color: 'text-green-600', bg: 'bg-green-100 dark:bg-green-900/20' }
    if (quality >= 80) return { status: 'Good', color: 'text-blue-600', bg: 'bg-blue-100 dark:bg-blue-900/20' }
    if (quality >= 70) return { status: 'Fair', color: 'text-yellow-600', bg: 'bg-yellow-100 dark:bg-yellow-900/20' }
    return { status: 'Poor', color: 'text-red-600', bg: 'bg-red-100 dark:bg-red-900/20' }
  }

  const lastNightSleep = weeklySleepData[weeklySleepData.length - 1]
  const status = getSleepStatus(lastNightSleep.quality)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Sleep Monitoring</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Track your sleep patterns and quality
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">Current Time</p>
          <p className="text-lg font-mono text-gray-900 dark:text-white">{currentTime}</p>
        </div>
      </div>

      {/* Sleep Status */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Moon className="h-8 w-8 text-purple-500 mr-3" />
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Last Night</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{lastNightSleep.duration}h</p>
              </div>
            </div>
            <div className={`px-3 py-1 rounded-full text-sm font-medium ${status.bg} ${status.color}`}>
              {status.status}
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-300">Deep Sleep</span>
              <span className="font-medium text-gray-900 dark:text-white">{lastNightSleep.deep}h</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-300">Light Sleep</span>
              <span className="font-medium text-gray-900 dark:text-white">{lastNightSleep.light}h</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-300">REM Sleep</span>
              <span className="font-medium text-gray-900 dark:text-white">{lastNightSleep.rem}h</span>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center mb-4">
            <TrendingUp className="h-8 w-8 text-green-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Sleep Quality</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{lastNightSleep.quality}%</p>
            </div>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-green-500 h-2 rounded-full"
              style={{ width: `${lastNightSleep.quality}%` }}
            />
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center mb-4">
            <Clock className="h-8 w-8 text-blue-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Bedtime</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">22:30</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">Consistent bedtime</p>
        </div>

        <div className="card p-6">
          <div className="flex items-center mb-4">
            <Zap className="h-8 w-8 text-yellow-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Wake Time</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">06:30</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">Natural wake cycle</p>
        </div>
      </div>

      {/* Sleep Quality Chart */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Sleep Quality Over Time</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={sleepData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="quality"
                stroke="#8b5cf6"
                fill="#8b5cf6"
                fillOpacity={0.3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Weekly Sleep Overview */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Weekly Sleep Overview</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={weeklySleepData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="deep" stackId="a" fill="#8b5cf6" />
              <Bar dataKey="light" stackId="a" fill="#a78bfa" />
              <Bar dataKey="rem" stackId="a" fill="#c4b5fd" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Sleep Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Sleep Insights</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Consistent Sleep Schedule</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  You've maintained a consistent bedtime for the past 5 days
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Good Deep Sleep</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Your deep sleep duration is above the recommended 2 hours
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Room for Improvement</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Consider reducing screen time 1 hour before bedtime
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Sleep Recommendations</h3>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Optimize Your Environment</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Keep your bedroom cool (65-67°F) and dark for better sleep quality
              </p>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Establish a Routine</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Try to go to bed and wake up at the same time every day
              </p>
            </div>

            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Limit Screen Time</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Avoid screens 1 hour before bedtime to improve sleep onset
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 