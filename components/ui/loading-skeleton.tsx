import { cn } from "@/lib/utils"

interface LoadingSkeletonProps {
  className?: string
  variant?: "text" | "card" | "avatar" | "button"
}

export function LoadingSkeleton({ className, variant = "text" }: LoadingSkeletonProps) {
  const variants = {
    text: "h-4 bg-gray-200 rounded",
    card: "h-32 bg-gray-200 rounded-lg",
    avatar: "h-12 w-12 bg-gray-200 rounded-full",
    button: "h-10 bg-gray-200 rounded-md",
  }

  return <div className={cn("animate-pulse", variants[variant], className)} />
}
