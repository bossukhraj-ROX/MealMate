import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductPresentation from './components/ProductPresentation'
import HowItWorks from './components/HowItWorks'
import MealPlan from './components/MealPlan'
import WhatsIncluded from './components/WhatsIncluded'
import ProductPreview from './components/ProductPreview'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import SuccessPage from './pages/SuccessPage'

export default function App() {
  const [route, setRoute] = useState(window.location.pathname)

  useEffect(() => {
    const onPop = () => setRoute(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  if (route === '/success') {
    return <SuccessPage />
  }

  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <main>
        <Hero />
        <ProductPresentation />
        <HowItWorks />
        <MealPlan />
        <ProductPreview />
        <WhatsIncluded />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
