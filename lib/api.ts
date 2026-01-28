import { getPayloadClient } from './payload'

export async function getHero() {
  const payload = await getPayloadClient()
  const hero = await payload.find({
    collection: 'hero',
    limit: 1,
  })
  return hero.docs[0] || null
}

export async function getKeyFeatures() {
  const payload = await getPayloadClient()
  const features = await payload.find({
    collection: 'key-features',
    limit: 1,
  })
  return features.docs[0] || null
}

export async function getFAQs() {
  const payload = await getPayloadClient()
  const faqs = await payload.find({
    collection: 'faqs',
    sort: 'order',
  })
  return faqs.docs || []
}

export async function getWhyChoose() {
  const payload = await getPayloadClient()
  const whyChoose = await payload.find({
    collection: 'why-choose',
    limit: 1,
  })
  return whyChoose.docs[0] || null
}

export async function getOpportunities() {
  const payload = await getPayloadClient()
  const opportunities = await payload.find({
    collection: 'opportunities',
    limit: 1,
  })
  return opportunities.docs[0] || null
}

export async function getSupportedCountries() {
  const payload = await getPayloadClient()
  const countries = await payload.find({
    collection: 'supported-countries',
    sort: 'order',
  })
  return countries.docs || []
}
