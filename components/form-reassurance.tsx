"use client"

import { ShieldCheck, Clock, Lock, FileCheck } from "lucide-react"

interface FormReassuranceProps {
  items?: Array<{
    icon?: "security" | "sla" | "response" | "privacy"
    title: string
    description: string
  }>
  className?: string
}

const iconMap = {
  security: ShieldCheck,
  sla: FileCheck,
  response: Clock,
  privacy: Lock,
}

export function FormReassurance({
  items = [
    { icon: "security", title: "Enterprise-grade security", description: "SSO, RBAC, encryption at rest & in transit" },
    { icon: "sla", title: "Guaranteed SLA", description: "99.9% uptime with monitored infrastructure" },
    { icon: "response", title: "Fast response", description: "Typically under 1 business day" },
    { icon: "privacy", title: "Privacy-first", description: "GDPR-ready. Your data stays yours." },
  ],
  className,
}: FormReassuranceProps) {
  return (
    <div className={"mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600 " + (className || "")}>      
      {items.map((item, idx) => {
        const Icon = iconMap[item.icon || "security"]
        return (
          <div key={idx} className="flex items-start gap-2 rounded-md border border-gray-200 bg-white p-3">
            <Icon className="h-4 w-4 text-green-600 mt-0.5" />
            <div>
              <div className="font-medium text-gray-900">{item.title}</div>
              <div className="text-xs text-gray-500">{item.description}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default FormReassurance


