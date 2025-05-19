"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BettingSitesList } from "@/components/betting-sites-list"
import { TopOffersModal } from "@/components/top-offers-modal"
import { AgeRestrictionModal } from "@/components/age-restriction-modal"
import { AdvertiserInfoModal } from "@/components/advertiser-info-modal"

export default function Home() {
  const [isAgeModalOpen, setIsAgeModalOpen] = useState(false)
  const [isAdvertiserModalOpen, setIsAdvertiserModalOpen] = useState(false)

  return (
    <main className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* Hero Section */}
      <section
        className="relative py-16 bg-cover bg-center text-white text-center"
        style={{
          backgroundImage: "url('/f793537e61017ba8d6e5e5e4075b0f43.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 animate-fade-in-up">
            IRELAND'S TOP <span className="text-emerald-500">ONLINE BETTING</span> PLATFORMS
          </h1>
          <p className="text-sm text-gray-300 mb-6 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            LAST UPDATED: APRIL 2025
          </p>
          <p className="max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            Searching for dependable betting platforms in Ireland? You've landed in exactly the right place! Our expert
            team has analyzed what Irish bettors truly value and we're here to guide you towards the most trustworthy
            options available.
          </p>

          <div
            className="flex flex-wrap justify-center gap-6 mb-8 animate-fade-in-up"
            style={{ animationDelay: "300ms" }}
          >
            <div className="flex items-center group">
              <span className="bg-emerald-600 p-1 rounded-full mr-2 transition-transform duration-300 group-hover:scale-110">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="group-hover:text-emerald-400 transition-colors duration-300">Fully Licensed</span>
            </div>
            <div className="flex items-center group">
              <span className="bg-emerald-600 p-1 rounded-full mr-2 transition-transform duration-300 group-hover:scale-110">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="group-hover:text-emerald-400 transition-colors duration-300">Regulated in Ireland</span>
            </div>
            <div className="flex items-center group">
              <span className="bg-emerald-600 p-1 rounded-full mr-2 transition-transform duration-300 group-hover:scale-110">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="group-hover:text-emerald-400 transition-colors duration-300">Quick Withdrawals</span>
            </div>
          </div>

          <p className="text-sm animate-fade-in-up" style={{ animationDelay: "400ms" }}>
            Play responsibly. Terms and wagering conditions apply.{" "}
            <button
              onClick={() => setIsAdvertiserModalOpen(true)}
              className="text-emerald-500 hover:text-emerald-400 hover:underline font-medium transition-colors duration-300"
            >
              Advertiser Info
            </button>{" "}
            |{" "}
            <button
              onClick={() => setIsAgeModalOpen(true)}
              className="text-emerald-500 hover:text-emerald-400 hover:underline font-medium transition-colors duration-300"
            >
              18+ Only
            </button>
          </p>
        </div>
      </section>

      {/* Betting Sites List */}
      <BettingSitesList />

      {/* Content Sections */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8 animate-fade-in">
            Your Ultimate Guide to Online Betting in Ireland
          </h2>

          <div className="prose max-w-4xl mx-auto">
            <p className="animate-fade-in-up">
              Whether you're new to online betting or an experienced punter looking for new platforms,
              10IrishBettingSites.com is your go-to resource. With countless sportsbooks available and new ones
              launching regularly, we're here to steer you toward Ireland's most trustworthy and rewarding betting
              sites.
            </p>

            <p className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              Every bookmaker we feature is fully licensed by the Ireland Betting Commission or a comparable authority,
              guaranteeing a secure and fair betting experience. Our team assesses each platform based on factors like
              welcome bonuses, odds competitiveness, market variety, mobile functionality, payout efficiency, and
              loyalty rewards.
            </p>

            <h3 className="text-2xl font-bold text-emerald-600 mt-10 mb-4 animate-fade-in">
              How to Select the Perfect Betting Site
            </h3>

            <p className="animate-fade-in-up">
              Choosing the right betting platform depends on your preferences, but these key factors can guide your
              decision:
            </p>

            <ol className="list-decimal pl-6 space-y-6 mt-4">
              <li className="animate-fade-in-up">
                <strong className="text-gray-900">Safety and Licensing</strong>
                <p>
                  All our recommended sites are fully regulated, employing robust security measures to protect your data
                  and ensure fair play.
                </p>
              </li>

              <li className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                <strong className="text-gray-900">Cross-Device Accessibility</strong>
                <p>
                  Top betting sites work seamlessly across devices. Whether you're on a desktop, tablet, or smartphone,
                  our listed sportsbooks offer smooth performance, including dedicated apps for iOS and Android users.
                </p>
              </li>

              <li className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
                <strong className="text-gray-900">Sports Markets and Odds Value</strong>
                <p>
                  A diverse selection of sports and betting options is crucial. From mainstream sports like football and
                  horse racing to niche markets and live betting, our recommended bookmakers provide competitive odds
                  and extensive coverage.
                </p>
              </li>
            </ol>

            <h3 className="text-2xl font-bold text-emerald-600 mt-10 mb-4 animate-fade-in">
              Unlocking the Best Betting Promotions
            </h3>

            <p className="animate-fade-in-up">
              A strong welcome offer can boost your starting balance. Common bonuses include:
            </p>

            <ul className="list-disc pl-6 space-y-4 mt-4">
              <li className="animate-fade-in-up">
                <strong className="text-gray-900">Free Bets</strong> – Place a wager without risking your own money.
              </li>

              <li className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                <strong className="text-gray-900">Matched Deposits</strong> – Double your deposit, e.g., 100% up to
                €100.
              </li>

              <li className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
                <strong className="text-gray-900">No-Deposit Bonuses</strong> – Get a small reward just for registering.
              </li>
            </ul>

            <p className="animate-fade-in-up">
              Always check the terms, such as wagering requirements, to ensure the offer is fair. We only endorse
              promotions that are transparent and achievable.
            </p>

            <h3 className="text-2xl font-bold text-emerald-600 mt-10 mb-4 animate-fade-in">
              Why Rely on Our Expertise
            </h3>

            <p className="animate-fade-in-up">
              Our team has thoroughly vetted each bookmaker, ensuring they meet our rigorous standards for safety,
              reliability, and user experience. We take the guesswork out of finding a trustworthy platform.
            </p>

            <h3 className="text-2xl font-bold text-emerald-600 mt-10 mb-4 animate-fade-in">Get Started Now</h3>

            <p className="animate-fade-in-up">
              Explore our curated selection of Ireland's top betting sites, compare their offers, and pick the one that
              suits your style. Whether you're chasing excitement, profits, or sports entertainment, we empower you to
              bet confidently on a platform you can trust.
            </p>
          </div>
        </div>
      </section>

      <TopOffersModal />
      <AgeRestrictionModal isOpen={isAgeModalOpen} onClose={() => setIsAgeModalOpen(false)} />
      <AdvertiserInfoModal isOpen={isAdvertiserModalOpen} onClose={() => setIsAdvertiserModalOpen(false)} />
      <SiteFooter />
    </main>
  )
}
