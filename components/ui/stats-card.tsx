import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface StatsCardProps {
  icon: LucideIcon
  value: string
  label: string
  color?: "blue" | "green" | "purple" | "orange" | "red"
  className?: string
}

export function StatsCard({ icon: Icon, value, label, color = "blue", className }: StatsCardProps) {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
    orange: "bg-orange-100 text-orange-600",
    red: "bg-red-100 text-red-600",
  }

  return (
    <div className={cn("text-center group", className)}>
      <div
        className={cn(
          "w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-transform group-hover:scale-110",
          colorClasses[color],
        )}
      >
        <Icon className="h-8 w-8" />
      </div>
      <div className="text-3xl font-bold text-gray-900 mb-1">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  )
}
