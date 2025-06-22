import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CareersHero } from "@/components/careers/careers-hero"
import { CareersOpenings } from "@/components/careers/careers-openings"
import { CareersValues } from "@/components/careers/careers-values"
import { CareersBenefits } from "@/components/careers/careers-benefits"
import { CareersApplication } from "@/components/careers/careers-application"

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <CareersHero />
        <CareersValues />
        <CareersBenefits />
        <CareersOpenings />
        <CareersApplication />
      </main>
      <Footer />
    </div>
  )
}
