import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { SolutionsSection } from "@/components/solutions-section"
import { PlatformShowcase } from "@/components/platform-showcase"
import { ContentLibrary } from "@/components/content-library"
import { ThemeOptions } from "@/components/theme-options"
import { PaymentShowcase } from "@/components/payment-showcase"
import { AnalyticsDashboard } from "@/components/analytics-dashboard"
import { FeaturesSection } from "@/components/features-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { ChatWidget } from "@/components/chat-widget"
import { HomeCaseStudy } from "@/components/home-case-study"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <SolutionsSection />
      <PlatformShowcase />
      <ThemeOptions />
      <ContentLibrary />
      <PaymentShowcase />
      <HomeCaseStudy />
      <AnalyticsDashboard />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <ChatWidget />
    </main>
  )
}
