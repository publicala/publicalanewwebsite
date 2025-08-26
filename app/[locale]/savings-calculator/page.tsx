import { Metadata } from 'next'
import { SavingsCalculator } from '@/components/savings-calculator/savings-calculator'

export const metadata: Metadata = {
  title: 'Revenue Savings Calculator | publica.la',
  description: 'Calculate how much more revenue you can keep with publica.la\'s all-in-one ecommerce platform. Keep 85% vs 45% industry average.',
}

export default function SavingsCalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <SavingsCalculator />
    </div>
  )
}
