'use client'

import Image from 'next/image'

interface WhyChooseSectionProps {
  data?: {
    subtitle?: string
    title?: string
    description?: string
    zeroFeesTitle?: string
    zeroFeesDescription?: string
    fastDeliveryTitle?: string
    fastDeliveryDescription?: string
    fastDeliveryImage?: any
    regulatedTitle?: string
    regulatedDescription?: string
    regulatedImage?: any
  } | null
}

export function WhyChooseSection({ data }: WhyChooseSectionProps) {
  const subtitle = data?.subtitle || 'Smart, Secure, and Cost Effective Transfers for Everyone'
  const title = data?.title || 'Why Choose Oro Remit?'
  const description = data?.description || 'At Oro Remit, we don\'t just move money we move trust, speed, and value. Here\'s why thousands of choose us to send funds worldwide:'
  const zeroFeesTitle = data?.zeroFeesTitle || 'Zero Fees & Fair Exchange Rates'
  const zeroFeesDescription = data?.zeroFeesDescription || 'We keep our margins transparent and competitive no hidden costs, no inflated exchange rates. Compared to traditional banks, you could save up to 60% per transfer.'
  const fastDeliveryTitle = data?.fastDeliveryTitle || 'Fast Delivery You Can Count On'
  const fastDeliveryDescription = data?.fastDeliveryDescription || 'Whether you\'re supporting family or paying for services, your money gets there fast. Most transfers arrive within 1 to 3 business days, with real-time tracking included.'
  const fastDeliveryImageUrl = data?.fastDeliveryImage?.url || '/fastdelivery.png'
  const regulatedTitle = data?.regulatedTitle || 'Fully Regulated'
  const regulatedDescription = data?.regulatedDescription || 'Oro Remit is a registered company, fully compliant with local regulations. Your money is protected by rigorous security and compliance standards.'
  const regulatedImageUrl = data?.regulatedImage?.url || '/regulated.png'

  return (
    <section id="why" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Orb */}
      <div className="absolute left-0 top-1/2 w-96 h-96 bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-muted mb-2 block">
            {subtitle}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Zero Fees - Full height on left */}
          <div className="bg-card/50 border border-border rounded-2xl p-8 hover:border-accent transition-colors lg:row-span-2">
            <h3 className="text-2xl font-bold text-foreground mb-4">{zeroFeesTitle}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {zeroFeesDescription}
            </p>
          </div>

          {/* Fast Delivery - Top right */}
          <div className="bg-card/50 border border-border rounded-2xl p-8 hover:border-accent transition-colors flex flex-col">
            <h3 className="text-2xl font-bold text-foreground mb-4">{fastDeliveryTitle}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
              {fastDeliveryDescription}
            </p>
            <div className="flex justify-center">
              <Image
                src={fastDeliveryImageUrl}
                alt="Fast delivery illustration"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
          </div>

          {/* Fully Regulated - Bottom right */}
          <div className="bg-card/50 border border-border rounded-2xl p-8 hover:border-accent transition-colors flex flex-col">
            <h3 className="text-2xl font-bold text-foreground mb-4">{regulatedTitle}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
              {regulatedDescription}
            </p>
            <div className="flex justify-center">
              <Image
                src={regulatedImageUrl}
                alt="Regulated illustration"
                width={180}
                height={180}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
