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
  title: "Senior Full Stack Developer (TypeScript & Mobile) - Careers | Publica.la",
  description: "Join our Product Engineering team as a Senior Full Stack Developer to build mobile and web apps with React Native, TypeScript, and modern frontend technologies. Remote position, UTC-3 to UTC+2 preferred.",
  keywords: ["senior full stack developer", "typescript", "react native", "mobile developer", "remote work", "publica.la"],
  openGraph: {
    title: "Senior Full Stack Developer (TypeScript & Mobile) - Careers | Publica.la",
    description: "Build mobile and web apps with React Native, TypeScript, and modern frontend technologies at Publica.la",
    type: "website",
  },
}

/**
 * JOB POSTING PAGE - ALWAYS IN ENGLISH
 */
export default async function FullStackDeveloperPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const userDict = await getDictionary(locale as "en" | "es" | "pt")

  return (
    <div className="min-h-screen bg-white">
      <Navbar dict={userDict} locale={locale} />

      <main className="max-w-4xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Senior Full Stack Developer (TypeScript & Mobile)</h1>

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
            jobTitle="Senior Full Stack Developer (TypeScript & Mobile)"
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
              Publica.la is a B2B SaaS platform trusted by hundreds of publishers worldwide to sell and deliver digital content directly to their readers. We're building mobile and web applications with React Native and a shared TypeScript core that serves thousands of daily readers across iOS, Android, and the web. You'll work primarily on React Native and modern frontend development, with opportunities to contribute across our entire TypeScript stack.
            </p>
          </section>

          {/* What you will do */}
          <section id="responsibilities" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">What you will do</h2>
            <ul className="space-y-3 text-gray-700 list-disc list-inside">
              <li>Ship features end to end for mobile and web: scope, build, test, release, learn.</li>
              <li>Build solid React Native apps and share TypeScript models and logic with React and Vue.</li>
              <li>Create accessible, fast UIs with Tailwind and modern component patterns.</li>
              <li>Keep quality high with tests and GitLab CI. We prefer small PRs and frequent releases.</li>
              <li>Improve performance and reliability: cold start, bundle size, offline, retries, error boundaries.</li>
              <li>Collaborate with design, product and support to turn feedback into improvements.</li>
              <li>Write short, clear docs and propose pragmatic changes when needed.</li>
              <li>Nice bonus: touch Laravel/PHP services, SingleStore and Redis, and help with AWS or Cloudflare when relevant.</li>
            </ul>
          </section>

          {/* Our stack */}
          <section id="tech-stack" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Our stack</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-3">
                <strong>Main focus:</strong> React Native, Electron, React, Vue, TypeScript, JavaScript, Tailwind, Node.js scripting, GitLab CI, fastlane
              </p>
              <p className="text-gray-700">
                <strong>Also in other projects:</strong> Laravel (PHP), SingleStore, Redis, AWS, Cloudflare
              </p>
            </div>
          </section>

          {/* You might be a fit if you have */}
          <section id="requirements" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">You might be a fit if you have</h2>
            <ul className="space-y-3 text-gray-700 list-disc list-inside">
              <li>6+ years building product UIs, with at least 3 years in React Native or strong React plus mobile exposure.</li>
              <li>Strong TypeScript skills and experience building reusable components and hooks.</li>
              <li>Shipped and maintained apps in production (mobile or web) and care about users.</li>
              <li>Solid CSS fundamentals and responsive design. Tailwind experience is a plus.</li>
              <li>Testing mindset: unit and integration tests, Detox.</li>
              <li>Comfortable with Git, code reviews and CI.</li>
              <li>Communicate clearly in English. Spanish and Portuguese are valued.</li>
            </ul>
          </section>

          {/* Nice to have */}
          <section id="nice-to-have" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Nice to have</h2>
            <ul className="space-y-3 text-gray-700 list-disc list-inside">
              <li>RN performance or native modules experience (Hermes, JSI, animations).</li>
              <li>Laravel/PHP, SingleStore, Redis or data-heavy UI work.</li>
              <li>AWS (Lambda, S3) and Cloudflare (Workers, CDN, cache).</li>
              <li>Observability: Sentry, logs, metrics, feature flags, simple A/B tests.</li>
            </ul>
          </section>

          {/* How we work */}
          <section id="how-we-work" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">How we work</h2>
            <ul className="space-y-3 text-gray-700 list-disc list-inside">
              <li>Small team, bias to simple solutions and frequent shipping.</li>
              <li>Async by default, jump on quick calls when it helps.</li>
              <li>Context-rich PRs and fast feedback.</li>
              <li>We value initiative: propose, prototype, measure, iterate.</li>
            </ul>
          </section>

          {/* Hiring process */}
          <section id="hiring-process" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Hiring process</h2>
            <ol className="space-y-3 text-gray-700 list-decimal list-inside">
              <li>Intro chat about your experience and what you want next.</li>
              <li>Short, real-world take-home exercise you can do in your own time.</li>
              <li>Technical conversation and exercise review with a peer.</li>
              <li>Chat with our CEO.</li>
              <li>Offer.</li>
              <li>We agree on a starting day, and start working together.</li>
            </ol>
          </section>

          {/* Pay and perks */}
          <section id="benefits" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Pay and perks</h2>
            <ul className="space-y-3 text-gray-700 list-disc list-inside">
              <li>Competitive salary in USD based on experience and location.</li>
              <li>Flexible hours and remote setup.</li>
              <li>Flexible, results-based work structure.</li>
              <li>Collaborative, creative and dynamic work environment.</li>
              <li>Opportunity to work on an industry-leading ecommerce platform.</li>
              <li>Unlimited time off.</li>
              <li>Occasional team buildings, 100% paid by Publica.la.</li>
              <li>Reimbursements for books purchased through our platform.</li>
            </ul>
          </section>

          {/* How to apply */}
          <section id="how-to-apply" className="mb-12">
            <h2 className="text-2xl font-bold mb-4">How to apply</h2>
            <p className="text-gray-700 mb-4">
              Send your GitHub or portfolio plus a short note about something you shipped that made users happier.
            </p>
            <p className="text-gray-700 mb-6">
              Email: <a href="mailto:jobs@publica.la" className="text-primary hover:underline">jobs@publica.la</a> with subject <strong>Senior Full Stack Developer (TypeScript & Mobile)</strong>.
            </p>
            <ApplyButton
              jobTitle="Senior Full Stack Developer (TypeScript & Mobile)"
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
