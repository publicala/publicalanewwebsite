import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Publica.la - Transform Your Content into Digital Success",
  description:
    "The most robust and dynamic digital content platform for publishers, bookshops, magazines, newspapers, content creators, and libraries. Transform printed content into engaging digital experiences with ePaper technology, global distribution, and AI-powered insights.",
  keywords: [
    "digital publishing platform",
    "ePaper technology",
    "digital content management",
    "online bookstore",
    "digital magazines",
    "content monetization",
    "publishing analytics",
    "global distribution",
    "digital transformation",
    "publica.la",
  ],
  authors: [{ name: "Publica.la" }],
  creator: "Publica.la",
  publisher: "Publica.la",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://publica.la",
    siteName: "Publica.la",
    title: "Publica.la - Transform Your Content into Digital Success",
    description:
      "The most robust and dynamic digital content platform for publishers, bookshops, magazines, newspapers, content creators, and libraries. Join 400+ customers and 2M+ users worldwide.",
    images: [
      {
        url: "/images/hero-desktop.png",
        width: 1200,
        height: 630,
        alt: "Publica.la Digital Content Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Publica.la - Transform Your Content into Digital Success",
    description:
      "The most robust and dynamic digital content platform for publishers, bookshops, magazines, newspapers, content creators, and libraries.",
    images: ["/images/hero-desktop.png"],
    creator: "@publicala",
  },
  alternates: {
    canonical: "https://publica.la",
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/favicon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.png",
  },
  manifest: "/site.webmanifest",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#ec4899" />
        <meta name="msapplication-TileColor" content="#ec4899" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
