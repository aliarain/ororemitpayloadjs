'use client'

import Image from 'next/image'

export function KeyFeatures() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-muted mb-2 block">Our Key Features</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Built for speed, security, and simplicity
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Get the most out of every dollar. Oro Remit offers transparent, up-to-the-minute rates so you always know what your recipient will receive no surprises.
          </p>
        </div>

        <div className="bg-gradient-to-r from-purple-900/30 via-purple-800/30 to-indigo-900/30 rounded-3xl p-12 border border-border relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Shield Image */}
            <div className="flex justify-center">
              <Image
                src="/secrituy.png"
                alt="Security shield"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>

            {/* Right side - Features */}
            <div className="space-y-8">
              {/* Security */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-accent mb-3">Security</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your personal data and funds are protected with industry-standard encryption and secure processing backed by compliance regulations.
                </p>
              </div>

              {/* Quick & Easy */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-accent mb-3">Quick & Easy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Send money in just a few taps
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
