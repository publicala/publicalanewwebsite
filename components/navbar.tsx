"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react"
import { CalendlyButton } from "@/components/calendly-button"
import { LanguageSwitcher } from "@/components/language-switcher"

interface NavbarProps {
  dict?: {
    navbar: {
      solutions: {
        title: string
        description: string
        subtitle: string
        links: Array<{
          href: string
          title: string
          description: string
        }>
      }
      pricing: string
      developers: string
      caseStudies: string
      ebooksDepository: string
      startNow: string
    }
  }
  locale?: string
}

// Default English values for backward compatibility
const defaultNavbarDict = {
  navbar: {
    solutions: {
      title: "Solutions",
      description: "Enterprise Publishing Solutions",
      subtitle: "Comprehensive digital content management and distribution platform for publishers, bookshops, and content creators of all sizes.",
      links: [
        {
          href: "/solutions/publishers",
          title: "For Publishers",
          description: "Streamline your digital publishing workflow"
        },
        {
          href: "/solutions/bookshops",
          title: "For Bookshops",
          description: "Expand your reach with digital offerings"
        },
        {
          href: "/solutions/content-creators",
          title: "For Content Creators",
          description: "Focus on content while we handle distribution"
        },
        {
          href: "/solutions/libraries",
          title: "For Libraries",
          description: "Digital solutions for modern libraries"
        },
        {
          href: "/solutions/magazines-newspapers",
          title: "For Magazines & Newspapers",
          description: "Streamline your digital publication process"
        }
      ]
    },
    pricing: "Pricing",
    developers: "Developers",
    caseStudies: "Case Studies",
    ebooksDepository: "Ebooks Depository",
    startNow: "Start Now"
  }
}

export function Navbar({ dict, locale = "en" }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navbarDict = dict || defaultNavbarDict

  // Helper function to add locale to internal links
  const getLocalizedHref = (href: string) => {
    if (href.startsWith('/')) {
      return `/${locale}${href}`
    }
    return href
  }

  return (
    <header className="w-full py-4 px-6 md:px-10 flex items-center justify-between z-50 relative bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <Link href={`/${locale}`} className="flex items-center">
        <div className="h-8 w-auto md:h-10 relative flex items-center">
          <img src="/images/publica-logo-new.svg" alt="Publica.la" className="h-8 md:h-10 w-auto" />
        </div>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-base">{navbarDict.navbar.solutions.title}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[600px] lg:grid-cols-2">
                  <li className="row-span-5">
                    <div className="flex h-full w-full select-none flex-col justify-between rounded-md bg-gradient-to-b from-primary/5 to-primary/10 p-6 pt-5 border-l-4 border-primary">
                      <div className="mb-3">
                        <img src="/images/publica-logo-new.svg" alt="Publica.la" className="h-12 w-auto" />
                      </div>
                      <div>
                        <div className="text-xl font-bold mb-2">{navbarDict.navbar.solutions.description}</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          {navbarDict.navbar.solutions.subtitle}
                        </p>
                      </div>
                    </div>
                  </li>
                  {navbarDict.navbar.solutions.links.map((link, index) => (
                    <ListItem key={index} href={getLocalizedHref(link.href)} title={link.title}>
                      {link.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={getLocalizedHref("/pricing")} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle() + " text-base"}>{navbarDict.navbar.pricing}</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a
                href="https://docs.publica.la/"
                target="_blank"
                rel="noopener noreferrer"
                className={navigationMenuTriggerStyle() + " text-base"}
              >
                {navbarDict.navbar.developers}
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={getLocalizedHref("/case-studies")} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle() + " text-base"}>
                  {navbarDict.navbar.caseStudies}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Button
            variant="outline"
            asChild
            size="sm"
            className="rounded-md font-medium border-primary text-primary hover:bg-primary hover:text-white transition-colors"
          >
            <a
              href="https://ebooksdepository.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              {navbarDict.navbar.ebooksDepository}
              <ExternalLink size={14} />
            </a>
          </Button>
          <CalendlyButton size="sm" className="rounded-md font-medium">
            Get a demo
          </CalendlyButton>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg p-4 md:hidden border-b border-gray-100">
          <nav className="flex flex-col space-y-4">
            <div className="border-b pb-2">
              <div className="flex justify-between items-center py-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Link href={getLocalizedHref("/solutions")} className="font-medium">
                  {navbarDict.navbar.solutions.title}
                </Link>
                <ChevronDown size={16} />
              </div>
              <div className="pl-4 py-2 space-y-2 text-sm">
                {navbarDict.navbar.solutions.links.map((link, index) => (
                  <Link key={index} href={getLocalizedHref(link.href)} className="block py-1">
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
            <Link href={getLocalizedHref("/pricing")} className="font-medium">
              {navbarDict.navbar.pricing}
            </Link>
            <a
              href="https://docs.publica.la/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium"
            >
              {navbarDict.navbar.developers}
            </a>
            <Link href={getLocalizedHref("/case-studies")} className="font-medium">
              {navbarDict.navbar.caseStudies}
            </Link>
            <div className="pt-4 border-t">
              <div className="flex items-center gap-3">
                <LanguageSwitcher />
                <Button
                  variant="outline"
                  asChild
                  size="sm"
                  className="rounded-md font-medium border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <a
                    href="https://ebooksdepository.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    {navbarDict.navbar.ebooksDepository}
                    <ExternalLink size={14} />
                  </a>
                </Button>
                <CalendlyButton size="sm" className="rounded-md font-medium">
                  Get a demo
                </CalendlyButton>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
