'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/ororemit-logo.png" 
              alt="Ororemit Logo" 
              width={120} 
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#home" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              HOME
            </Link>
            <Link href="#why" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              WHY OROREMIT
            </Link>
            <Link href="#features" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              FEATURES
            </Link>
            <Link href="#terms" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              TERMS AND CONDITIONS
            </Link>
            <Link href="/contact" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              CONTACT
            </Link>
          </div>

          {/* Login Button */}
          <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6">
            Login
          </Button>
        </div>
      </div>
    </nav>
  )
}
