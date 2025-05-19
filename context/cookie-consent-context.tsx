"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type CookieConsent = {
  analytics: boolean
  marketing: boolean
  necessary: boolean
}

interface CookieConsentContextType {
  consent: CookieConsent
  showBanner: boolean
  acceptAll: () => void
  declineAll: () => void
  savePreferences: (preferences: CookieConsent) => void
  toggleBanner: (show: boolean) => void
}

const defaultConsent: CookieConsent = {
  necessary: true,
  analytics: false,
  marketing: false,
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined)

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<CookieConsent>(defaultConsent)
  const [showBanner, setShowBanner] = useState<boolean>(false)

  useEffect(() => {
    try {
      const stored = typeof window !== "undefined" ? localStorage.getItem("cookieConsent") : null
      if (stored) {
        const parsed = JSON.parse(stored)
        if (
          parsed &&
          typeof parsed === "object" &&
          "necessary" in parsed &&
          "analytics" in parsed &&
          "marketing" in parsed
        ) {
          setConsent(parsed)
          setShowBanner(false)
        } else {
          throw new Error("Invalid stored consent format")
        }
      } else {
        setShowBanner(true)
      }
    } catch (err) {
      console.warn("Failed to parse stored cookie consent:", err)
      setConsent(defaultConsent)
      setShowBanner(true)
    }
  }, [])

  const saveConsent = (newConsent: CookieConsent) => {
    setConsent(newConsent)
    if (typeof window !== "undefined") {
      localStorage.setItem("cookieConsent", JSON.stringify(newConsent))
    }
  }

  const acceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, marketing: true }
    saveConsent(allAccepted)
    setShowBanner(false)
  }

  const declineAll = () => {
    saveConsent(defaultConsent)
    setShowBanner(false)
  }

  const savePreferences = (preferences: CookieConsent) => {
    saveConsent({ ...preferences, necessary: true })
    setShowBanner(false)
  }

  const toggleBanner = (show: boolean) => {
    setShowBanner(show)
  }

  return (
    <CookieConsentContext.Provider
      value={{ consent, showBanner, acceptAll, declineAll, savePreferences, toggleBanner }}
    >
      {children}
    </CookieConsentContext.Provider>
  )
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext)
  if (!context) {
    throw new Error("useCookieConsent must be used within a CookieConsentProvider")
  }
  return context
}
