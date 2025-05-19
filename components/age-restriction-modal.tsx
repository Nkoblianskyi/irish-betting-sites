"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AgeRestrictionModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AgeRestrictionModal({ isOpen, onClose }: AgeRestrictionModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-fade-in">
      <div className="relative w-full max-w-md bg-white rounded-lg shadow-lg p-6 animate-scale-in">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">18+ T&Cs Apply</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors duration-300 hover:rotate-90 transform"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="prose prose-sm max-w-none">
          <p>
            Across our website, we present information regarding promotional offers and bonuses from various online
            betting operators. Each promotion comes with its own specific Terms and Conditions that govern its use. You
            can access the complete details by visiting the operator's official website through our referral links. We
            strongly urge all visitors to thoroughly review and understand these terms and conditions before proceeding
            with any deposits to ensure they're fully comfortable with the requirements.
          </p>
        </div>
        <div className="mt-6 flex justify-end">
          <Button onClick={onClose} className="transition-all duration-300 hover:shadow-md transform hover:scale-105">
            Close
          </Button>
        </div>
      </div>
    </div>
  )
}
