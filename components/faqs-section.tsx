'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function FAQsSection() {
  const faqs = [
    {
      question: 'Is Oro Remit a registered company?',
      answer: 'Yes. Oro Remit is a registered and fully compliant money transfer service.',
    },
    {
      question: 'How long does it take to send money?',
      answer: 'Most transfers are processed and delivered within 1 to 3 business days, depending on the destination and bank processing times.',
    },
    {
      question: 'What countries can I send money to?',
      answer: 'You can send money to a growing list of countries, including the Philippines and China. We\'re continuously adding new destinations.',
    },
    {
      question: 'How much are the fees?',
      answer: 'Our fees are Zero and transparent no hidden charges. You\'ll always see the total cost and the exact amount the recipient will receive before you confirm the transfer.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We currently accept payments via Interac e-Transfer, Debit Card, and Credit Card. More options coming soon.',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            You have questions. We've got answers.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-accent transition-colors"
            >
              <AccordionTrigger className="text-foreground font-semibold text-left hover:text-accent transition-colors py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
