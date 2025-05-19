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
        // Use a more reliable way to fetch the JSON data
        const response = await fetch("/data/betting-sites.json", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const text = await response.text()
        try {
          const data = JSON.parse(text)
          // Get top 3 sites by score
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
      <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden animate-scale-in">
        <div className="bg-emerald-600 text-white py-3 px-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">TOP OFFERS</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-gray-200 transition-transform duration-300 hover:rotate-90 transform"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {loading ? (
          <div className="p-8 text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-emerald-600 border-r-transparent"></div>
            <p className="mt-2">Loading top offers...</p>
          </div>
        ) : error ? (
          <div className="p-8 text-center text-red-500">
            <p>{error}</p>
            <Button onClick={() => window.location.reload()} className="mt-4 bg-emerald-600 hover:bg-emerald-700">
              Retry
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            {topSites.map((site, index) => (
              <Card
                key={site.id}
                className={`border transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 ${
                  index === 1 ? "border-emerald-500 relative" : ""
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {index === 1 && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-emerald-600 text-white px-3 py-1 text-xs rounded animate-pulse">
                    TOP!
                  </div>
                )}
                <CardContent className="p-4 flex flex-col items-center">
                  <div className="h-16 w-full flex items-center justify-center mb-4">
                    <Image
                      src={site.logo || "/placeholder.svg"}
                      alt={site.name}
                      width={150}
                      height={60}
                      className="object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="text-center mb-4">
                    <p className="text-sm text-gray-500">{site.welcomeOffer}</p>
                    <h3 className="font-bold">{site.bonus}</h3>
                  </div>
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-yellow-400 transition-transform duration-300 hover:scale-125"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                      <span className="ml-2 font-bold text-lg">{site.score.toFixed(1)}</span>
                    </div>
                    <div className="ml-2">
                      <Image
                        src="/images/18-plus.png"
                        alt="18+"
                        width={24}
                        height={24}
                        className="transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                  </div>
                  <Button
                    className="w-full bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 hover:shadow-lg transform hover:scale-105 animate-glow animate-blink"
                    onClick={() => window.open(site.link, "_blank")}
                  >
                    GET BONUS
                  </Button>
                  <p className="text-xs text-gray-500 mt-2">18+. T&Cs Apply. Play Responsibly.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
