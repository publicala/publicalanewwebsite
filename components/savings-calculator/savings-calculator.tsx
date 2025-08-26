'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, TrendingUp, DollarSign, Zap, Shield, Users } from 'lucide-react'

export function SavingsCalculator() {
  const [monthlyRevenue, setMonthlyRevenue] = useState(45000)
  const [calculated, setCalculated] = useState(false)

  const industryAverage = 0.45 // 45%
  const publicaShare = 0.85 // 85%
  
  const industryRevenue = monthlyRevenue * industryAverage
  const publicaRevenue = monthlyRevenue * publicaShare
  const additionalMonthly = publicaRevenue - industryRevenue
  const additionalAnnual = additionalMonthly * 12

  const handleCalculate = () => {
    setCalculated(true)
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Revenue Savings Calculator
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Discover how much more revenue you can keep with publica.la's all-in-one ecommerce platform
        </p>
        
        <div className="flex items-center justify-center gap-4 mb-8">
          <Badge variant="secondary" className="text-lg px-4 py-2">
            Keep 85% vs 45% industry average
          </Badge>
        </div>

        <div className="flex items-center justify-center gap-2 text-gray-600">
          <Users className="w-5 h-5" />
          <span>Trusted by 1000+ content creators worldwide</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Calculator Section */}
        <div className="space-y-8">
          <Card className="border-2 border-blue-200 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-blue-900">
                Enter Your Monthly Revenue
              </CardTitle>
              <p className="text-gray-600">
                Input your current monthly revenue to calculate potential savings
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="revenue" className="text-sm font-medium text-gray-700">
                  Monthly Revenue (USD)
                </label>
                <Input
                  id="revenue"
                  type="number"
                  value={monthlyRevenue}
                  onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                  className="text-2xl font-bold text-center h-16"
                  placeholder="45000"
                />
              </div>
              
              <Button 
                onClick={handleCalculate}
                className="w-full h-14 text-lg font-semibold bg-blue-600 hover:bg-blue-700"
                size="lg"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Calculate My Savings
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-blue-900">All-in-one platform</span>
              </div>
              <p className="text-gray-700">No multiple solutions needed</p>
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
                    Your Potential Savings
                  </CardTitle>
                  <p className="text-green-700">
                    See how publica.la compares to industry standards
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      +{formatCurrency(additionalMonthly)}
                    </div>
                    <p className="text-green-700 font-medium">
                      Additional monthly revenue
                    </p>
                    <Badge variant="secondary" className="mt-2">
                      89% more than industry average
                    </Badge>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      +{formatCurrency(additionalAnnual)}
                    </div>
                    <p className="text-green-700 font-medium">
                      Additional annual revenue
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">
                    Revenue Comparison
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg border border-red-200">
                    <div>
                      <p className="font-semibold text-red-900">Industry Average</p>
                      <p className="text-sm text-red-700">Keep 45% (55% platform costs)</p>
                    </div>
                    <div className="text-2xl font-bold text-red-600">
                      {formatCurrency(industryRevenue)}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border border-green-200">
                    <div>
                      <p className="font-semibold text-green-900">With publica.la</p>
                      <p className="text-sm text-green-700">Keep 85% (15% platform costs)</p>
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
                Why Choose publica.la?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-blue-900">All-in-One Platform</p>
                  <p className="text-sm text-blue-700">No need for multiple solutions - ecommerce, content management, and reader all included</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <DollarSign className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-blue-900">Keep 85% of Revenue</p>
                  <p className="text-sm text-blue-700">Industry-leading revenue share vs 45% average</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-blue-900">Enterprise-Grade Platform</p>
                  <p className="text-sm text-blue-700">More robust and reliable than piecing together multiple tools</p>
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
              Ready to Keep More of Your Revenue?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of content creators and businesses already maximizing their revenue with publica.la's comprehensive ecommerce platform.
            </p>
            
            <Button 
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700 text-lg font-semibold px-8 py-4 h-14"
            >
              Start Your Free Trial
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
