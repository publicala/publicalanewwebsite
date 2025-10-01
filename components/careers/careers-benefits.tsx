import { Check } from "lucide-react"

/**
 * CAREERS BENEFITS COMPONENT - ENGLISH ONLY
 * 
 * This component displays employee benefits and is hardcoded in English.
 * Benefits information should remain consistent in English for all candidates
 * to ensure clear understanding of compensation and perks.
 */
export function CareersBenefits() {
  const benefits = [
    "Competitive salary and equity packages",
    "Flexible work arrangements and remote options",
    "Professional development and learning budget",
    "Unlimited time off",
    "State-of-the-art equipment and tools",
    "Team retreats and company events",
    "Opportunity to work with cutting-edge technology",
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Work With Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer competitive benefits and a supportive environment where you can grow your career
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center">
                <Check className="h-4 w-4" />
              </div>
              <span className="text-gray-700">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
