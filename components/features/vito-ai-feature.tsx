"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bot, MessageSquare, BookOpen, BarChart3, Zap, CheckCircle, ArrowRight } from "lucide-react"
import { CalendlyButton } from "@/components/calendly-button"
import { DemoRequestModal } from "@/components/demo-request-modal"

export function VitoAIFeature({ dict }: { dict: any }) {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)
  
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                {dict.hero.badge}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                {dict.hero.title1} <span className="text-primary">{dict.hero.title2}</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl">
                {dict.hero.subtitle}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <CalendlyButton
                  size="lg"
                  className="rounded-md font-medium"
                  showArrow={true}
                >
                  {dict.hero.getStarted}
                </CalendlyButton>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-md font-medium"
                  onClick={() => setIsDemoModalOpen(true)}
                >
                  {dict.hero.requestDemo}
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg shadow-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold">{dict.hero.assistantName}</div>
                    <div className="text-sm text-gray-500">{dict.hero.assistantStatus}</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-100 rounded-lg p-3">
                    <p className="text-sm">{dict.hero.chat1}</p>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-3">
                    <p className="text-sm">{dict.hero.chat2}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      {dict.hero.quizButton}
                    </Button>
                    <Button size="sm" variant="outline">
                      {dict.hero.detailsButton}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="w-full py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{dict.features.title}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {dict.features.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<MessageSquare className="h-8 w-8" />}
              title={dict.features.cards[0].title}
              description={dict.features.cards[0].description}
              color="bg-blue-500"
            />
            <FeatureCard
              icon={<BookOpen className="h-8 w-8" />}
              title={dict.features.cards[1].title}
              description={dict.features.cards[1].description}
              color="bg-purple-500"
            />
            <FeatureCard
              icon={<BarChart3 className="h-8 w-8" />}
              title={dict.features.cards[2].title}
              description={dict.features.cards[2].description}
              color="bg-green-500"
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8" />}
              title={dict.features.cards[3].title}
              description={dict.features.cards[3].description}
              color="bg-orange-500"
            />
            <FeatureCard
              icon={<Bot className="h-8 w-8" />}
              title={dict.features.cards[4].title}
              description={dict.features.cards[4].description}
              color="bg-pink-500"
            />
            <FeatureCard
              icon={<CheckCircle className="h-8 w-8" />}
              title={dict.features.cards[5].title}
              description={dict.features.cards[5].description}
              color="bg-indigo-500"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{dict.howItWorks.title}</h2>
            <p className="text-lg text-gray-600">{dict.howItWorks.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProcessStep
              step="1"
              title={dict.howItWorks.steps[0].title}
              description={dict.howItWorks.steps[0].description}
            />
            <ProcessStep
              step="2"
              title={dict.howItWorks.steps[1].title}
              description={dict.howItWorks.steps[1].description}
            />
            <ProcessStep
              step="3"
              title={dict.howItWorks.steps[2].title}
              description={dict.howItWorks.steps[2].description}
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="w-full py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{dict.benefits.title}</h2>
              <div className="space-y-6">
                <BenefitItem
                  title={dict.benefits.items[0].title}
                  description={dict.benefits.items[0].description}
                />
                <BenefitItem
                  title={dict.benefits.items[1].title}
                  description={dict.benefits.items[1].description}
                />
                <BenefitItem
                  title={dict.benefits.items[2].title}
                  description={dict.benefits.items[2].description}
                />
                <BenefitItem
                  title={dict.benefits.items[3].title}
                  description={dict.benefits.items[3].description}
                />
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-purple-600 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">{dict.benefits.statsTitle}</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>{dict.benefits.stats[0].label}</span>
                    <span className="font-bold">{dict.benefits.stats[0].value}</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full w-4/5"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>{dict.benefits.stats[1].label}</span>
                    <span className="font-bold">{dict.benefits.stats[1].value}</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full w-3/5"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>{dict.benefits.stats[2].label}</span>
                    <span className="font-bold">{dict.benefits.stats[2].value}</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Demo Request Modal */}
      <DemoRequestModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
  color,
}: {
  icon: React.ReactNode
  title: string
  description: string
  color: string
}) {
  return (
    <Card className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
      <div className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 ${color}`}>{icon}</div>
      <div className="font-bold text-lg mb-2">{title}</div>
      <div className="text-gray-600 text-sm">{description}</div>
    </Card>
  )
}

function ProcessStep({
  step,
  title,
  description,
}: {
  step: string
  title: string
  description: string
}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white font-bold text-lg mb-4">{step}</div>
      <div className="font-bold text-lg mb-2">{title}</div>
      <div className="text-gray-600 text-sm">{description}</div>
    </div>
  )
}

function BenefitItem({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div>
      <div className="font-bold text-lg mb-1">{title}</div>
      <div className="text-gray-600 text-sm">{description}</div>
    </div>
  )
}
