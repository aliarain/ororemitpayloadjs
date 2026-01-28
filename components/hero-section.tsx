'use client'

import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-gradient-to-tr from-muted/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-2xl">
          <div className="inline-block mb-6">
            <span className="text-sm font-medium text-accent">Welcome to Oro Remit</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
            Fast, Affordable International Money Transfers
          </h1>

          <p className="text-lg text-muted-foreground mb-8 text-balance">
            Send money to listed countries with <span className="font-semibold text-foreground">zero fees</span> and great exchange rates 100% online.
          </p>

          <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8">
            Get Started Today
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  )
}
