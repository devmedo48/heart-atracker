"use client"

import { useState, useEffect } from 'react'
import { Heart, Moon, Thermometer, Activity, TrendingUp, TrendingDown } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'
import { useLanguage } from '@/components/language-provider'

const heartRateData = [
  { time: '00:00', bpm: 65 },
  { time: '04:00', bpm: 58 },
  { time: '08:00', bpm: 72 },
  { time: '12:00', bpm: 85 },
  { time: '16:00', bpm: 78 },
  { time: '20:00', bpm: 68 },
  { time: '24:00', bpm: 62 },
]

const sleepData = [
  { day: 'Mon', hours: 7.5 },
  { day: 'Tue', hours: 6.8 },
  { day: 'Wed', hours: 8.2 },
  { day: 'Thu', hours: 7.1 },
  { day: 'Fri', hours: 6.5 },
  { day: 'Sat', hours: 8.5 },
  { day: 'Sun', hours: 7.8 },
]

const activityData = [
  { day: 'Mon', steps: 12500 },
  { day: 'Tue', steps: 9800 },
  { day: 'Wed', steps: 14200 },
  { day: 'Thu', steps: 11200 },
  { day: 'Fri', steps: 8900 },
  { day: 'Sat', steps: 15800 },
  { day: 'Sun', steps: 13500 },
]

const temperatureData = [
  { day: 'Mon', temp: 36.8 },
  { day: 'Tue', temp: 37.1 },
  { day: 'Wed', temp: 36.9 },
  { day: 'Thu', temp: 37.2 },
  { day: 'Fri', temp: 36.7 },
  { day: 'Sat', temp: 36.8 },
  { day: 'Sun', temp: 37.0 },
]

export default function DashboardPage() {
  const [currentHeartRate, setCurrentHeartRate] = useState(72)
  const [currentTemperature, setCurrentTemperature] = useState(36.8)
  const { t, language } = useLanguage()
  const isRTL = language === 'ar'

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeartRate(prev => {
        const change = Math.floor(Math.random() * 10) - 5
        return Math.max(50, Math.min(120, prev + change))
      })
      setCurrentTemperature(prev => {
        const change = (Math.random() - 0.5) * 0.4
        return Math.max(35.5, Math.min(38.5, prev + change))
      })
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const getHeartRateStatus = (bpm: number) => {
    if (bpm < 60) return { status: t('low'), color: 'text-blue-600', bg: 'bg-blue-100 dark:bg-blue-900/20' }
    if (bpm <= 100) return { status: t('normal'), color: 'text-green-600', bg: 'bg-green-100 dark:bg-green-900/20' }
    return { status: t('high'), color: 'text-red-600', bg: 'bg-red-100 dark:bg-red-900/20' }
  }

  const heartRateStatus = getHeartRateStatus(currentHeartRate)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{t('overview')}</h1>
        <p className="text-gray-600 dark:text-gray-300">
          {t('comprehensiveHealthDashboard')}
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Heart className={`h-8 w-8 text-red-500 ${isRTL ? 'ml-3' : 'mr-3'}`} />
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-300">{t('currentHeartRate')}</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{currentHeartRate} <span className={isRTL ? 'text-sm' : 'text-2xl'}>{t('bpm')}</span></p>
              </div>
            </div>
            <div className={`px-3 py-1 rounded-full text-sm font-medium ${heartRateStatus.bg} ${heartRateStatus.color}`}>
              {heartRateStatus.status}
            </div>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300">
            {t('restingRate')}: 62 {t('bpm')}
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center mb-4">
            <Moon className={`h-8 w-8 text-purple-500 ${isRTL ? 'ml-3' : 'mr-3'}`} />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">{t('lastNight')}</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">7.8h</p>
            </div>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300">
            {t('sleepQuality')}: 88%
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center mb-4">
            <Thermometer className={`h-8 w-8 text-orange-500 ${isRTL ? 'ml-3' : 'mr-3'}`} />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">{t('currentTemperature')}</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{currentTemperature.toFixed(1)}°C</p>
            </div>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300">
            {t('withinNormalRange')}
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center mb-4">
            <Activity className={`h-8 w-8 text-green-500 ${isRTL ? 'ml-3' : 'mr-3'}`} />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">{t('todaySteps')}</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">12,500</p>
            </div>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300">
            {t('goal')}: 10,000
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t('heartRateMonitoring')}</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={heartRateData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="bpm"
                  stroke="#ef4444"
                  strokeWidth={3}
                  dot={{ fill: '#ef4444', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t('sleepMonitoring')}</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sleepData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="hours" fill="#8b5cf6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t('activityMonitoring')}</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="steps" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t('temperatureMonitoring')}</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={temperatureData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis domain={[36, 38]} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="temp"
                  stroke="#f59e0b"
                  strokeWidth={3}
                  dot={{ fill: '#f59e0b', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <div className="flex items-center">
              <TrendingUp className="h-5 w-5 text-green-500 mr-3" />
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Goal Achieved!</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">You reached your daily step goal</p>
              </div>
            </div>
            <span className="text-sm text-gray-500">2 hours ago</span>
          </div>

          <div className="flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <div className="flex items-center">
              <Moon className="h-5 w-5 text-blue-500 mr-3" />
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Sleep Quality Improved</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Your deep sleep increased by 15%</p>
              </div>
            </div>
            <span className="text-sm text-gray-500">1 day ago</span>
          </div>

          <div className="flex items-center justify-between p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
            <div className="flex items-center">
              <TrendingDown className="h-5 w-5 text-yellow-500 mr-3" />
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Heart Rate Elevated</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Consider taking a break</p>
              </div>
            </div>
            <span className="text-sm text-gray-500">3 hours ago</span>
          </div>
        </div>
      </div>
    </div>
  )
} 