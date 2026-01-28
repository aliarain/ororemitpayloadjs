import type { CollectionConfig } from 'payload'

export const WhyChoose: CollectionConfig = {
  slug: 'why-choose',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'subtitle',
      type: 'text',
      defaultValue: 'Smart, Secure, and Cost Effective Transfers for Everyone',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Why Choose Oro Remit?',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      defaultValue: 'At Oro Remit, we don\'t just move money we move trust, speed, and value. Here\'s why thousands of choose us to send funds worldwide:',
    },
    {
      name: 'zeroFeesTitle',
      type: 'text',
      defaultValue: 'Zero Fees & Fair Exchange Rates',
    },
    {
      name: 'zeroFeesDescription',
      type: 'textarea',
      defaultValue: 'We keep our margins transparent and competitive no hidden costs, no inflated exchange rates. Compared to traditional banks, you could save up to 60% per transfer.',
    },
    {
      name: 'fastDeliveryTitle',
      type: 'text',
      defaultValue: 'Fast Delivery You Can Count On',
    },
    {
      name: 'fastDeliveryDescription',
      type: 'textarea',
      defaultValue: 'Whether you\'re supporting family or paying for services, your money gets there fast. Most transfers arrive within 1 to 3 business days, with real-time tracking included.',
    },
    {
      name: 'fastDeliveryImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'regulatedTitle',
      type: 'text',
      defaultValue: 'Fully Regulated',
    },
    {
      name: 'regulatedDescription',
      type: 'textarea',
      defaultValue: 'Oro Remit is a registered company, fully compliant with local regulations. Your money is protected by rigorous security and compliance standards.',
    },
    {
      name: 'regulatedImage',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
