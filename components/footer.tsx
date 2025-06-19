import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <div className="h-10 w-auto relative">
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
              The most robust and dynamic digital content platform for publishers and content creators, empowering you
              to create, manage, and distribute exceptional content.
            </p>
            <div className="flex gap-4">
              <SocialLink href="#" icon={<Facebook size={18} />} />
              <SocialLink href="#" icon={<Twitter size={18} />} />
              <SocialLink href="#" icon={<Instagram size={18} />} />
              <SocialLink href="#" icon={<Linkedin size={18} />} />
              <SocialLink href="#" icon={<Youtube size={18} />} />
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Solutions</h3>
            <ul className="space-y-2">
              <FooterLink href="/solutions/publishers">For Publishers</FooterLink>
              <FooterLink href="/solutions/bookshops">For Bookshops</FooterLink>
              <FooterLink href="/solutions/content-creators">For Content Creators</FooterLink>
              <FooterLink href="/solutions/libraries">For Libraries</FooterLink>
              <FooterLink href="/solutions/magazines-newspapers">For Magazines & Newspapers</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Features</h3>
            <ul className="space-y-2">
              <FooterLink href="/features/vito-ai">Vito AI</FooterLink>
              <FooterLink href="/features/native-app">Native App</FooterLink>
              <FooterLink href="/features/integrations">Integrations</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <FooterLink href="/about-us">About Us</FooterLink>
              <FooterLink href="/compare">Compare Platforms</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/press">Press</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-4">Stay updated with the latest news and features</p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Your email" className="bg-gray-800 border-gray-700 text-white" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Publica.la. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms" className="text-sm text-gray-400 hover:text-white">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="text-sm text-gray-400 hover:text-white">
              Cookie Policy
            </Link>
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
