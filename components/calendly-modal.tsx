"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { X } from "lucide-react"

export function CalendlyModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden max-h-[80vh]">
        <DialogHeader className="p-4 flex flex-row items-center justify-between border-b">
          <div>
            <DialogTitle className="text-xl font-bold">Schedule a Meeting</DialogTitle>
            <DialogDescription className="text-sm">Book a 30-minute consultation with our sales team</DialogDescription>
          </div>
          <button onClick={onClose} className="rounded-full p-1 hover:bg-gray-100">
            <X className="h-5 w-5" />
          </button>
        </DialogHeader>
        <div className="calendly-container h-[600px] w-full">
          <iframe
            src="https://calendly.com/plaurino-publica/30min?embed=true&hide_gdpr_banner=1"
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
