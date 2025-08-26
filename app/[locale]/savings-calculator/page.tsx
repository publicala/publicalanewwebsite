import { Metadata } from 'next'
import { SavingsCalculator } from '@/components/savings-calculator/savings-calculator'
import { getDictionary } from '@/app/dictionaries'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const dict = await getDictionary(params.locale)
  
  return {
    title: dict.savingsCalculator?.title || 'Revenue Savings Calculator | publica.la',
    description: dict.savingsCalculator?.description || 'Calculate how much more revenue you can keep with publica.la\'s all-in-one ecommerce platform. Keep 85% vs 45% industry average.',
  }
}

export default async function SavingsCalculatorPage({ params }: { params: { locale: string } }) {
  const dict = await getDictionary(params.locale)
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <SavingsCalculator locale={params.locale} dict={dict.savingsCalculator} />
    </div>
  )
}
