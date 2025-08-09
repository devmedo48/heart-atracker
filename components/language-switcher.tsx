"use client"

import { useLanguage } from './language-provider'
import { Globe } from 'lucide-react'

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="relative">
      <button
        onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
        className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">
          {language === 'en' ? 'English' : 'العربية'}
        </span>
        <span className="sm:hidden">
          {language === 'en' ? 'EN' : 'AR'}
        </span>
      </button>
    </div>
  )
} 