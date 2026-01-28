import type { CollectionConfig } from 'payload'

export const Opportunities: CollectionConfig = {
  slug: 'opportunities',
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
      defaultValue: 'OPPORTUNITIES',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'What does Oro Remit unlock for you?',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      defaultValue: 'We\'ve helped individuals and businesses send money globally with more speed, zero fees, and complete peace of mind. And we\'re just getting started.',
    },
    {
      name: 'contentTitle',
      type: 'text',
      defaultValue: 'Money transfers built on trust',
    },
    {
      name: 'contentDescription',
      type: 'textarea',
      defaultValue: 'At Oro Remit, every transfer is backed by secure infrastructure, transparent fees, and lightning-fast processing. Whether you\'re sending to family or funding a project abroad, we make it seamless. Less waiting. Zero cost. More confidence.',
    },
    {
      name: 'buttonText',
      type: 'text',
      defaultValue: 'Get Started',
    },
    {
      name: 'buttonLink',
      type: 'text',
      defaultValue: '#',
    },
  ],
}
