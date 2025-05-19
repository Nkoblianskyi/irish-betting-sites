"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface BettingSite {
  id: string
  name: string
  logo: string
  score: number
  bonus: string
  bonusCode: string
  welcomeOffer: string
  features: string[]
  isNew: boolean
  reviews: number
  link: string
}

export function TopOffersModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [topSites, setTopSites] = useState<BettingSite[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Show modal after 3 seconds
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 3000)

    // Fetch top sites
    const fetchTopSites = async () => {
      try {
        const response = await fetch("/data/betting-sites.json")
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const text = await response.text()
        try {
          const data = JSON.parse(text)
          const top3 = [...data.sites].sort((a, b) => b.score - a.score).slice(0, 3)
          setTopSites(top3)
          setLoading(false)
        } catch (parseError) {
          console.error("JSON parsing error:", parseError)
          setError("Error parsing data. Please try again later.")
          setLoading(false)
        }
      } catch (error) {
        console.error("Error fetching top sites:", error)
        setError("Failed to load top offers. Please try again later.")
        setLoading(false)
      }
    }

    fetchTopSites()

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-lg shadow-lg overflow-auto animate-scale-in">
        <div className="sticky top-0 z-10 bg-emerald-600 text-white py-2 px-4 flex items-center justify-between">
          <h2 className="text-lg sm:text-xl font-bold">TOP OFFERS</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-gray-200 transition-transform duration-300 hover:rotate-90 transform"
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>

        {loading ? (
          <div className="p-6 text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-emerald-600 border-r-transparent"></div>
            <p className="mt-2">Loading top offers...</p>
          </div>
        ) : error ? (
          <div className="p-6 text-center text-red-500">
            <p>{error}</p>
            <Button onClick={() => window.location.reload()} className="mt-4 bg-emerald-600 hover:bg-emerald-700">
              Retry
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-3">
            {topSites.map((site, index) => (
              <Card
                key={site.id}
                className={`border transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 ${index === 1 ? "border-emerald-500 relative" : ""}`}
              >
                {index === 1 && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-emerald-600 text-white px-3 py-1 text-xs rounded animate-pulse">
                    TOP!
                  </div>
                )}
                <CardContent className="p-3 flex flex-col items-center">
                  <div className="h-12 sm:h-16 w-full flex items-center justify-center mb-2 sm:mb-4">
                    <Image
                      src={site.logo || "/placeholder.svg"}
                      alt={site.name}
                      width={120}
                      height={48}
                      className="object-contain transition-transform duration-300 hover:scale-105 max-h-full"
                    />
                  </div>
                  <div className="text-center mb-2 sm:mb-4">
                    <p className="text-xs text-gray-500 line-clamp-1">{site.welcomeOffer}</p>
                    <h3 className="font-bold text-sm sm:text-base">{site.bonus}</h3>
                  </div>
                  <Button
                    className="w-full bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 hover:shadow-lg transform hover:scale-105 text-xs sm:text-sm py-1 h-auto sm:h-10"
                    onClick={() => window.open(site.link, "_blank")}
                  >
                    GET BONUS
                  </Button>
                  <p className="text-[10px] sm:text-xs text-gray-500 mt-1 sm:mt-2">
                    18+. T&Cs Apply. Play Responsibly.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="p-3 flex justify-center border-t">
          <Button variant="outline" size="sm" onClick={() => setIsOpen(false)} className="text-xs sm:text-sm">
            Close
          </Button>
        </div>
      </div>
    </div>
  )
}

export default TopOffersModal