"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CalendlyModal } from "@/components/calendly-modal"
import { ArrowRight } from "lucide-react"

interface CalendlyButtonProps {
  children?: React.ReactNode
  className?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  showArrow?: boolean
}

export function CalendlyButton({
  children = "Get a demo",
  className,
  variant = "default",
  size = "default",
  showArrow = false,
}: CalendlyButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Button variant={variant} size={size} className={className} onClick={() => setIsModalOpen(true)}>
        {children}
        {showArrow && <ArrowRight className="ml-2 h-4 w-4" />}
      </Button>
      <CalendlyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
