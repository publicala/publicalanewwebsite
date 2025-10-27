"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

export function CalendlyModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [isMounted, setIsMounted] = useState(false)
  const [src, setSrc] = useState<string | null>(null)

  useEffect(() => {
    setIsMounted(true)
    // Build Calendly URL with UTM params if present
    try {
      const url = new URL("https://calendly.com/d/csdv-jmz-c22/publica-la-demo")
      const params = new URLSearchParams(window.location.search)
      const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"]
      utmKeys.forEach((k) => {
        const v = params.get(k)
        if (v) url.searchParams.set(k, v)
      })
      url.searchParams.set("embed", "true")
      url.searchParams.set("hide_gdpr_banner", "1")
      setSrc(url.toString())
    } catch {
      setSrc("https://calendly.com/d/csdv-jmz-c22/publica-la-demo?embed=true&hide_gdpr_banner=1")
    }
  }, [])

  if (!isMounted) return null

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden max-h-[80vh]">
        <DialogHeader className="p-4 border-b">
          <DialogTitle className="text-xl font-bold">Schedule a Meeting</DialogTitle>
          <DialogDescription className="text-sm">Book a 30-minute consultation with our sales team</DialogDescription>
        </DialogHeader>
        <div className="calendly-container h-[600px] w-full">
          <iframe
            src={src || "about:blank"}
            width="100%"
            height="100%"
            frameBorder="0"
            title="Schedule a meeting with Publica.la"
            className="w-full h-full"
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  )
}
