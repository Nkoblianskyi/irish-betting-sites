import type React from "react"
import type { Metadata } from "next"
import { Mulish } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { CookieConsentProvider } from "@/context/cookie-consent-context"
import { CookieBanner } from "@/components/cookie-banner"

const inter = Mulish({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Best Irish Betting Sites | Top Rated Bookmakers in Ireland",
  description:
    "Compare the top Irish betting sites with the best bonuses, odds, and features. Expert reviews of legal bookmakers available in Ireland.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <CookieConsentProvider>
            {children}
            <CookieBanner />
          </CookieConsentProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
