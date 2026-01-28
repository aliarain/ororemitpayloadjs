'use client'

import { Button } from '@/components/ui/button'

export function OpportunitiesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute right-0 top-1/2 w-96 h-96 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-muted uppercase tracking-wider">OPPORTUNITIES</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mt-4 mb-4">
            What does Oro Remit unlock for you?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            We've helped individuals and businesses send money globally with more speed, zero fees, and complete peace of mind. And we're just getting started.
          </p>
        </div>

        <div className="bg-gradient-to-r from-accent/20 to-accent/10 border border-accent/30 rounded-3xl p-12 md:p-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Money transfers built on trust
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                At Oro Remit, every transfer is backed by secure infrastructure, transparent fees, and lightning-fast processing. Whether you're sending to family or funding a project abroad, we make it seamless. Less waiting. Zero cost. More confidence.
              </p>
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8">
                Get Started
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>
            <div className="bg-accent/20 rounded-2xl h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">💰</div>
                <p className="text-sm text-muted-foreground">Trust-based transfers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
