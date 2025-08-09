"use client"

import { useState, useEffect } from 'react'
import { Thermometer, TrendingUp, TrendingDown, AlertTriangle, Clock, Activity } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts'

const temperatureData = [
  { time: '06:00', temp: 36.2, status: 'normal' },
  { time: '08:00', temp: 36.5, status: 'normal' },
  { time: '10:00', temp: 36.8, status: 'normal' },
  { time: '12:00', temp: 37.1, status: 'normal' },
  { time: '14:00', temp: 37.3, status: 'elevated' },
  { time: '16:00', temp: 37.6, status: 'elevated' },
  { time: '18:00', temp: 37.8, status: 'elevated' },
  { time: '20:00', temp: 37.5, status: 'elevated' },
  { time: '22:00', temp: 37.2, status: 'normal' },
  { time: '00:00', temp: 36.9, status: 'normal' },
  { time: '02:00', temp: 36.6, status: 'normal' },
  { time: '04:00', temp: 36.3, status: 'normal' },
]

const weeklyTemperatureData = [
  { day: 'Mon', avg: 36.8, max: 37.2, min: 36.4, status: 'normal' },
  { day: 'Tue', avg: 37.1, max: 37.8, min: 36.6, status: 'elevated' },
  { day: 'Wed', avg: 36.9, max: 37.3, min: 36.5, status: 'normal' },
  { day: 'Thu', avg: 37.2, max: 38.1, min: 36.7, status: 'elevated' },
  { day: 'Fri', avg: 36.7, max: 37.0, min: 36.3, status: 'normal' },
  { day: 'Sat', avg: 36.8, max: 37.1, min: 36.5, status: 'normal' },
  { day: 'Sun', avg: 37.0, max: 37.5, min: 36.6, status: 'normal' },
]

export default function TemperaturePage() {
  const [currentTemp, setCurrentTemp] = useState(36.8)
  const [isLive, setIsLive] = useState(true)

  useEffect(() => {
    if (isLive) {
      const interval = setInterval(() => {
        setCurrentTemp(prev => {
          const change = (Math.random() - 0.5) * 0.4
          return Math.max(35.5, Math.min(38.5, prev + change))
        })
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isLive])

  const getTemperatureStatus = (temp: number) => {
    if (temp < 35.0) return { status: 'Hypothermia', color: 'text-blue-600', bg: 'bg-blue-100 dark:bg-blue-900/20', alert: true }
    if (temp < 36.0) return { status: 'Low', color: 'text-blue-600', bg: 'bg-blue-100 dark:bg-blue-900/20', alert: false }
    if (temp <= 37.5) return { status: 'Normal', color: 'text-green-600', bg: 'bg-green-100 dark:bg-green-900/20', alert: false }
    if (temp <= 38.0) return { status: 'Elevated', color: 'text-yellow-600', bg: 'bg-yellow-100 dark:bg-yellow-900/20', alert: false }
    if (temp <= 39.0) return { status: 'Fever', color: 'text-orange-600', bg: 'bg-orange-100 dark:bg-orange-900/20', alert: true }
    return { status: 'High Fever', color: 'text-red-600', bg: 'bg-red-100 dark:bg-red-900/20', alert: true }
  }

  const status = getTemperatureStatus(currentTemp)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Temperature Monitoring</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Track your body temperature and detect fever patterns
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsLive(!isLive)}
            className={`px-3 py-1 text-sm rounded-md transition-colors ${isLive
              ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
              : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
              }`}
          >
            {isLive ? 'Live' : 'Static'}
          </button>
        </div>
      </div>

      {/* Current Temperature */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Thermometer className="h-8 w-8 text-orange-500 mr-3" />
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Current Temperature</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{currentTemp.toFixed(1)}°C</p>
              </div>
            </div>
            <div className={`px-3 py-1 rounded-full text-sm font-medium ${status.bg} ${status.color}`}>
              {status.status}
            </div>
          </div>
          {status.alert && (
            <div className="flex items-center text-orange-600 text-sm">
              <AlertTriangle className="h-4 w-4 mr-1" />
              Attention needed
            </div>
          )}
        </div>

        <div className="card p-6">
          <div className="flex items-center mb-4">
            <TrendingUp className="h-8 w-8 text-green-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Today's Average</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">36.9°C</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">Within normal range</p>
        </div>

        <div className="card p-6">
          <div className="flex items-center mb-4">
            <TrendingDown className="h-8 w-8 text-blue-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Today's Low</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">36.2°C</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">At 06:00 AM</p>
        </div>

        <div className="card p-6">
          <div className="flex items-center mb-4">
            <Activity className="h-8 w-8 text-red-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Today's High</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">37.8°C</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">At 06:00 PM</p>
        </div>
      </div>

      {/* Temperature Chart */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">24-Hour Temperature Trend</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={temperatureData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis domain={[35.5, 38.5]} />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="temp"
                stroke="#f59e0b"
                fill="#f59e0b"
                fillOpacity={0.3}
              />
              <Line
                type="monotone"
                dataKey="temp"
                stroke="#f59e0b"
                strokeWidth={2}
                dot={{ fill: '#f59e0b', strokeWidth: 2, r: 4 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Weekly Overview */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Weekly Temperature Overview</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={weeklyTemperatureData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis domain={[36, 38]} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="avg"
                stroke="#f59e0b"
                strokeWidth={3}
                dot={{ fill: '#f59e0b', strokeWidth: 2, r: 5 }}
              />
              <Line
                type="monotone"
                dataKey="max"
                stroke="#ef4444"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ fill: '#ef4444', strokeWidth: 2, r: 3 }}
              />
              <Line
                type="monotone"
                dataKey="min"
                stroke="#3b82f6"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ fill: '#3b82f6', strokeWidth: 2, r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Temperature Zones */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Temperature Zones</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                <span className="font-medium text-gray-900 dark:text-white">High Fever</span>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-300">39.0°C</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                <span className="font-medium text-gray-900 dark:text-white">Fever</span>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-300">38.0-39.0°C</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                <span className="font-medium text-gray-900 dark:text-white">Elevated</span>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-300">37.5-38.0°C</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span className="font-medium text-gray-900 dark:text-white">Normal</span>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-300">36.0-37.5°C</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <span className="font-medium text-gray-900 dark:text-white">Low</span>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-300">35.0-36.0°C</span>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Temperature Insights</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Normal Daily Pattern</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Your temperature follows a healthy circadian rhythm
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Evening Peak</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Temperature typically peaks in the late afternoon
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Mild Elevation</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Slight elevation detected - monitor for symptoms
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fever Detection */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Fever Detection & Alerts</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">No Fever Detected</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Your temperature is within normal range
            </p>
          </div>

          <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Monitor Symptoms</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Watch for fatigue, body aches, or other symptoms
            </p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Seek Medical Attention</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              If fever persists or exceeds 39°C
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 