import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { SupportedCountries } from '@/components/supported-countries'
import { WhyChooseSection } from '@/components/why-choose-section'
import { KeyFeatures } from '@/components/key-features'
import { OpportunitiesSection } from '@/components/opportunities-section'
import { FAQsSection } from '@/components/faqs-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SupportedCountries />
      <WhyChooseSection />
      <KeyFeatures />
      <OpportunitiesSection />
      <FAQsSection />
      <Footer />
    </main>
  )
}
