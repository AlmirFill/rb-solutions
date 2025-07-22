import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Materials from './components/Materials'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import Carousel from './components/Carousel'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <Header />
      <Hero />
      <Features />
      <Materials />
      <Benefits />
      <Testimonials />
      <Carousel />
      <CTA />
      <Footer />
    </main>
  )
}
