import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import HowItWorks from '@/components/HowItWorks'
import CreditBuilding from '@/components/CreditBuilding'
import EmployerChannel from '@/components/EmployerChannel'
import FounderStory from '@/components/FounderStory'
import FAQ from '@/components/FAQ'
import WaitlistCTA from '@/components/WaitlistCTA'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <main>
      <Nav />
      <Hero />
      <Problem />
      <HowItWorks />
      <CreditBuilding />
      <EmployerChannel />
      <FounderStory />
      <FAQ />
      <WaitlistCTA />
      <Footer />
    </main>
  )
}
