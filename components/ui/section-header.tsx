import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
  titleClassName?: string
  subtitleClassName?: string
  centered?: boolean
}

export function SectionHeader({
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <h2 className={cn("text-3xl md:text-4xl font-bold mb-4 text-gray-900", titleClassName)}>{title}</h2>
      {subtitle && (
        <p className={cn("text-lg text-gray-600 max-w-2xl", centered && "mx-auto", subtitleClassName)}>{subtitle}</p>
      )}
    </div>
  )
}
