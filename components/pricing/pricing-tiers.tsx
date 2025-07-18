"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"
import { CalendlyButton } from "@/components/calendly-button"
import { DemoRequestModal } from "@/components/demo-request-modal"

interface PricingTiersProps {
  locale?: string
  dict: {
    pricingTiers: {
      toggle: {
        monthly: string
        annual: string
      }
      plans: {
        starter: {
          name: string
          description: string
          description2: string
          keyFeatures: string[]
          features: string[]
          buttonText: string
        }
        growth: {
          name: string
          description: string
          description2: string
          keyFeatures: string[]
          features: string[]
          buttonText: string
          popular: string
        }
        enterprise: {
          name: string
          description: string
          description2: string
          keyFeatures: string[]
          features: string[]
          buttonText: string
        }
      }
      savings: {
        save: string
        perYear: string
        plusPerYear: string
      }
      period: {
        month: string
        year: string
      }
      customPlan: {
        text: string
        linkText: string
      }
    }
  }
}

export function PricingTiers({ dict, locale }: PricingTiersProps) {
  const [isAnnual, setIsAnnual] = useState(false)
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  const plans = {
    starter: {
      monthly: 20,
      annual: 200,
      savings: 40,
    },
    growth: {
      monthly: 249,
      annual: 2490,
      savings: 498,
    },
    enterprise: {
      monthly: 492,
      annual: 4920,
      savings: 984,
    },
  }

  const getPrice = (plan: keyof typeof plans) => {
    return isAnnual ? plans[plan].annual : plans[plan].monthly
  }

  const getSavings = (plan: keyof typeof plans) => {
    return plans[plan].savings
  }

  const getLocalizedHref = (href: string) => {
    if (href.startsWith('/')) {
      return `/${locale}${href}`
    }
    return href
  }

  return (
    <section className="w-full py-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Pricing Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                !isAnnual ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {dict.pricingTiers.toggle.monthly}
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                isAnnual ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {dict.pricingTiers.toggle.annual}
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-8">
              <CardTitle className="text-2xl">{dict.pricingTiers.plans.starter.name}</CardTitle>
              <CardDescription className="text-base">
                {dict.pricingTiers.plans.starter.description}
              </CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">${getPrice("starter")}</span>
                <span className="text-gray-500 ml-2">/{isAnnual ? dict.pricingTiers.period.year : dict.pricingTiers.period.month}</span>
                {isAnnual && (
                  <div className="text-sm text-green-600 font-medium mt-1">
                    {dict.pricingTiers.savings.save} ${getSavings("starter")} {dict.pricingTiers.savings.perYear}
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent className="pb-8">
              <p className="text-sm text-gray-500 mb-6">{dict.pricingTiers.plans.starter.description2}</p>

              {/* Key features with highlight */}
              <div className="mb-6 space-y-3">
                {dict.pricingTiers.plans.starter.keyFeatures.map((feature, index) => (
                  <div key={index} className="bg-primary/5 p-3 rounded-lg border-l-4 border-primary">
                    <p className="text-sm font-medium">{feature}</p>
                  </div>
                ))}
              </div>

              <ul className="space-y-3">
                {dict.pricingTiers.plans.starter.features.map((feature, index) => (
                  <PricingFeatureItem key={index}>{feature}</PricingFeatureItem>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <CalendlyButton
                className="w-full rounded-md"
                variant="outline"
              >
                {dict.pricingTiers.plans.starter.buttonText}
              </CalendlyButton>
            </CardFooter>
          </Card>

          {/* Growth Plan */}
          <Card className="border-2 border-primary shadow-lg relative">
            <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
              {dict.pricingTiers.plans.growth.popular}
            </div>
            <CardHeader className="pb-8">
              <CardTitle className="text-2xl">{dict.pricingTiers.plans.growth.name}</CardTitle>
              <CardDescription className="text-base">{dict.pricingTiers.plans.growth.description}</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">${getPrice("growth")}</span>
                <span className="text-gray-500 ml-2">/{isAnnual ? dict.pricingTiers.period.year : dict.pricingTiers.period.month}</span>
                {isAnnual && (
                  <div className="text-sm text-green-600 font-medium mt-1">
                    {dict.pricingTiers.savings.save} ${getSavings("growth")} {dict.pricingTiers.savings.perYear}
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent className="pb-8">
              <p className="text-sm text-gray-500 mb-6">{dict.pricingTiers.plans.growth.description2}</p>

              {/* Key features with highlight */}
              <div className="mb-6 space-y-3">
                {dict.pricingTiers.plans.growth.keyFeatures.map((feature, index) => (
                  <div key={index} className="bg-primary/5 p-3 rounded-lg border-l-4 border-primary">
                    <p className="text-sm font-medium">{feature}</p>
                  </div>
                ))}
              </div>

              <ul className="space-y-3">
                {dict.pricingTiers.plans.growth.features.map((feature, index) => (
                  <PricingFeatureItem key={index}>{feature}</PricingFeatureItem>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <CalendlyButton
                className="w-full rounded-md"
              >
                {dict.pricingTiers.plans.growth.buttonText}
              </CalendlyButton>
            </CardFooter>
          </Card>

          {/* Enterprise Plan */}
          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-8">
              <CardTitle className="text-2xl">{dict.pricingTiers.plans.enterprise.name}</CardTitle>
              <CardDescription className="text-base">{dict.pricingTiers.plans.enterprise.description}</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">From ${getPrice("enterprise")}</span>
                <span className="text-gray-500 ml-2">/{isAnnual ? dict.pricingTiers.period.year : dict.pricingTiers.period.month}</span>
                {isAnnual && (
                  <div className="text-sm text-green-600 font-medium mt-1">
                    {dict.pricingTiers.savings.save} ${getSavings("enterprise")}+ {dict.pricingTiers.savings.plusPerYear}
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent className="pb-8">
              <p className="text-sm text-gray-500 mb-6">{dict.pricingTiers.plans.enterprise.description2}</p>

              {/* Key features with highlight */}
              <div className="mb-6 space-y-3">
                {dict.pricingTiers.plans.enterprise.keyFeatures.map((feature, index) => (
                  <div key={index} className="bg-primary/5 p-3 rounded-lg border-l-4 border-primary">
                    <p className="text-sm font-medium">{feature}</p>
                  </div>
                ))}
              </div>

              <ul className="space-y-3">
                {dict.pricingTiers.plans.enterprise.features.map((feature, index) => (
                  <PricingFeatureItem key={index}>{feature}</PricingFeatureItem>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full rounded-md"
                variant="outline"
                onClick={() => setIsDemoModalOpen(true)}
              >
                {dict.pricingTiers.plans.enterprise.buttonText}
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500">
            {dict.pricingTiers.customPlan.text}{" "}
            <Link href={getLocalizedHref("/contact")} className="text-primary font-medium hover:underline">
              {dict.pricingTiers.customPlan.linkText}
            </Link>
          </p>
        </div>
      </div>
      
      {/* Demo Request Modal */}
      <DemoRequestModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </section>
  )
}

function PricingFeatureItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
      <span className="text-gray-700">{children}</span>
    </li>
  )
}
