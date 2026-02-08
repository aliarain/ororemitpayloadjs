/**
 * Seed Payload CMS with the same content as the current site.
 * Run after starting the app and creating your first admin user.
 *
 * Usage: pnpm run seed
 * (Ensure .env has DATABASE_URI and PAYLOAD_SECRET set, and MongoDB is running.)
 */

import 'dotenv/config'
import { getPayload } from 'payload'
import config from '../payload.config'

async function seed() {
  const payload = await getPayload({ config })

  console.log('Seeding Payload CMS with current site content...\n')

  // Hero – single document
  const existingHero = await payload.find({ collection: 'hero', limit: 1 })
  if (existingHero.docs.length === 0) {
    await payload.create({
      collection: 'hero',
      data: {
        welcomeText: 'Welcome to Oro Remit',
        title: 'Fast, Affordable International Money Transfers',
        description: 'Send money to listed countries with zero fees and great exchange rates 100% online.',
        buttonText: 'Get Started Today',
        buttonLink: '#',
      },
    })
    console.log('✓ Hero created')
  } else {
    console.log('- Hero already exists, skipping')
  }

  // Key Features – single document
  const existingFeatures = await payload.find({ collection: 'key-features', limit: 1 })
  if (existingFeatures.docs.length === 0) {
    await payload.create({
      collection: 'key-features',
      data: {
        subtitle: 'Our Key Features',
        title: 'Built for speed, security, and simplicity',
        description: 'Get the most out of every dollar. Oro Remit offers transparent, up-to-the-minute rates so you always know what your recipient will receive no surprises.',
        securityTitle: 'Security',
        securityDescription: 'Your personal data and funds are protected with industry-standard encryption and secure processing backed by compliance regulations.',
        quickEasyTitle: 'Quick & Easy',
        quickEasyDescription: 'Send money in just a few taps',
      },
    })
    console.log('✓ Key Features created')
  } else {
    console.log('- Key Features already exists, skipping')
  }

  // FAQs – multiple documents
  const existingFaqs = await payload.find({ collection: 'faqs', limit: 1 })
  if (existingFaqs.docs.length === 0) {
    const faqs = [
      { question: 'Is Oro Remit a registered company?', answer: 'Yes. Oro Remit is a registered and fully compliant money transfer service.', order: 0 },
      { question: 'How long does it take to send money?', answer: 'Most transfers are processed and delivered within 1 to 3 business days, depending on the destination and bank processing times.', order: 1 },
      { question: 'What countries can I send money to?', answer: "You can send money to a growing list of countries, including the Philippines and China. We're continuously adding new destinations.", order: 2 },
      { question: 'How much are the fees?', answer: "Our fees are Zero and transparent no hidden charges. You'll always see the total cost and the exact amount the recipient will receive before you confirm the transfer.", order: 3 },
      { question: 'What payment methods do you accept?', answer: 'We currently accept payments via Interac e-Transfer, Debit Card, and Credit Card. More options coming soon.', order: 4 },
    ]
    for (const faq of faqs) {
      await payload.create({ collection: 'faqs', data: faq })
    }
    console.log('✓ FAQs created (5 items)')
  } else {
    console.log('- FAQs already exist, skipping')
  }

  // Why Choose – single document
  const existingWhy = await payload.find({ collection: 'why-choose', limit: 1 })
  if (existingWhy.docs.length === 0) {
    await payload.create({
      collection: 'why-choose',
      data: {
        subtitle: 'Smart, Secure, and Cost Effective Transfers for Everyone',
        title: 'Why Choose Oro Remit?',
        description: "At Oro Remit, we don't just move money we move trust, speed, and value. Here's why thousands of choose us to send funds worldwide:",
        zeroFeesTitle: 'Zero Fees & Fair Exchange Rates',
        zeroFeesDescription: 'We keep our margins transparent and competitive no hidden costs, no inflated exchange rates. Compared to traditional banks, you could save up to 60% per transfer.',
        fastDeliveryTitle: 'Fast Delivery You Can Count On',
        fastDeliveryDescription: "Whether you're supporting family or paying for services, your money gets there fast. Most transfers arrive within 1 to 3 business days, with real-time tracking included.",
        regulatedTitle: 'Fully Regulated',
        regulatedDescription: 'Oro Remit is a registered company, fully compliant with local regulations. Your money is protected by rigorous security and compliance standards.',
      },
    })
    console.log('✓ Why Choose created')
  } else {
    console.log('- Why Choose already exists, skipping')
  }

  // Opportunities – single document
  const existingOpps = await payload.find({ collection: 'opportunities', limit: 1 })
  if (existingOpps.docs.length === 0) {
    await payload.create({
      collection: 'opportunities',
      data: {
        subtitle: 'OPPORTUNITIES',
        title: 'What does Oro Remit unlock for you?',
        description: "We've helped individuals and businesses send money globally with more speed, zero fees, and complete peace of mind. And we're just getting started.",
        contentTitle: 'Money transfers built on trust',
        contentDescription: "At Oro Remit, every transfer is backed by secure infrastructure, transparent fees, and lightning-fast processing. Whether you're sending to family or funding a project abroad, we make it seamless. Less waiting. Zero cost. More confidence.",
        buttonText: 'Get Started',
        buttonLink: '#',
      },
    })
    console.log('✓ Opportunities created')
  } else {
    console.log('- Opportunities already exists, skipping')
  }

  // Supported Countries – 3 documents (using imagePath so flags show from /public)
  const existingCountries = await payload.find({ collection: 'supported-countries', limit: 1 })
  if (existingCountries.docs.length === 0) {
    const countries = [
      { name: 'Philippines', currency: 'PHP', description: 'Philippine Peso', imagePath: '/philippines.png', order: 0 },
      { name: 'Australia', currency: 'AUD', description: 'Australian Dollar', imagePath: '/australia.png', order: 1 },
      { name: 'Pakistan', currency: 'PKR', description: 'Pakistani Rupee', imagePath: '/pakistan.png', order: 2 },
    ]
    for (const country of countries) {
      await payload.create({ collection: 'supported-countries', data: country })
    }
    console.log('✓ Supported Countries created (3 items)')
  } else {
    console.log('- Supported Countries already exist, skipping')
  }

  console.log('\nSeed complete. Your site content in Payload now matches the current site.')
  process.exit(0)
}

seed().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})
