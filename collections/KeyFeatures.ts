import type { CollectionConfig } from 'payload'

export const KeyFeatures: CollectionConfig = {
  slug: 'key-features',
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
      defaultValue: 'Our Key Features',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Built for speed, security, and simplicity',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      defaultValue: 'Get the most out of every dollar. Oro Remit offers transparent, up-to-the-minute rates so you always know what your recipient will receive no surprises.',
    },
    {
      name: 'securityImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'securityTitle',
      type: 'text',
      defaultValue: 'Security',
    },
    {
      name: 'securityDescription',
      type: 'textarea',
      defaultValue: 'Your personal data and funds are protected with industry-standard encryption and secure processing backed by compliance regulations.',
    },
    {
      name: 'quickEasyTitle',
      type: 'text',
      defaultValue: 'Quick & Easy',
    },
    {
      name: 'quickEasyDescription',
      type: 'textarea',
      defaultValue: 'Send money in just a few taps',
    },
  ],
}
