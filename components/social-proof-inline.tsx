"use client"

import Image from "next/image"

interface SocialProofInlineProps {
  /** Example: "Trusted by 50+ countries and 10M+ books processed" */
  text?: string
  /** Optional small stat chips to render, e.g., [{label: "Countries", value: "50+"}] */
  stats?: Array<{ label: string; value: string }>
  /** Optional brand isologos to display inline */
  logos?: Array<{ src: string; alt: string }>
  className?: string
}

export function SocialProofInline({
  text = "Trusted by 50+ countries and millions of books processed",
  stats = [
    { value: "50+", label: "Countries" },
    { value: "1,000+", label: "Organizations" },
  ],
  logos = [
    { src: "/images/isologos/santillana-iso.webp", alt: "Santillana" },
    { src: "/images/isologos/penguin-iso.webp", alt: "Penguin Random House" },
    { src: "/images/isologos/forbes-iso.webp", alt: "Forbes" },
    { src: "/images/isologos/planeta-iso.webp", alt: "Grupo Planeta" },
  ],
  className,
}: SocialProofInlineProps) {
  return (
    <div className={"flex flex-col sm:flex-row items-start sm:items-center gap-4 " + (className || "")}>      
      <div className="flex -space-x-2">
        {logos.slice(0, 5).map((logo, index) => (
          <div
            key={index}
            className="w-9 h-9 rounded-full bg-white border-2 border-white shadow-sm flex items-center justify-center overflow-hidden"
          >
            <Image src={logo.src || "/placeholder.svg"} alt={logo.alt} width={24} height={24} className="object-contain" />
          </div>
        ))}
      </div>
      <div className="text-sm text-gray-700">
        <span className="font-medium">{text}</span>
      </div>
      {stats?.length ? (
        <div className="flex flex-wrap gap-2">
          {stats.map((s, i) => (
            <span
              key={i}
              className="inline-flex items-center rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs text-gray-600"
            >
              <span className="font-semibold mr-1 text-gray-900">{s.value}</span>{s.label}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default SocialProofInline


