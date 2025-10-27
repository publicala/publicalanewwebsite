"use client"

import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { CalendlyButton } from "@/components/calendly-button"

const STORAGE_KEY = "pla.intent.offer.dismissedAt"

function shouldShowAgain(): boolean {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return true
    const dismissedAt = Number(raw)
    const oneWeek = 7 * 24 * 60 * 60 * 1000
    return Date.now() - dismissedAt > oneWeek
  } catch {
    return true
  }
}

export function IntentOffers() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!shouldShowAgain()) return

    let firedExit = false
    const handleExit = (e: MouseEvent) => {
      if (firedExit) return
      if ((e as any).clientY <= 0) {
        firedExit = true
        setOpen(true)
      }
    }
    const handleScroll = () => {
      const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      if (scrolled > 0.6) {
        window.removeEventListener("scroll", handleScroll)
        setTimeout(() => setOpen(true), 300)
      }
    }

    window.addEventListener("mouseout", handleExit)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("mouseout", handleExit)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const closeAndSuppress = () => {
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()))
    } catch {}
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={(o) => (!o ? closeAndSuppress() : setOpen(o))}>
      <DialogContent className="sm:max-w-[520px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Get a tailored walkthrough</DialogTitle>
          <DialogDescription>
            See how Publica.la can increase your digital revenue and streamline operations.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center justify-between gap-4">
          <div className="text-sm text-gray-600">30-minute call. No obligation.</div>
          <CalendlyButton className="rounded-md">Get a demo</CalendlyButton>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default IntentOffers


