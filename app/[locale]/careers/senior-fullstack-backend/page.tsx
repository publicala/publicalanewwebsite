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
  title: "Senior Full Stack Developer (Backend Focus) - Careers | Publica.la",
  description: "Join our Product Engineering team as a Senior Full Stack Developer focused on backend. Build scalable multi-tenant SaaS platform with Laravel, PHP, SingleStore, and modern web technologies. 6+ years experience required.",
  keywords: ["senior full stack developer", "laravel", "php", "backend developer", "singlestore", "remote work", "publica.la"],
  openGraph: {
    title: "Senior Full Stack Developer (Backend Focus) - Careers | Publica.la",
    description: "Build scalable multi-tenant SaaS platform with Laravel, PHP, SingleStore, and modern web technologies",
    type: "website",
  },
}

/**
 * JOB POSTING PAGE - ALWAYS IN ENGLISH
 */
export default async function SeniorFullStackBackendPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const userDict = await getDictionary(locale as "en" | "es" | "pt")

  return (
    <div className="min-h-screen bg-white">
      <Navbar dict={userDict} locale={locale} />

      <main className="max-w-4xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Senior Full Stack Developer (Backend Focus)</h1>

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
            jobTitle="Senior Full Stack Developer (Backend Focus)"
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
              Publica.la is a B2B SaaS platform trusted by hundreds of publishers, bookshops, and libraries worldwide to power their digital content sales. Our multi-tenant platform processes millions of transactions across 156 countries, managing digital libraries, subscriptions, and e-commerce at scale. We're looking for a Senior Full Stack Developer with strong backend expertise to help us build and scale the core systems that power this growth—working with Laravel/PHP, SingleStore, multi-tenant architecture, and distributed systems.
            </p>
          </section>

          {/* What you will do */}
          <section id="responsibilities" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">What you will do</h2>
            <ul className="space-y-3 text-gray-700 list-disc list-inside">
              <li>Design and develop new features for our multi-tenant SaaS platform, with focus on backend services.</li>
              <li>Build and maintain scalable Laravel applications with PHP, SingleStore, and Valkey/Redis.</li>
              <li>Work with distributed SQL databases (SingleStore) and implement efficient multi-tenant data isolation patterns.</li>
              <li>Develop and optimize queue-based background processing for content ingestion, payments, and analytics.</li>
              <li>Collaborate with frontend developers on Livewire and Alpine.js integration.</li>
              <li>Ensure code quality through testing (PHPUnit/Pest), static analysis (PHPStan), and code reviews.</li>
              <li>Participate in architecture decisions and technical planning for platform scalability.</li>
              <li>Work directly with customers to understand their needs and improve the product.</li>
              <li>Maintain and improve existing features, ensuring platform reliability and performance.</li>
            </ul>
          </section>

          {/* Our stack */}
          <section id="tech-stack" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Our stack</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-3">
                <strong>Technologies:</strong> PHP with Laravel, Livewire, Alpine.js, TailwindCSS, Laravel Nova, Valkey/Redis
              </p>
              <p className="text-gray-700">
                <strong>Infrastructure:</strong> SingleStore, AWS Lambda, AWS S3, Cloudflare Workers, Docker, GitLab CI/CD
              </p>
            </div>
          </section>

          {/* You might be a fit if you have */}
          <section id="requirements" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">You might be a fit if you have</h2>
            <ul className="space-y-3 text-gray-700 list-disc list-inside">
              <li>6+ years of full stack development experience with strong backend focus.</li>
              <li>Deep expertise in PHP and Laravel framework (at least 3 years with Laravel).</li>
              <li>Strong SQL database knowledge.</li>
              <li>Experience building and scaling multi-tenant SaaS applications.</li>
              <li>Solid understanding of queue-based architectures and background processing.</li>
              <li>Experience with testing frameworks (PHPUnit/Pest) and static analysis tools.</li>
              <li>Strong communication skills in written English and Spanish (most of our communication is async and written). Portuguese is a plus.</li>
              <li>Proactive mindset and ability to work effectively in a remote team environment.</li>
            </ul>
          </section>

          {/* Nice to have */}
          <section id="nice-to-have" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Nice to have</h2>
            <ul className="space-y-3 text-gray-700 list-disc list-inside">
              <li>Understanding of UX principles and ability to collaborate with designers.</li>
              <li>Frontend experience with modern JavaScript frameworks and component-based architectures.</li>
              <li>Experience with SingleStore or other distributed SQL databases (TiDB, CockroachDB).</li>
              <li>Livewire and Alpine.js development experience.</li>
              <li>Laravel Nova administration panel experience.</li>
              <li>Experience with AWS Lambda and serverless architectures.</li>
              <li>Payment gateway integration experience (Stripe, MercadoPago).</li>
              <li>Experience with content processing pipelines (PDF, EPUB, audio files).</li>
              <li>Familiarity with SAML 2.0 and OAuth implementations.</li>
              <li>Experience with e-commerce platforms and subscription billing.</li>
              <li>Contributions to open-source Laravel packages or projects.</li>
            </ul>
          </section>

          {/* How we work */}
          <section id="how-we-work" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">How we work</h2>
            <ul className="space-y-3 text-gray-700 list-disc list-inside">
              <li>100% remote team working across different time zones.</li>
              <li>Async-first communication with clear written documentation.</li>
              <li>We value code quality, testing, and maintainability.</li>
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
              <li>Technical assessment focused on Laravel and backend architecture.</li>
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
              <li>Links to projects you've worked on (GitHub profile, portfolio, etc.)</li>
              <li>Salary expectations</li>
              <li>Why you want to be part of Publica.la</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Email: <a href="mailto:jobs@publica.la" className="text-primary hover:underline">jobs@publica.la</a> with subject <strong>Senior Full Stack Developer (Backend Focus)</strong>.
            </p>
            <ApplyButton
              jobTitle="Senior Full Stack Developer (Backend Focus)"
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
