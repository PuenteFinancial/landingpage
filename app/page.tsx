import AnnounceBanner from '@/components/AnnounceBanner'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import RemittancesSection from '@/components/RemittancesSection'
import CardSection from '@/components/CardSection'
import WaitlistSection from '@/components/WaitlistSection'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <main>
      <AnnounceBanner />
      <Nav />
      <Hero />
      <RemittancesSection />
      <CardSection />
      <WaitlistSection />
      <Footer />
    </main>
  )
}
