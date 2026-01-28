'use client'

import Image from 'next/image'

export function SupportedCountries() {
  const countries = [
    {
      name: 'Philippines',
      image: '/philippines.png',
      currency: 'PHP',
      description: 'Philippine Peso'
    },
    {
      name: 'Australia',
      image: '/australia.png',
      currency: 'AUD',
      description: 'Australian Dollar'
    },
    {
      name: 'Pakistan',
      image: '/pakistan.png',
      currency: 'PKR',
      description: 'Pakistani Rupee'
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Supported Countries & Currencies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Smart, Secure, and Cost Effective Transfers for Everyone
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {countries.map((country) => (
            <div
              key={country.name}
              className="bg-card border border-border rounded-2xl p-8 text-center hover:border-accent transition-colors"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={country.image || "/placeholder.svg"}
                  alt={`${country.name} flag`}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{country.name}</h3>
              <p className="text-sm font-medium text-accent mb-4">{country.currency}</p>
              <p className="text-muted-foreground">{country.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
