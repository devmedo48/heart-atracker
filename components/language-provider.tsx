"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'
import { Language, getTranslation, getDirection } from '@/lib/i18n'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  direction: 'ltr' | 'rtl'
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    // Load language from localStorage or default to 'en'
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ar')) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)

    // Update document direction and language
    const direction = getDirection(lang)
    document.documentElement.dir = direction
    document.documentElement.lang = lang

    // Update body direction as well
    document.body.dir = direction
    document.body.lang = lang
  }

  const t = (key: string) => {
    return getTranslation(language, key as any)
  }

  const direction = getDirection(language)

  // Set initial document attributes
  useEffect(() => {
    const direction = getDirection(language)
    document.documentElement.dir = direction
    document.documentElement.lang = language
    document.body.dir = direction
    document.body.lang = language
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t, direction }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 