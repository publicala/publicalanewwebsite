"use client"

import { useEffect, useState } from "react"
import { CalendlyButton } from "@/components/calendly-button"

export function StickyCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setVisible(y > 200)
    }
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-[60] md:hidden transition-transform ${visible ? "translate-y-0" : "translate-y-full"}`}>
      <div className="mx-4 mb-4 rounded-xl shadow-lg border border-gray-200 bg-white p-3 flex items-center justify-between">
        <div className="text-sm font-medium text-gray-800">See Publica.la in action</div>
        <CalendlyButton size="sm" className="rounded-md font-medium">Get a demo</CalendlyButton>
      </div>
    </div>
  )
}

export default StickyCTA


