"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
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
import { Menu, X, ChevronDown } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full py-4 px-6 md:px-10 flex items-center justify-between z-50 relative bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <Link href="/" className="flex items-center">
        <div className="h-8 w-auto md:h-10 relative">
          <Image
            src="/images/logo.svg"
            alt="Publica.la Logo"
            width={40}
            height={40}
            className="w-full h-full object-contain"
          />
        </div>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-base">Solutions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[600px] lg:grid-cols-2">
                  <li className="row-span-5">
                    <div className="flex h-full w-full select-none flex-col justify-between rounded-md bg-gradient-to-b from-primary/5 to-primary/10 p-6 pt-5 border-l-4 border-primary">
                      <div className="mb-3">
                        <Image src="/images/logo.svg" alt="Publica.la Logo" width={80} height={80} className="mb-3" />
                      </div>
                      <div>
                        <div className="text-xl font-bold mb-2">Enterprise Publishing Solutions</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Comprehensive digital content management and distribution platform for publishers, bookshops,
                          and content creators of all sizes.
                        </p>
                      </div>
                    </div>
                  </li>
                  <ListItem href="/solutions/publishers" title="For Publishers">
                    Streamline your digital publishing workflow
                  </ListItem>
                  <ListItem href="/solutions/bookshops" title="For Bookshops">
                    Expand your reach with digital offerings
                  </ListItem>
                  <ListItem href="/solutions/content-creators" title="For Content Creators">
                    Focus on content while we handle distribution
                  </ListItem>
                  <ListItem href="/solutions/libraries" title="For Libraries">
                    Digital solutions for modern libraries
                  </ListItem>
                  <ListItem href="/solutions/magazines-newspapers" title="For Magazines & Newspapers">
                    Streamline your digital publication process
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/pricing" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle() + " text-base"}>Pricing</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a
                href="https://docs.publica.la/"
                target="_blank"
                rel="noopener noreferrer"
                className={navigationMenuTriggerStyle() + " text-base"}
              >
                Developers
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about-us" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle() + " text-base"}>
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/case-studies" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle() + " text-base"}>
                  Case Studies
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-3">
          <Button variant="outline" asChild size="sm" className="rounded-md font-medium">
            <Link href="/login">Log In</Link>
          </Button>
          <Button asChild size="sm" className="rounded-md font-medium">
            <a href="https://app.publica.la/platform/sign-up/register/" target="_blank" rel="noopener noreferrer">
              Start Now
            </a>
          </Button>
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
                <Link href="/solutions" className="font-medium">
                  Solutions
                </Link>
                <ChevronDown size={16} />
              </div>
              <div className="pl-4 py-2 space-y-2 text-sm">
                <Link href="/solutions/publishers" className="block py-1">
                  For Publishers
                </Link>
                <Link href="/solutions/bookshops" className="block py-1">
                  For Bookshops
                </Link>
                <Link href="/solutions/content-creators" className="block py-1">
                  For Content Creators
                </Link>
                <Link href="/solutions/libraries" className="block py-1">
                  For Libraries
                </Link>
                <Link href="/solutions/magazines-newspapers" className="block py-1">
                  For Magazines & Newspapers
                </Link>
              </div>
            </div>
            <Link href="/pricing" className="font-medium">
              Pricing
            </Link>
            <a href="https://docs.publica.la/" target="_blank" rel="noopener noreferrer" className="font-medium">
              Developers
            </a>
            <Link href="/about-us" className="font-medium">
              About Us
            </Link>
            <Link href="/case-studies" className="font-medium">
              Case Studies
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="outline" asChild size="sm" className="rounded-md w-full">
                <Link href="/login">Log In</Link>
              </Button>
              <Button asChild size="sm" className="rounded-md w-full">
                <a href="https://app.publica.la/platform/sign-up/register/" target="_blank" rel="noopener noreferrer">
                  Start Now
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
