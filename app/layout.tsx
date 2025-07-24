import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://publica.la"),
  title: "publica.la - Digital Publishing Platform for Modern Publishers",
  description:
    "Transform your printed content into engaging digital experiences with publica.la. The leading ePaper platform trusted by 400+ publishers, bookshops, magazines, and newspapers worldwide. Features Smart Zoom technology, global distribution, AI-powered insights, and seamless monetization tools.",
  keywords: [
    "publica.la",
    "digital publishing platform",
    "ePaper technology",
    "digital content management",
    "online bookstore platform",
    "digital magazines",
    "newspaper digitization",
    "content monetization",
    "publishing analytics",
    "global distribution",
    "digital transformation",
    "Smart Zoom reader",
    "publishing marketplace",
  ],
  authors: [{ name: "publica.la" }],
  creator: "publica.la",
  publisher: "publica.la",
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
    siteName: "publica.la",
    title: "publica.la - Transform Print to Digital Success",
    description:
      "The most robust ePaper platform for publishers worldwide. Transform printed magazines, newspapers, and books into engaging digital experiences. Trusted by 400+ customers across 45 countries with 2M+ active users.",
    images: [
      {
        url: "https://publica.la/wp-content/uploads/2025/06/Screenshot-2025-06-19-at-12.27.15.png",
        width: 1200,
        height: 630,
        alt: "publica.la - Digital Publishing Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "publica.la - Transform Print to Digital Success",
    description:
      "The most robust ePaper platform for publishers worldwide. Transform printed content into engaging digital experiences with Smart Zoom technology and global distribution.",
    images: ["https://publica.la/wp-content/uploads/2025/06/Screenshot-2025-06-19-at-12.27.15.png"],
    creator: "@getpublicala",
  },
  alternates: {
    canonical: "https://publica.la",
  },
  icons: {
    icon: [
      { url: "/favicon.webp", sizes: "32x32", type: "image/png" },
      { url: "/favicon.webp", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/favicon.webp", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.webp",
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
    <html suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.webp" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.webp" />
        <meta name="theme-color" content="#ec4899" />
        <meta name="msapplication-TileColor" content="#ec4899" />
        <link rel="alternate" href="https://publica.la/en" hrefLang="en" />
        <link rel="alternate" href="https://publica.la/es" hrefLang="es" />
        <link rel="alternate" href="https://publica.la/pt" hrefLang="pt" />
        <link rel="alternate" href="https://publica.la" hrefLang="x-default" />
        <link rel="canonical" href="https://publica.la" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "publica.la",
          "url": "https://publica.la",
          "logo": "https://publica.la/images/logo.svg",
          "sameAs": [
            "https://x.com/getpublicala",
            "https://www.linkedin.com/company/publica-la",
            "https://www.facebook.com/getpublicala",
            "https://www.instagram.com/getpublicala",
            "https://www.youtube.com/@Publicala"
          ]
        }) }} />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="publica.la - Digital Publishing Platform for Modern Publishers" />
        <meta property="og:description" content="Transform your printed content into engaging digital experiences with publica.la. The leading ePaper platform trusted by 400+ publishers, bookshops, magazines, and newspapers worldwide. Features Smart Zoom technology, global distribution, AI-powered insights, and seamless monetization tools." />
        <meta property="og:image" content="https://publica.la/wp-content/uploads/2025/06/Screenshot-2025-06-19-at-12.27.15.png" />
        <meta property="og:url" content="https://publica.la" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="publica.la" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
