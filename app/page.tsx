import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { SupportedCountries } from '@/components/supported-countries'
import { WhyChooseSection } from '@/components/why-choose-section'
import { KeyFeatures } from '@/components/key-features'
import { OpportunitiesSection } from '@/components/opportunities-section'
import { FAQsSection } from '@/components/faqs-section'
import { Footer } from '@/components/footer'
import {
  getHero,
  getKeyFeatures,
  getFAQs,
  getWhyChoose,
  getOpportunities,
  getSupportedCountries,
} from '@/lib/api'

export default async function Home() {
  const [hero, keyFeatures, faqs, whyChoose, opportunities, countries] = await Promise.all([
    getHero(),
    getKeyFeatures(),
    getFAQs(),
    getWhyChoose(),
    getOpportunities(),
    getSupportedCountries(),
  ])

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection data={hero} />
      <SupportedCountries data={countries} />
      <WhyChooseSection data={whyChoose} />
      <KeyFeatures data={keyFeatures} />
      <OpportunitiesSection data={opportunities} />
      <FAQsSection data={faqs} />
      <Footer />
    </main>
  )
}
