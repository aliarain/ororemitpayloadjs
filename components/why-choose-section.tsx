'use client'

export function WhyChooseSection() {
  const features = [
    {
      title: 'Zero Fees & Fair Exchange Rates',
      description: 'We keep our margins transparent and competitive no hidden costs, no inflated exchange rates. Compared to traditional banks, you could save up to 60% per transfer.',
      icon: '💰'
    },
    {
      title: 'Fast Delivery You Can Count On',
      description: 'Whether you\'re supporting family or paying for services, your money gets there fast. Most transfers arrive within 1 to 3 business days, with real-time tracking included.',
      icon: '⚡'
    },
    {
      title: 'Fully Regulated',
      description: 'Oro Remit is a registered company, fully compliant with local regulations. Your money is protected by rigorous security and compliance standards.',
      icon: '✅'
    }
  ]

  return (
    <section id="why" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Orb */}
      <div className="absolute left-0 top-1/2 w-96 h-96 bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-muted mb-2 block">
            Smart, Secure, and Cost Effective Transfers for Everyone
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Why Choose Oro Remit?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            At Oro Remit, we don't just move money we move trust, speed, and value. Here's why thousands of choose us to send funds worldwide:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card/50 border border-border rounded-2xl p-8 hover:border-accent transition-colors"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
