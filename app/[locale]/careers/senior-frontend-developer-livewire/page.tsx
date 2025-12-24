import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ApplyButton } from "@/components/careers/apply-button"
import { getDictionary } from "@/app/dictionaries"
import { Metadata } from "next"
import { MapPin, Clock, Users } from "lucide-react"

/**
 * SEO METADATA - ALWAYS IN ENGLISH
 */
export const metadata: Metadata = {
  title: "Senior Frontend Developer (Livewire & TALL Stack) - Careers | Publica.la",
  description: "Join our Product Engineering team as a Senior Frontend Developer to build beautiful, accessible interfaces with Livewire, Alpine.js, and Tailwind CSS. Remote position, UTC-3 to UTC+2 preferred.",
  keywords: ["senior frontend developer", "livewire", "alpine.js", "tailwind css", "tall stack", "vue.js", "remote work", "publica.la"],
  openGraph: {
    title: "Senior Frontend Developer (Livewire & TALL Stack) - Careers | Publica.la",
    description: "Build beautiful, accessible user interfaces with Livewire, Alpine.js, and Tailwind CSS at Publica.la",
    type: "website",
  },
}

/**
 * JOB POSTING PAGE - ALWAYS IN ENGLISH
 */
export default async function SeniorFrontendDeveloperPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const userDict = await getDictionary(locale as "en" | "es" | "pt")

  return (
    <div className="min-h-screen bg-white">
      <Navbar dict={userDict} locale={locale} />

      <main className="max-w-4xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Senior Frontend Developer (Livewire & TALL Stack)</h1>

          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>Product Engineering</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>Remote (UTC-3 to UTC+2 preferred)</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>Full time</span>
            </div>
          </div>

          <ApplyButton
            jobTitle="Senior Frontend Developer (Livewire & TALL Stack)"
            department="Product Engineering"
            size="lg"
          />
        </div>

        {/* Job Description */}
        <div className="prose prose-lg max-w-none">

          {/* What we do */}
          <section id="what-we-do" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">What we do</h2>
            <p className="text-gray-700 leading-relaxed">
              Publica.la is a B2B SaaS platform trusted by hundreds of publishers, bookshops, and libraries worldwide to power their digital content sales. Our multi-tenant platform processes millions of transactions across 156 countries, managing digital libraries, subscriptions, and e-commerce at scale. We're looking for a Senior Frontend Developer to build beautiful, accessible user interfaces using Livewire, Alpine.js, and Tailwind CSS. You'll create experiences used by thousands of publishers and millions of readers daily.
            </p>
          </section>

          {/* What you will do */}
          <section id="responsibilities" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">What you will do</h2>
            <ul className="space-y-3 text-gray-700 list-disc list-inside">
              <li>Build responsive, accessible interfaces for our multi-tenant publisher dashboard and admin tools.</li>
              <li>Develop Livewire components for real-time, interactive features with server-side rendering.</li>
              <li>Create lightweight interactions with Alpine.js following mobile-first design principles.</li>
              <li>Style interfaces with Tailwind CSS, ensuring WCAG 2.1 AA compliance.</li>
              <li>Work with Vue.js components where needed for complex client-side interactions.</li>
              <li>Collaborate with backend developers on API contracts and component integration.</li>
              <li>Optimize frontend performance: lazy loading, bundle optimization, caching strategies.</li>
              <li>Write tests and maintain code quality with modern tooling.</li>
              <li>Participate in design reviews and contribute to UI/UX improvements.</li>
            </ul>
          </section>

          {/* Our stack */}
          <section id="tech-stack" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Our stack</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-3">
                <strong>Technologies:</strong> Laravel, Livewire, Alpine.js, Tailwind CSS, Vue.js
              </p>
              <p className="text-gray-700">
                <strong>Also in the project:</strong> PHP, SingleStore, Valkey/Redis, Docker, GitLab CI/CD
              </p>
            </div>
          </section>

          {/* You might be a fit if you have */}
          <section id="requirements" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">You might be a fit if you have</h2>
            <ul className="space-y-3 text-gray-700 list-disc list-inside">
              <li>6+ years of frontend development experience with strong component architecture expertise.</li>
              <li>Deep understanding of Livewire, Alpine.js, or similar reactive frameworks (at least 1 year).</li>
              <li>Experience with Tailwind CSS and utility-first CSS frameworks.</li>
              <li>Strong focus on accessibility (WCAG 2.1 AA) and mobile-first design.</li>
              <li>Experience building responsive, performant user interfaces for SaaS platforms.</li>
              <li>Comfortable working with Laravel ecosystem and PHP (basic understanding is fine).</li>
              <li>Native Spanish speaker or conversational-level proficiency required. Strong written communication skills in English and Spanish (90% of our communication is async and written). Portuguese is a plus.</li>
              <li>Proactive mindset and ability to work effectively in a remote team environment.</li>
            </ul>
          </section>

          {/* Nice to have */}
          <section id="nice-to-have" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Nice to have</h2>
            <ul className="space-y-3 text-gray-700 list-disc list-inside">
              <li>Vue.js development experience.</li>
              <li>Experience with multi-tenant SaaS interfaces and role-based access control.</li>
              <li>Understanding of Laravel Blade templating and server-side rendering.</li>
              <li>Knowledge of modern build tools (Vite, Webpack).</li>
              <li>Experience with Playwright for frontend testing.</li>
              <li>Understanding of web performance optimization techniques.</li>
              <li>Experience with design systems and component libraries.</li>
              <li>Contributions to open-source frontend projects.</li>
            </ul>
          </section>

          {/* How we work */}
          <section id="how-we-work" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">How we work</h2>
            <ul className="space-y-3 text-gray-700 list-disc list-inside">
              <li>100% remote team working across different time zones.</li>
              <li>Async-first communication with clear written documentation.</li>
              <li>We value clean code, accessibility, and maintainability.</li>
              <li>Continuous learning and staying updated with technology advancements.</li>
              <li>Strong focus on developer experience and productivity.</li>
              <li>Collaborative environment where your opinion matters in key decisions.</li>
              <li>Direct interaction with customers to understand their needs.</li>
            </ul>
          </section>

          {/* Hiring process */}
          <section id="hiring-process" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Hiring process</h2>
            <ol className="space-y-3 text-gray-700 list-decimal list-inside">
              <li>Initial conversation about your experience and career goals.</li>
              <li>Frontend assessment focused on Livewire and component architecture.</li>
              <li>Technical interview with the engineering team to review your assessment.</li>
              <li>Chat with our CEO about company vision and culture fit.</li>
              <li>Offer.</li>
              <li>Onboarding and start date coordination.</li>
            </ol>
          </section>

          {/* Pay and perks */}
          <section id="benefits" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Pay and perks</h2>
            <ul className="space-y-3 text-gray-700 list-disc list-inside">
              <li>Competitive salary in USD based on experience and location.</li>
              <li>100% remote work with flexible hours.</li>
              <li>Flexible, results-based work structure.</li>
              <li>Collaborative, creative and dynamic work environment.</li>
              <li>Opportunity to work on an industry-leading digital publishing platform.</li>
              <li>Unlimited time off.</li>
              <li>Occasional team buildings, 100% paid by Publica.la.</li>
              <li>Reimbursements for books purchased through our platform.</li>
              <li>Professional development opportunities within the company.</li>
            </ul>
          </section>

          {/* How to apply */}
          <section id="how-to-apply" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">How to apply</h2>
            <p className="text-gray-700 mb-4">
              Send us the following:
            </p>
            <ul className="space-y-2 text-gray-700 list-disc list-inside mb-4">
              <li>Your CV/resume</li>
              <li>Links to projects you've worked on (GitHub profile, portfolio, CodePen, etc.)</li>
              <li>Salary expectations</li>
              <li>Why you want to be part of Publica.la</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Email: <a href="mailto:jobs@publica.la" className="text-primary hover:underline">jobs@publica.la</a> with subject <strong>Senior Frontend Developer (Livewire & TALL Stack)</strong>.
            </p>
            <ApplyButton
              jobTitle="Senior Frontend Developer (Livewire & TALL Stack)"
              department="Product Engineering"
              size="lg"
            />
          </section>

        </div>
      </main>

      <Footer dict={userDict} locale={locale} />
    </div>
  )
}
