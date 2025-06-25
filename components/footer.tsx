import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

// Custom X (Twitter) icon component
const XIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

interface FooterProps {
  dict?: {
    footer: {
      description: string
      sections: {
        solutions: {
          title: string
          links: Array<{
            href: string
            text: string
          }>
        }
        features: {
          title: string
          links: Array<{
            href: string
            text: string
          }>
        }
        company: {
          title: string
          links: Array<{
            href: string
            text: string
          }>
        }
        subscribe: {
          title: string
          description: string
          placeholder: string
          button: string
        }
      }
      copyright: string
      legal: Array<{
        href: string
        text: string
      }>
    }
  }
  locale?: string
}

// Default English values for backward compatibility
const defaultFooterDict = {
  footer: {
    description: "The most robust and dynamic digital content platform for publishers and content creators, empowering you to create, manage, and distribute exceptional content.",
    sections: {
      solutions: {
        title: "Solutions",
        links: [
          { href: "/solutions/publishers", text: "For Publishers" },
          { href: "/solutions/bookshops", text: "For Bookshops" },
          { href: "/solutions/content-creators", text: "For Content Creators" },
          { href: "/solutions/libraries", text: "For Libraries" },
          { href: "/solutions/magazines-newspapers", text: "For Magazines & Newspapers" }
        ]
      },
      features: {
        title: "Features",
        links: [
          { href: "/features/vito-ai", text: "Vito AI" },
          { href: "/features/native-app", text: "Native App" },
          { href: "/features/integrations", text: "Integrations" }
        ]
      },
      company: {
        title: "Company",
        links: [
          { href: "/about-us", text: "About Us" },
          { href: "/compare", text: "Compare Platforms" },
          { href: "/careers", text: "Careers" },
          { href: "/blog", text: "Blog" },
          { href: "/press", text: "Press" },
          { href: "/contact", text: "Contact" }
        ]
      },
      subscribe: {
        title: "Subscribe",
        description: "Stay updated with the latest news and features",
        placeholder: "Your email",
        button: "Subscribe"
      }
    },
    copyright: "© {year} Publica.la. All rights reserved.",
    legal: [
      { href: "/terms", text: "Terms of Service" },
      { href: "/privacy", text: "Privacy Policy" },
      { href: "/cookies", text: "Cookie Policy" }
    ]
  }
}

export function Footer({ dict, locale = "en" }: FooterProps) {
  const footerDict = dict || defaultFooterDict

  // Helper function to add locale to internal links
  const getLocalizedHref = (href: string) => {
    if (href.startsWith('/')) {
      return `/${locale}${href}`
    }
    return href
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link href={`/${locale}`} className="flex items-center mb-4">
              <div className="h-8 w-auto md:h-10 relative flex items-center">
                <Image
                  src="/images/logo.svg"
                  alt="Publica.la Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain brightness-0 invert"
                />
              </div>
            </Link>
            <p className="text-gray-400 mb-4">
              {footerDict.footer.description}
            </p>
            <div className="flex gap-4">
              <SocialLink href="https://www.facebook.com/getpublicala" icon={<Facebook size={18} />} />
              <SocialLink href="https://x.com/getpublicala" icon={<XIcon size={18} />} />
              <SocialLink href="https://www.instagram.com/getpublicala" icon={<Instagram size={18} />} />
              <SocialLink href="https://www.linkedin.com/company/publica-la" icon={<Linkedin size={18} />} />
              <SocialLink href="https://www.youtube.com/@Publicala" icon={<Youtube size={18} />} />
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{footerDict.footer.sections.solutions.title}</h3>
            <ul className="space-y-2">
              {footerDict.footer.sections.solutions.links.map((link, index) => (
                <FooterLink key={index} href={getLocalizedHref(link.href)}>{link.text}</FooterLink>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{footerDict.footer.sections.features.title}</h3>
            <ul className="space-y-2">
              {footerDict.footer.sections.features.links.map((link, index) => (
                <FooterLink key={index} href={getLocalizedHref(link.href)}>{link.text}</FooterLink>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{footerDict.footer.sections.company.title}</h3>
            <ul className="space-y-2">
              {footerDict.footer.sections.company.links.map((link, index) => (
                <FooterLink key={index} href={getLocalizedHref(link.href)}>{link.text}</FooterLink>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{footerDict.footer.sections.subscribe.title}</h3>
            <p className="text-gray-400 mb-4">{footerDict.footer.sections.subscribe.description}</p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder={footerDict.footer.sections.subscribe.placeholder} 
                className="bg-gray-800 border-gray-700 text-white" 
              />
              <Button>{footerDict.footer.sections.subscribe.button}</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">{footerDict.footer.copyright.replace('{year}', new Date().getFullYear().toString())}</p>
          <div className="flex gap-6">
            {footerDict.footer.legal.map((link, index) => (
              <Link key={index} href={getLocalizedHref(link.href)} className="text-sm text-gray-400 hover:text-white">
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-gray-400 hover:text-white transition-colors">
        {children}
      </Link>
    </li>
  )
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
    >
      {icon}
    </Link>
  )
}
