"use client"

import { useState } from 'react'
import { Lightbulb, Heart, Moon, Activity, Thermometer, TrendingUp, Clock, Target } from 'lucide-react'

interface Recommendation {
  id: string
  title: string
  description: string
  category: 'sleep' | 'exercise' | 'diet' | 'general'
  priority: 'low' | 'medium' | 'high'
  icon: any
  color: string
  bgColor: string
  timestamp: string
}

const recommendations: Recommendation[] = [
  {
    id: '1',
    title: 'Improve Sleep Quality',
    description: 'Your sleep quality has been declining. Try going to bed 30 minutes earlier and avoid screens 1 hour before sleep.',
    category: 'sleep',
    priority: 'high',
    icon: Moon,
    color: 'text-purple-500',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    timestamp: '2 hours ago',
  },
  {
    id: '2',
    title: 'Increase Daily Steps',
    description: 'You\'re averaging 7,500 steps daily. Aim for 10,000 steps to improve cardiovascular health.',
    category: 'exercise',
    priority: 'medium',
    icon: Activity,
    color: 'text-green-500',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    timestamp: '1 day ago',
  },
  {
    id: '3',
    title: 'Monitor Heart Rate',
    description: 'Your heart rate has been elevated during work hours. Consider stress management techniques.',
    category: 'general',
    priority: 'high',
    icon: Heart,
    color: 'text-red-500',
    bgColor: 'bg-red-50 dark:bg-red-900/20',
    timestamp: '3 hours ago',
  },
  {
    id: '4',
    title: 'Stay Hydrated',
    description: 'Based on your activity level, you should drink at least 8 glasses of water daily.',
    category: 'diet',
    priority: 'low',
    icon: Thermometer,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    timestamp: '2 days ago',
  },
  {
    id: '5',
    title: 'Take Regular Breaks',
    description: 'You\'ve been sitting for 4 hours straight. Take a 5-minute walk every hour.',
    category: 'exercise',
    priority: 'medium',
    icon: Clock,
    color: 'text-orange-500',
    bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    timestamp: '4 hours ago',
  },
  {
    id: '6',
    title: 'Set Fitness Goals',
    description: 'Create specific, measurable fitness goals to track your progress better.',
    category: 'exercise',
    priority: 'low',
    icon: Target,
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
    timestamp: '1 week ago',
  },
]

export default function RecommendationsPage() {
  const [filter, setFilter] = useState<'all' | 'high' | 'medium' | 'low'>('all')
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'sleep' | 'exercise' | 'diet' | 'general'>('all')

  const filteredRecommendations = recommendations.filter(rec => {
    const priorityMatch = filter === 'all' || rec.priority === filter
    const categoryMatch = categoryFilter === 'all' || rec.category === categoryFilter
    return priorityMatch && categoryMatch
  })

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-300'
      case 'medium':
        return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300'
      case 'low':
        return 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-300'
      default:
        return 'text-gray-600 bg-gray-100 dark:bg-gray-700 dark:text-gray-300'
    }
  }

  const stats = {
    total: recommendations.length,
    high: recommendations.filter(r => r.priority === 'high').length,
    medium: recommendations.filter(r => r.priority === 'medium').length,
    low: recommendations.filter(r => r.priority === 'low').length,
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Health Recommendations</h1>
        <p className="text-gray-600 dark:text-gray-300">
          AI-powered suggestions to improve your health and wellness
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card p-4 text-center">
          <div className="flex items-center justify-center mb-2">
            <Lightbulb className="h-6 w-6 text-blue-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.total}</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">Total Recommendations</p>
        </div>

        <div className="card p-4 text-center">
          <div className="flex items-center justify-center mb-2">
            <TrendingUp className="h-6 w-6 text-red-500" />
          </div>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.high}</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">High Priority</p>
        </div>

        <div className="card p-4 text-center">
          <div className="flex items-center justify-center mb-2">
            <Target className="h-6 w-6 text-yellow-500" />
          </div>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.medium}</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">Medium Priority</p>
        </div>

        <div className="card p-4 text-center">
          <div className="flex items-center justify-center mb-2">
            <Clock className="h-6 w-6 text-green-500" />
          </div>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.low}</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">Low Priority</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Priority:</span>
          {[
            { key: 'all', label: 'All' },
            { key: 'high', label: 'High' },
            { key: 'medium', label: 'Medium' },
            { key: 'low', label: 'Low' },
          ].map((option) => (
            <button
              key={option.key}
              onClick={() => setFilter(option.key as any)}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${filter === option.key
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-2 ml-4">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Category:</span>
          {[
            { key: 'all', label: 'All' },
            { key: 'sleep', label: 'Sleep' },
            { key: 'exercise', label: 'Exercise' },
            { key: 'diet', label: 'Diet' },
            { key: 'general', label: 'General' },
          ].map((option) => (
            <button
              key={option.key}
              onClick={() => setCategoryFilter(option.key as any)}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${categoryFilter === option.key
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Recommendations List */}
      <div className="space-y-4">
        {filteredRecommendations.length === 0 ? (
          <div className="text-center py-12">
            <Lightbulb className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              No recommendations found
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Try adjusting your filters or check back later for new suggestions.
            </p>
          </div>
        ) : (
          filteredRecommendations.map((recommendation) => (
            <div
              key={recommendation.id}
              className={`card p-6 border-l-4 ${recommendation.bgColor}`}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-full ${recommendation.bgColor}`}>
                  <recommendation.icon className={`h-6 w-6 ${recommendation.color}`} />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {recommendation.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-3">
                        {recommendation.description}
                      </p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(recommendation.priority)}`}>
                        {recommendation.priority}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {recommendation.timestamp}
                    </span>

                    <div className="flex items-center space-x-2">
                      <button className="text-sm text-blue-600 hover:text-blue-500 font-medium">
                        Mark as done
                      </button>
                      <button className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                        Dismiss
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Action Plan */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Your Action Plan</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="font-medium text-gray-900 dark:text-white">Improve sleep schedule</span>
            </div>
            <span className="text-sm text-gray-500">In progress</span>
          </div>

          <div className="flex items-center justify-between p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="font-medium text-gray-900 dark:text-white">Increase daily steps</span>
            </div>
            <span className="text-sm text-gray-500">Not started</span>
          </div>

          <div className="flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="font-medium text-gray-900 dark:text-white">Practice stress management</span>
            </div>
            <span className="text-sm text-gray-500">Completed</span>
          </div>
        </div>
      </div>
    </div>
  )
} 