"use client"

import { useState, useEffect } from 'react'
import { Heart, TrendingUp, TrendingDown, Activity } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts'

const heartRateData = [
  { time: '00:00', bpm: 65, quality: 'good' },
  { time: '02:00', bpm: 58, quality: 'good' },
  { time: '04:00', bpm: 62, quality: 'normal' },
  { time: '06:00', bpm: 68, quality: 'normal' },
  { time: '08:00', bpm: 72, quality: 'good' },
  { time: '10:00', bpm: 85, quality: 'normal' },
  { time: '12:00', bpm: 92, quality: 'poor' },
  { time: '14:00', bpm: 88, quality: 'normal' },
  { time: '16:00', bpm: 78, quality: 'good' },
  { time: '18:00', bpm: 82, quality: 'normal' },
  { time: '20:00', bpm: 70, quality: 'good' },
  { time: '22:00', bpm: 68, quality: 'good' },
  { time: '24:00', bpm: 65, quality: 'good' },
]

const weeklyData = [
  { day: 'Mon', avg: 72, min: 58, max: 95 },
  { day: 'Tue', avg: 75, min: 62, max: 98 },
  { day: 'Wed', avg: 70, min: 55, max: 92 },
  { day: 'Thu', avg: 78, min: 65, max: 105 },
  { day: 'Fri', avg: 73, min: 60, max: 90 },
  { day: 'Sat', avg: 68, min: 55, max: 85 },
  { day: 'Sun', avg: 71, min: 58, max: 88 },
]

export default function HeartRatePage() {
  const [currentBPM, setCurrentBPM] = useState(72)
  const [isLive, setIsLive] = useState(true)

  useEffect(() => {
    if (isLive) {
      const interval = setInterval(() => {
        setCurrentBPM(prev => {
          const change = Math.floor(Math.random() * 6) - 3
          return Math.max(50, Math.min(120, prev + change))
        })
      }, 3000)

      return () => clearInterval(interval)
    }
  }, [isLive])

  const getHeartRateStatus = (bpm: number) => {
    if (bpm < 60) return { status: 'Low', color: 'text-blue-500', bgColor: 'bg-blue-50 dark:bg-blue-900/20' }
    if (bpm < 100) return { status: 'Normal', color: 'text-green-500', bgColor: 'bg-green-50 dark:bg-green-900/20' }
    return { status: 'High', color: 'text-red-500', bgColor: 'bg-red-50 dark:bg-red-900/20' }
  }

  const status = getHeartRateStatus(currentBPM)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Heart Rate Monitoring</h1>
          <p className="text-gray-600 dark:text-gray-300">Real-time heart rate tracking and analysis</p>
        </div>
        <button
          onClick={() => setIsLive(!isLive)}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${isLive
              ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
              : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
            }`}
        >
          {isLive ? 'Live Mode' : 'Static Mode'}
        </button>
      </div>

      {/* Current Heart Rate */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card p-6 text-center">
          <div className="flex items-center justify-center mb-4">
            <Heart className={`h-8 w-8 ${status.color} ${isLive ? 'animate-pulse' : ''}`} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{currentBPM} BPM</h2>
          <p className={`text-sm font-medium ${status.color}`}>{status.status}</p>
          <p className="text-xs text-gray-500 mt-1">Current reading</p>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Today's Average</h3>
            <TrendingUp className="h-5 w-5 text-green-500" />
          </div>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">74 BPM</p>
          <p className="text-sm text-green-600 dark:text-green-400">+2 from yesterday</p>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Resting Rate</h3>
            <Activity className="h-5 w-5 text-blue-500" />
          </div>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">62 BPM</p>
          <p className="text-sm text-blue-600 dark:text-blue-400">Excellent</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 24-Hour Chart */}
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">24-Hour Heart Rate</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={heartRateData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis domain={[50, 120]} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="bpm"
                stroke="#ef4444"
                strokeWidth={3}
                dot={{ fill: '#ef4444', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: '#ef4444', strokeWidth: 2, fill: '#fff' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Weekly Chart */}
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Weekly Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="avg"
                stackId="1"
                stroke="#ef4444"
                fill="#ef4444"
                fillOpacity={0.6}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Heart Rate Zones */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Heart Rate Zones</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { name: 'Resting', range: '50-60', color: 'bg-blue-500', percentage: 15 },
            { name: 'Light', range: '60-70', color: 'bg-green-500', percentage: 25 },
            { name: 'Moderate', range: '70-85', color: 'bg-yellow-500', percentage: 35 },
            { name: 'Active', range: '85-100', color: 'bg-orange-500', percentage: 20 },
            { name: 'Peak', range: '100+', color: 'bg-red-500', percentage: 5 },
          ].map((zone) => (
            <div key={zone.name} className="text-center">
              <div className={`w-16 h-16 rounded-full ${zone.color} mx-auto mb-2 flex items-center justify-center`}>
                <span className="text-white font-bold">{zone.percentage}%</span>
              </div>
              <h4 className="font-medium text-gray-900 dark:text-white">{zone.name}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">{zone.range} BPM</p>
            </div>
          ))}
        </div>
      </div>

      {/* Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Today's Insights</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-300">Peak heart rate</span>
              <span className="font-medium text-gray-900 dark:text-white">95 BPM</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-300">Lowest heart rate</span>
              <span className="font-medium text-gray-900 dark:text-white">58 BPM</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-300">Time in target zone</span>
              <span className="font-medium text-gray-900 dark:text-white">6h 23m</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-300">Calories burned</span>
              <span className="font-medium text-gray-900 dark:text-white">320 kcal</span>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recommendations</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Your heart rate is within normal range. Keep up the good work!
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Consider taking a 5-minute break every hour to maintain healthy heart rate.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Your resting heart rate has improved by 3 BPM this week.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 