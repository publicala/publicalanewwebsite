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
        external?: boolean
      }>
    }
  }
  locale?: string
}

export function Footer({ dict, locale = "en" }: FooterProps) {
  // Fallback footer data in case dict is not provided (should be avoided)
  const fallbackFooter = {
    description: "The most robust and dynamic digital content platform for publishers and content creators.",
    sections: {
      solutions: { title: "Solutions", links: [] },
      features: { title: "Features", links: [] },
      company: { title: "Company", links: [] },
      subscribe: { title: "Subscribe", description: "Stay updated", placeholder: "Your email", button: "Subscribe" }
    },
    copyright: "© {year} Publica.la. All rights reserved.",
    legal: [
      { href: "/terms", text: "Terms of Service" },
      { href: "/privacy", text: "Privacy Policy" }
    ]
  }
  
  const footerData = dict?.footer || fallbackFooter

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
              {footerData.description}
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
            <h3 className="font-bold text-lg mb-4">{footerData.sections.solutions.title}</h3>
            <ul className="space-y-2">
              {footerData.sections.solutions.links.map((link, index) => (
                <FooterLink key={index} href={getLocalizedHref(link.href)}>{link.text}</FooterLink>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{footerData.sections.features.title}</h3>
            <ul className="space-y-2">
              {footerData.sections.features.links.map((link, index) => (
                <FooterLink key={index} href={getLocalizedHref(link.href)}>{link.text}</FooterLink>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{footerData.sections.company.title}</h3>
            <ul className="space-y-2">
              {footerData.sections.company.links.map((link, index) => (
                <FooterLink key={index} href={getLocalizedHref(link.href)}>{link.text}</FooterLink>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{footerData.sections.subscribe.title}</h3>
            <p className="text-gray-400 mb-4">{footerData.sections.subscribe.description}</p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder={footerData.sections.subscribe.placeholder} 
                className="bg-gray-800 border-gray-700 text-white" 
              />
              <Button>{footerData.sections.subscribe.button}</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">{footerData.copyright.replace('{year}', new Date().getFullYear().toString())}</p>
          <div className="flex gap-6">
            {footerData.legal.map((link, index) => (
              <Link 
                key={index} 
                href={(link as any).external ? link.href : getLocalizedHref(link.href)} 
                className="text-sm text-gray-400 hover:text-white"
                target={(link as any).external ? "_blank" : undefined}
                rel={(link as any).external ? "noopener noreferrer" : undefined}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children, external = false }: { href: string; children: React.ReactNode; external?: boolean }) {
  return (
    <li>
      <Link 
        href={href} 
        className="text-gray-400 hover:text-white transition-colors"
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
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
