"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

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

export function BettingSitesList() {
  const [sites, setSites] = useState<BettingSite[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchSites = async () => {
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
          setSites(data.sites)
          setLoading(false)
        } catch (parseError) {
          console.error("JSON parsing error:", parseError)
          setError("Error parsing data. Please try again later.")
          setLoading(false)
        }
      } catch (error) {
        console.error("Error fetching betting sites:", error)
        setError("Failed to load betting sites. Please try again later.")
        setLoading(false)
      }
    }

    fetchSites()
  }, [])

  if (loading) {
    return (
      <div className="container mx-auto py-12 px-4">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-emerald-600 border-r-transparent"></div>
          <p className="mt-2">Loading betting sites...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto py-12 px-4">
        <div className="text-center text-red-500">
          <p>{error}</p>
          <Button onClick={() => window.location.reload()} className="mt-4 bg-emerald-600 hover:bg-emerald-700">
            Retry
          </Button>
        </div>
      </div>
    )
  }

  return (
    <section className="py-1 bg-gray-50">
      <div className="container mx-auto px-2 sm:px-4">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-2 animate-fade-in text-black">
          Bookmakers available in Ireland
        </h2>

        <div className="w-full space-y-2 sm:space-y-4">
          {sites.map((site, index) => (
            <div
              key={site.id}
              className="bg-white border-b p-2 sm:p-4 mb-2 sm:mb-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 sm:gap-4 items-center">
                <div className="col-span-2 sm:col-span-1 md:col-span-1">
                  <div className="h-10 sm:h-16 flex items-center justify-center">
                    <Image
                      src={site.logo || "/placeholder.svg"}
                      alt={site.name}
                      width={150}
                      height={60}
                      className="object-contain max-h-8 sm:max-h-full transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-1 md:col-span-1">
                  <div>
                    <p className="text-[10px] sm:text-xs text-emerald-600 uppercase">{site.welcomeOffer}</p>
                    <p className="font-bold text-sm sm:text-base text-black">{site.bonus}</p>
                  </div>
                </div>

                <div className="col-span-1 sm:col-span-1 md:col-span-1">
                  <div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 transition-transform duration-300 hover:scale-125"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                    <p className="text-[10px] sm:text-xs text-gray-500">({site.reviews} reviews)</p>
                  </div>
                </div>

                <div className="col-span-1 sm:col-span-1 md:col-span-1 text-center relative">
                  <span className="text-lg sm:text-xl font-bold text-black">{site.score.toFixed(1)}</span>
                  <div className="absolute -top-1 -right-1 md:top-0 md:right-0">
                    <Image
                      src="/images/18-plus.png"
                      alt="18+"
                      width={24}
                      height={24}
                      className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                </div>

                <div className="hidden sm:block md:col-span-1">
                  <ul className="space-y-0 sm:space-y-1">
                    {site.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-xs sm:text-sm group text-black">
                        <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-600 mr-1 sm:mr-2 transition-transform duration-300 group-hover:scale-110" />
                        <span className="group-hover:text-emerald-600 transition-colors duration-300 line-clamp-1">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="col-span-2 sm:col-span-1 md:col-span-1">
                  <Button
                    className="w-full h-8 sm:h-auto text-xs sm:text-sm bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 hover:shadow-lg transform hover:scale-105 animate-glow animate-blink"
                    onClick={() => window.open(site.link, "_blank")}
                  >
                    Get Bonus
                  </Button>
                  <p className="text-[10px] sm:text-xs text-gray-500 text-center mt-0.5 sm:mt-1">
                    18+. T&Cs Apply. Play Responsibly.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BettingSitesList
