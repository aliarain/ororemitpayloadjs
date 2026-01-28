import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'

import { Hero } from './collections/Hero'
import { KeyFeatures } from './collections/KeyFeatures'
import { FAQs } from './collections/FAQs'
import { WhyChoose } from './collections/WhyChoose'
import { Opportunities } from './collections/Opportunities'
import { SupportedCountries } from './collections/SupportedCountries'
import { ContactSubmissions } from './collections/ContactSubmissions'
import { Media } from './collections/Media'
import { Users } from './collections/Users'

const config = buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Media,
    Hero,
    KeyFeatures,
    FAQs,
    WhyChoose,
    Opportunities,
    SupportedCountries,
    ContactSubmissions,
  ],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(process.cwd(), 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
})

export default config
