import type { CollectionConfig } from 'payload'

export const Hero: CollectionConfig = {
  slug: 'hero',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'welcomeText',
      type: 'text',
      defaultValue: 'Welcome to Oro Remit',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Fast, Affordable International Money Transfers',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      defaultValue: 'Send money to listed countries with zero fees and great exchange rates 100% online.',
    },
    {
      name: 'buttonText',
      type: 'text',
      defaultValue: 'Get Started Today',
    },
    {
      name: 'buttonLink',
      type: 'text',
      defaultValue: '#',
    },
  ],
}
