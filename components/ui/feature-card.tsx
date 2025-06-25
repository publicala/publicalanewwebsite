import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
  iconColor?: string
  variant?: "default" | "gradient" | "minimal"
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
  iconColor = "text-primary",
  variant = "default",
}: FeatureCardProps) {
  const variants = {
    default:
      "bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1",
    gradient:
      "bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1",
    minimal: "bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 transition-all duration-300",
  }

  return (
    <Card className={cn(variants[variant], className)}>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Icon className={cn("h-6 w-6", iconColor)} />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
