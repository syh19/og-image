import "./globals.css"

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { TemplateStoreProvider } from "@/providers/template-store-provider"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import { FaXTwitter } from "react-icons/fa6"
import { SiBluesky } from "react-icons/si"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Toaster } from "@/components/ui/sonner"
import { AnalyticsIndex } from "@/components/analytics/index"
import { ModeToggle } from "@/components/mode-toggle"
import { MobileNav } from "@/components/nav/mobile-nav"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  metadataBase: new URL("https://og.sylwair.com"),
  title: "og.sylwair.com",
  description: "Generate beautiful Open Graph images with zero effort.",
  openGraph: {
    title: "og.sylwair.com",
    description: "Generate beautiful Open Graph images with zero effort.",
    type: "website",
    url: "https://og.sylwair.com",
    siteName: "og.sylwair.com",
    images: [
      {
        url: "https://og.sylwair.com/og.png",
        width: 1200,
        height: 630,
        alt: "og.sylwair.com - Generate beautiful Open Graph images with zero effort.",
      },
    ],
    locale: "en_US",
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-4">
              <div>
                <Link href="/" className="flex items-center space-x-2">
                  <Image
                    className="block dark:hidden"
                    src="/logo.png"
                    alt="Open Graph Image Generator Logo"
                    width={36}
                    height={36}
                  />
                  <Image
                    className="hidden rounded-full bg-white dark:block"
                    src="/logo.png"
                    alt="Open Graph Image Generator Logo"
                    width={36}
                    height={36}
                  />
                  <span className="font-mono text-xl font-semibold">
                    Open Graph Image Generator
                  </span>
                </Link>

              </div>
            </div>

            <div className="hidden space-x-2 sm:flex">
              <Button variant="link" size="icon" asChild>
                <Link href="https://x.com/sylwair" target="_blank">
                  <FaXTwitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="link" size="icon" asChild>
                <Link
                  href="https://bsky.app/profile/sylwair.bsky.social"
                  target="_blank"
                >
                  <SiBluesky className="h-5 w-5" />
                </Link>
              </Button>

              <ModeToggle />
            </div>

            {/* Mobile navigation */}
            <div className="flex space-x-2 sm:hidden">
              <ModeToggle />

              <MobileNav />
            </div>
          </nav>

          <main className="mx-auto min-h-[calc(100dvh-84px)] max-w-7xl px-2 py-6 sm:px-6 lg:px-8">
            <TemplateStoreProvider>{children}</TemplateStoreProvider>
          </main>

          <Separator />

          <footer className="mx-auto max-w-7xl px-2 py-6 sm:px-6 lg:px-8">
            <div className="flex justify-between">
              <div className="flex items-center space-x-4">
                <Link
                  href="https://sylwair.com"
                  className="flex items-center hover:underline"
                >
                  <img
                    src="https://favicon.im/sylwair.com"
                    alt="sylwair.com favicon"
                    width={16}
                    height={16}
                    className="mr-1"
                  />
                  <span>Sylwair</span>
                </Link>

                <Link
                  href="https://aifinder.site"
                  target="_blank"
                  className="flex items-center hover:underline"
                >
                  <img
                    src="https://favicon.im/aifinder.site"
                    alt="aifinder.site favicon"
                    width={16}
                    height={16}
                    className="mr-1"
                  />
                  <span>AIFinder.site</span>
                </Link>
                <Link
                  href="https://emojisay.com"
                  target="_blank"
                  className="flex items-center hover:underline"
                >
                  <img
                    src="https://favicon.im/emojisay.com"
                    alt="emojisay favicon"
                    width={16}
                    height={16}
                    className="mr-1"
                  />
                  <span>Emojisay</span>
                </Link>
              </div>

              {/* only shows on Desktop */}
              <div className="hidden items-center gap-x-2 md:inline-flex">
                <span className="font-mono text-sm font-medium">
                  <a
                    href="https://github.com/FadyMak/imgsrc-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Modified from imgsrc
                  </a>
                </span>
              </div>
            </div>
          </footer>
        </ThemeProvider>

        <Toaster />

        <SpeedInsights />
        <Analytics />
        {process.env.NODE_ENV === "development" ? (
          <></>
        ) : (
          <>
            <AnalyticsIndex />
          </>
        )}
      </body>
    </html>
  )
}
