'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, TrendingUp, DollarSign, Zap, Shield, Users } from 'lucide-react'

interface SavingsCalculatorProps {
  locale: string
  dict: any
}

export function SavingsCalculator({ locale, dict }: SavingsCalculatorProps) {
  const [monthlyRevenue, setMonthlyRevenue] = useState(45000)
  const [calculated, setCalculated] = useState(false)

  const industryAverage = 0.55 // 55%
  const publicaShare = 0.85 // 85%
  
  const industryRevenue = monthlyRevenue * industryAverage
  const publicaRevenue = monthlyRevenue * publicaShare
  const additionalMonthly = publicaRevenue - industryRevenue
  const additionalAnnual = additionalMonthly * 12

  const handleCalculate = () => {
    setCalculated(true)
  }

  const formatCurrency = (amount: number) => {
    const formatter = new Intl.NumberFormat(locale === 'es' ? 'es-ES' : locale === 'pt' ? 'pt-BR' : 'en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
    return formatter.format(amount)
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img 
            src="/images/publica-logo-new.svg" 
            alt="publica.la" 
            className="h-16 md:h-20"
          />
        </div>
        
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          {dict.hero.title}
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          {dict.hero.subtitle}
        </p>
        
        <div className="flex items-center justify-center gap-4 mb-8">
          <Badge variant="secondary" className="text-lg px-4 py-2">
            {dict.hero.badge}
          </Badge>
        </div>

        <div className="flex items-center justify-center gap-2 text-gray-600">
          <Users className="w-5 h-5" />
          <span>{dict.hero.trustedBy}</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Calculator Section */}
        <div className="space-y-8">
          <Card className="border-2 border-blue-200 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-blue-900">
                {dict.calculator.title}
              </CardTitle>
              <p className="text-gray-600">
                {dict.calculator.subtitle}
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="revenue" className="text-sm font-medium text-gray-700">
                  {dict.calculator.label}
                </label>
                <Input
                  id="revenue"
                  type="number"
                  value={monthlyRevenue}
                  onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                  className="text-2xl font-bold text-center h-16"
                  placeholder={dict.calculator.placeholder}
                />
              </div>
              
              <Button 
                onClick={handleCalculate}
                className="w-full h-14 text-lg font-semibold bg-blue-600 hover:bg-blue-700"
                size="lg"
              >
                <Calculator className="w-5 h-5 mr-2" />
                {dict.calculator.button}
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-blue-900">{dict.features.allInOne}</span>
              </div>
              <p className="text-gray-700">{dict.features.noMultipleSolutions}</p>
            </CardContent>
          </Card>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {calculated && (
            <>
              <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-green-900 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6" />
                    {dict.results.title}
                  </CardTitle>
                  <p className="text-green-700">
                    {dict.results.subtitle}
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      +{formatCurrency(additionalMonthly)}
                    </div>
                    <p className="text-green-700 font-medium">
                      {dict.results.monthly}
                    </p>
                    <Badge variant="secondary" className="mt-2">
                      {dict.results.moreThanAverage}
                    </Badge>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      +{formatCurrency(additionalAnnual)}
                    </div>
                    <p className="text-green-700 font-medium">
                      {dict.results.annual}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">
                    {dict.comparison.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg border border-red-200">
                    <div>
                      <p className="font-semibold text-red-900">{dict.comparison.industry.title}</p>
                      <p className="text-sm text-red-700">{dict.comparison.industry.description}</p>
                    </div>
                    <div className="text-2xl font-bold text-red-600">
                      {formatCurrency(industryRevenue)}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border border-green-200">
                    <div>
                      <p className="font-semibold text-green-900">{dict.comparison.publica.title}</p>
                      <p className="text-sm text-green-700">{dict.comparison.publica.description}</p>
                    </div>
                    <div className="text-2xl font-bold text-green-600">
                      {formatCurrency(publicaRevenue)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          {/* Why Choose Section */}
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-xl text-blue-900">
                {dict.whyChoose.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-blue-900">{dict.whyChoose.allInOne.title}</p>
                  <p className="text-sm text-blue-700">{dict.whyChoose.allInOne.description}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <DollarSign className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-blue-900">{dict.whyChoose.revenue.title}</p>
                  <p className="text-sm text-blue-700">{dict.whyChoose.revenue.description}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-blue-900">{dict.whyChoose.enterprise.title}</p>
                  <p className="text-sm text-blue-700">{dict.whyChoose.enterprise.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-20">
        <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200 max-w-4xl mx-auto">
          <CardContent className="py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {dict.cta.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              {dict.cta.subtitle}
            </p>
            
            <Button 
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700 text-lg font-semibold px-8 py-4 h-14"
              asChild
            >
              <a 
                href="https://meetings.hubspot.com/ignacio-van-gelderen/making-a-calculated-move?embed=true" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {dict.cta.button}
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function Calculator({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  )
}
