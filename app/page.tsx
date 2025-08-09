import Link from 'next/link'
import { Heart, Moon, Thermometer, Activity, Bell, Lightbulb, Settings, Sun, Smartphone } from 'lucide-react'
import HeartbeatBackground from '@/components/HeartbeatBackground'

const features = [
  {
    icon: Heart,
    title: 'heartRateMonitoring',
    description: 'trackYourHeartRate',
    color: 'text-red-500',
    bgColor: 'bg-red-50 dark:bg-red-900/20',
  },
  {
    icon: Moon,
    title: 'sleepTracking',
    description: 'trackYourSleepPatterns',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
  },
  {
    icon: Thermometer,
    title: 'temperatureMonitoring',
    description: 'trackBodyTemperature',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50 dark:bg-orange-900/20',
  },
  {
    icon: Activity,
    title: 'activityTracking',
    description: 'trackDailySteps',
    color: 'text-green-500',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
  },
  {
    icon: Bell,
    title: 'notifications',
    description: 'realTimeMonitoring',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
  },
  {
    icon: Lightbulb,
    title: 'recommendations',
    description: 'smartRecommendations',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-red-500 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Health Tracker</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/auth/login"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium"
              >
                Login
              </Link>
              <Link
                href="/auth/register"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20">
        <HeartbeatBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-screen flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-100 dark:text-white mb-6">
              Welcome to Health Tracker
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              A comprehensive health tracking dashboard with real-time monitoring, smart recommendations, and beautiful visualizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/auth/register"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors text-lg"
              >
                Get Started
              </Link>
              <Link
                href="/auth/login"
                className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium py-3 px-8 rounded-lg transition-colors text-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Everything you need to monitor and improve your health
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className={`p-6 rounded-lg ${feature.bgColor}`}>
                <div className={`p-3 rounded-full ${feature.bgColor} w-fit mb-4`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title === 'heartRateMonitoring' && 'Heart Rate Monitoring'}
                  {feature.title === 'sleepTracking' && 'Sleep Tracking'}
                  {feature.title === 'temperatureMonitoring' && 'Temperature Monitoring'}
                  {feature.title === 'activityTracking' && 'Activity Tracking'}
                  {feature.title === 'notifications' && 'Notifications'}
                  {feature.title === 'recommendations' && 'Recommendations'}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description === 'trackYourHeartRate' && 'Track your heart rate and detect patterns'}
                  {feature.description === 'trackYourSleepPatterns' && 'Track your sleep patterns and quality'}
                  {feature.description === 'trackBodyTemperature' && 'Track your body temperature and detect fever patterns'}
                  {feature.description === 'trackDailySteps' && 'Track your daily steps, calories, and physical activity'}
                  {feature.description === 'realTimeMonitoring' && 'Real-time monitoring and alerts'}
                  {feature.description === 'smartRecommendations' && 'AI-powered health recommendations'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Dark Mode & Mobile Responsive
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Enjoy a beautiful interface that adapts to your preferences and works perfectly on all devices.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Sun className="h-6 w-6 text-yellow-500 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">Dark/Light mode toggle</span>
                </div>
                <div className="flex items-center">
                  <Smartphone className="h-6 w-6 text-blue-500 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">Mobile responsive design</span>
                </div>
                <div className="flex items-center">
                  <Settings className="h-6 w-6 text-gray-500 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">Customizable settings</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-8">
              <div className="aspect-video bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Dashboard Preview</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to start tracking your health?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of users who are already improving their health with our comprehensive tracking dashboard.
          </p>
          <Link
            href="/auth/register"
            className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors text-lg"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Heart className="h-6 w-6 text-red-500 mr-2" />
              <span className="text-white font-semibold">Health Tracker</span>
            </div>
            <p className="text-gray-400">
              © 2024 Health Tracker. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 