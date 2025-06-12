import { cn } from "@/lib/utils"

interface AnimatedBackgroundProps {
  variant?: "hero" | "section" | "minimal"
  className?: string
}

export function AnimatedBackground({ variant = "section", className }: AnimatedBackgroundProps) {
  const variants = {
    hero: (
      <>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </>
    ),
    section: (
      <>
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-200/30 rounded-full blur-xl"></div>
      </>
    ),
    minimal: <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>,
  }

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>{variants[variant]}</div>
  )
}
