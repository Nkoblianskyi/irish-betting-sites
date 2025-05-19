"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AdvertiserInfoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserInfoModal({ isOpen, onClose }: AdvertiserInfoModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-fade-in">
      <div className="relative w-full max-w-md bg-white rounded-lg shadow-lg p-6 animate-scale-in">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Advertiser Information</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors duration-300 hover:rotate-90 transform"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="prose prose-sm max-w-none">
          <p>
            The content published on this website serves purely informational purposes. While we maintain editorial
            independence, we may receive financial compensation from the betting operators featured when we display
            their promotional offers. This arrangement helps support our research and content creation.
          </p>
          <p>
            We make every effort to ensure our information remains current and precise, however, we cannot provide
            absolute guarantees regarding the accuracy, completeness, or reliability of any content presented. All
            betting operators featured on our platform maintain proper licensing and regulation by appropriate gambling
            authorities.
          </p>
          <p>
            We emphasize that gambling activities involve inherent risks and should be approached with caution and
            responsibility. We strongly encourage all users to familiarize themselves with the gambling regulations
            applicable in their jurisdiction before engaging in any betting activities.
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
