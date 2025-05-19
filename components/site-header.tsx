"use client"

import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-center h-16 px-4">
        <Link href="/" className="flex items-center gap-2 group">
          <svg
            className="h-8 w-8 text-emerald-500 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="text-xl font-bold text-emerald-500 transition-colors duration-300 group-hover:text-emerald-400">
            BestIrishBettingSite
          </span>
        </Link>
      </div>
    </header>
  )
}
