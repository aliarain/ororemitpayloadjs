'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Footer() {
  return (
    <footer id="contact" className="bg-card border-t border-border relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

      <div className="relative z-10">
        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-accent/30 to-primary/30 border border-accent/30 rounded-3xl p-12 md:p-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Be part of the change
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                From family support to business payments abroad, Oro Remit makes global transfers faster, safer, and more affordable with no hidden fees.
              </p>
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8">
                Get Started
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  O
                </div>
                <span className="text-lg font-bold text-foreground">Oro Remit</span>
              </div>
              <p className="text-muted-foreground">
                Smart, Secure, and Cost-Effective Transfers for Everyone
              </p>
              <div className="flex items-center gap-4 mt-6">
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M16 11.37A4 4 0 1112.63 8" stroke="currentColor" strokeWidth="2" fill="none" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 13.5V20a2 2 0 01-2 2h-4v-6.5M14 7.5V4a2 2 0 012-2h4a2 2 0 012 2v3.5M6 13.5V20a2 2 0 01-2 2H2v-6.5M6 7.5V4a2 2 0 012-2h4a2 2 0 012 2v3.5M2 10h20" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-6 uppercase tracking-wider">Contact Us</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Call Us</p>
                  <a href="tel:+16475588470" className="text-foreground hover:text-accent transition-colors font-medium">
                    +1 647 5588470
                  </a>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <a href="mailto:info@ororemit.ca" className="text-foreground hover:text-accent transition-colors font-medium">
                    info@ororemit.ca
                  </a>
                </div>
              </div>
            </div>

            {/* Newsletter Section */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-6 uppercase tracking-wider">Sign Up for Email Updates</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Sign up with your email address to receive news and updates
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your Email Address"
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                />
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-border pt-8">
            <p className="text-center text-sm text-muted-foreground">
              © CopyRight By OroRemit 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
