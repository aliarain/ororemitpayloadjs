import type { CollectionConfig } from 'payload'

export const SupportedCountries: CollectionConfig = {
  slug: 'supported-countries',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'imagePath',
      type: 'text',
      admin: { description: 'Fallback path from /public (e.g. /philippines.png) if no image uploaded.' },
    },
    {
      name: 'currency',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      required: true,
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
    },
  ],
  defaultSort: 'order',
}
