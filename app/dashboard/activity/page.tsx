"use client"

import { useState, useEffect } from 'react'
import { Activity, TrendingUp, TrendingDown, Target, Clock, Zap, MapPin } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts'

const activityData = [
  { time: '06:00', steps: 1200, calories: 85, distance: 0.8 },
  { time: '08:00', steps: 2800, calories: 195, distance: 1.9 },
  { time: '10:00', steps: 4500, calories: 315, distance: 3.0 },
  { time: '12:00', steps: 6200, calories: 435, distance: 4.1 },
  { time: '14:00', steps: 7800, calories: 545, distance: 5.2 },
  { time: '16:00', steps: 9200, calories: 645, distance: 6.1 },
  { time: '18:00', steps: 10500, calories: 735, distance: 7.0 },
  { time: '20:00', steps: 11800, calories: 825, distance: 7.9 },
  { time: '22:00', steps: 12500, calories: 875, distance: 8.3 },
]

const weeklyActivityData = [
  { day: 'Mon', steps: 12500, calories: 875, distance: 8.3, goal: 10000 },
  { day: 'Tue', steps: 9800, calories: 686, distance: 6.5, goal: 10000 },
  { day: 'Wed', steps: 14200, calories: 994, distance: 9.4, goal: 10000 },
  { day: 'Thu', steps: 11200, calories: 784, distance: 7.4, goal: 10000 },
  { day: 'Fri', steps: 8900, calories: 623, distance: 5.9, goal: 10000 },
  { day: 'Sat', steps: 15800, calories: 1106, distance: 10.5, goal: 10000 },
  { day: 'Sun', steps: 13500, calories: 945, distance: 9.0, goal: 10000 },
]

const activityBreakdown = [
  { name: 'Walking', value: 65, color: '#10b981' },
  { name: 'Running', value: 20, color: '#ef4444' },
  { name: 'Cycling', value: 10, color: '#3b82f6' },
  { name: 'Other', value: 5, color: '#f59e0b' },
]

export default function ActivityPage() {
  const [currentSteps, setCurrentSteps] = useState(12500)
  const [isLive, setIsLive] = useState(true)

  useEffect(() => {
    if (isLive) {
      const interval = setInterval(() => {
        setCurrentSteps(prev => prev + Math.floor(Math.random() * 50))
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isLive])

  const dailyGoal = 10000
  const progress = (currentSteps / dailyGoal) * 100
  const caloriesBurned = Math.round(currentSteps * 0.07)
  const distance = (currentSteps * 0.0008).toFixed(1)

  const getActivityStatus = (steps: number) => {
    if (steps >= dailyGoal) return { status: 'Goal Achieved!', color: 'text-green-600', bg: 'bg-green-100 dark:bg-green-900/20' }
    if (steps >= dailyGoal * 0.8) return { status: 'Almost There', color: 'text-blue-600', bg: 'bg-blue-100 dark:bg-blue-900/20' }
    if (steps >= dailyGoal * 0.6) return { status: 'Good Progress', color: 'text-yellow-600', bg: 'bg-yellow-100 dark:bg-yellow-900/20' }
    return { status: 'Keep Moving', color: 'text-red-600', bg: 'bg-red-100 dark:bg-red-900/20' }
  }

  const status = getActivityStatus(currentSteps)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Activity Monitoring</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Track your daily steps, calories, and physical activity
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

      {/* Activity Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Activity className="h-8 w-8 text-green-500 mr-3" />
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Today's Steps</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{currentSteps.toLocaleString()}</p>
              </div>
            </div>
            <div className={`px-3 py-1 rounded-full text-sm font-medium ${status.bg} ${status.color}`}>
              {status.status}
            </div>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
            <div
              className="bg-green-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {dailyGoal.toLocaleString()} goal • {progress.toFixed(1)}% complete
          </p>
        </div>

        <div className="card p-6">
          <div className="flex items-center mb-4">
            <Zap className="h-8 w-8 text-orange-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Calories Burned</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{caloriesBurned}</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">From steps today</p>
        </div>

        <div className="card p-6">
          <div className="flex items-center mb-4">
            <MapPin className="h-8 w-8 text-blue-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Distance</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{distance} km</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">Total distance walked</p>
        </div>

        <div className="card p-6">
          <div className="flex items-center mb-4">
            <Clock className="h-8 w-8 text-purple-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Active Time</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">2h 15m</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">Today's activity</p>
        </div>
      </div>

      {/* Activity Chart */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Today's Activity Progress</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={activityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="steps"
                stroke="#10b981"
                strokeWidth={3}
                dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Weekly Activity Overview */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Weekly Activity Overview</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={weeklyActivityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="steps" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Activity Breakdown & Goals */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Activity Breakdown</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={activityBreakdown}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {activityBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Weekly Goals</h3>
          <div className="space-y-4">
            {weeklyActivityData.map((day, index) => {
              const goalMet = day.steps >= day.goal
              return (
                <div key={day.day} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-3 ${goalMet ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                    <span className="font-medium text-gray-900 dark:text-white">{day.day}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {day.steps.toLocaleString()} / {day.goal.toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-300">
                      {goalMet ? 'Goal achieved!' : `${((day.steps / day.goal) * 100).toFixed(0)}%`}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Activity Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Activity Insights</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Consistent Activity</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  You've met your daily goal 5 out of 7 days this week
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Peak Activity Time</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Your most active hours are between 2-6 PM
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Weekend Boost</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  You're 25% more active on weekends
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Activity Recommendations</h3>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Increase Intensity</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Try adding 10 minutes of brisk walking to boost your daily activity
              </p>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Set Higher Goals</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Consider increasing your daily step goal to 12,000 steps
              </p>
            </div>

            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Variety is Key</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Mix walking with cycling or swimming for better fitness
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Activity Achievements */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg text-center">
            <Target className="h-8 w-8 text-green-500 mx-auto mb-2" />
            <h4 className="font-medium text-gray-900 dark:text-white mb-1">7-Day Streak</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Met daily goal for 7 consecutive days
            </p>
          </div>

          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center">
            <TrendingUp className="h-8 w-8 text-blue-500 mx-auto mb-2" />
            <h4 className="font-medium text-gray-900 dark:text-white mb-1">Distance Master</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Walked 50+ km this month
            </p>
          </div>

          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-center">
            <Zap className="h-8 w-8 text-purple-500 mx-auto mb-2" />
            <h4 className="font-medium text-gray-900 dark:text-white mb-1">Calorie Burner</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Burned 5,000+ calories this week
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 