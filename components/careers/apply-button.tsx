"use client"

import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

interface ApplyButtonProps {
  jobTitle: string
  department: string
  size?: "default" | "lg" | "sm" | "icon"
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  className?: string
  ariaLabel?: string
}

export function ApplyButton({
  jobTitle,
  department,
  size = "default",
  variant = "default",
  className,
  ariaLabel
}: ApplyButtonProps) {
  const handleApply = () => {
    const subject = `Application for ${jobTitle} Position`
    const body = `Hi,

I'm interested in applying for the ${jobTitle} position in the ${department} team.

Please find my GitHub/portfolio attached, along with a note about something I've shipped that made users happier.

Best regards`
    window.open(`mailto:jobs@publica.la?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`)
  }

  return (
    <Button
      size={size}
      variant={variant}
      onClick={handleApply}
      className={className}
      aria-label={ariaLabel || `Apply for ${jobTitle} position`}
    >
      <Mail className="h-4 w-4 mr-2" />
      {size === "lg" ? "Apply Now" : "Apply for this Position"}
    </Button>
  )
}
