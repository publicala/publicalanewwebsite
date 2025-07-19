import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, FileText, Users, Building, Briefcase, CreditCard, Shield } from "lucide-react"
import { getDictionary } from "@/app/dictionaries"

export default async function SitemapPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const dict = await getDictionary(locale as "en" | "es" | "pt")
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <Navbar dict={dict} locale={locale} />

      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Website Sitemap</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Navigate through all pages and sections of publica.la. Find exactly what you're looking for.
            </p>
          </div>

          {/* Sitemap Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Solutions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-primary" />
                  Solutions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <SitemapLink href={`/${locale}/solutions/publishers`} text="For Publishers" />
                  <SitemapLink href={`/${locale}/solutions/bookshops`} text="For Bookshops" />
                  <SitemapLink href={`/${locale}/solutions/content-creators`} text="For Content Creators" />
                  <SitemapLink href={`/${locale}/solutions/libraries`} text="For Libraries" />
                  <SitemapLink href={`/${locale}/solutions/magazines-newspapers`} text="For Magazines & Newspapers" />
                </ul>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <SitemapLink href={`/${locale}/features`} text="All Features" />
                  <SitemapLink href={`/${locale}/features/vito-ai`} text="Vito AI" />
                  <SitemapLink href={`/${locale}/features/native-app`} text="Native App" />
                  <SitemapLink href={`/${locale}/features/integrations`} text="Integrations" />
                </ul>
              </CardContent>
            </Card>

            {/* Case Studies */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Case Studies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <SitemapLink href={`/${locale}/case-studies`} text="All Case Studies" />
                  <SitemapLink href={`/${locale}/case-studies/forbes-colombia`} text="Forbes Colombia" />
                  <SitemapLink href={`/${locale}/case-studies/hammurabi-publishing`} text="Hammurabi Publishing" />
                  <SitemapLink href={`/${locale}/case-studies/bajalibros`} text="BajaLibros" />
                  <SitemapLink href={`/${locale}/case-studies/antartica-libreria`} text="Antártica Librería" />
                </ul>
              </CardContent>
            </Card>

            {/* Company */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  Company
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <SitemapLink href={`/${locale}/about-us`} text="About Us" />
                  <SitemapLink href={`/${locale}/careers`} text="Careers" />
                  <SitemapLink href={`/${locale}/contact`} text="Contact Us" />
                  <SitemapLink href={`/${locale}/compare`} text="Platform Comparisons" />
                </ul>
              </CardContent>
            </Card>

            {/* Pricing & Legal */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  Pricing & Legal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <SitemapLink href={`/${locale}/pricing`} text="Pricing Plans" />
                  <SitemapLink href={`/${locale}/pricing`} text="Terms of Service" />
                  <SitemapLink href={`/${locale}/privacy`} text="Privacy Policy" />
                </ul>
              </CardContent>
            </Card>

            {/* Comparisons */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Platform Comparisons
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <SitemapLink href={`/${locale}/compare`} text="All Comparisons" />
                  <SitemapLink href={`/${locale}/compare/publica-vs-supadu`} text="publica.la vs Supadu" />
                  <SitemapLink href={`/${locale}/compare/publica-vs-vitalsource`} text="publica.la vs VitalSource" />
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* XML Sitemap Link */}
          <div className="mt-12 text-center">
            <Card className="max-w-md mx-auto">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">For Search Engines</h3>
                <p className="text-sm text-gray-600 mb-4">Access our XML sitemap for search engine optimization</p>
                <Link
                  href="/sitemap.xml"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                  target="_blank"
                >
                  <ExternalLink className="h-4 w-4" />
                  View XML Sitemap
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer dict={dict} locale={locale} />
    </div>
  )
}

function SitemapLink({ href, text }: { href: string; text: string }) {
  return (
    <li>
      <Link href={href} className="text-gray-600 hover:text-primary transition-colors text-sm">
        {text}
      </Link>
    </li>
  )
}
