"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { FormReassurance } from "@/components/form-reassurance"

export function DemoRequestModal({
  isOpen,
  onClose,
  dict,
}: {
  isOpen: boolean
  onClose: () => void
  dict?: any
}) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Load HubSpot script when component mounts
    const script = document.createElement("script")
    script.src = "//js.hsforms.net/forms/embed/v2.js"
    script.async = true
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "14YY-1URiSc2CbPJnIfDLzQ2x9ss".split("/").pop() || "",
          formId: "14YY-1URiSc2CbPJnIfDLzQ2x9ss".split("/").pop() || "",
          target: "#hubspot-form-container",
        })
      }
    }
    document.body.appendChild(script)

    return () => {
      // Clean up script if component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  if (!isMounted) return null

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{dict?.demoModal?.title || "Schedule a Demo"}</DialogTitle>
          <DialogDescription>
            {dict?.demoModal?.description || "Fill out the form below and our team will get in touch with you shortly to schedule a personalized demo."}
          </DialogDescription>
        </DialogHeader>
        <div id="hubspot-form-container" className="mt-4 min-h-[400px]">
          <div className="flex justify-center items-center h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        </div>
        <FormReassurance className="mt-4" />
      </DialogContent>
    </Dialog>
  )
}
