import { useScrollReveal } from '../hooks/useScrollReveal'
import { ArrowRight } from 'lucide-react'

export default function FinalCTA() {
  const { ref, isVisible } = useScrollReveal()

  const goToCheckout = () => {
    const link = import.meta.env.VITE_STRIPE_PAYMENT_LINK_URL
    if (link) {
      window.location.href = link
    }
  }

  return (
    <section className="bg-forest-700 py-20 lg:py-28" ref={ref}>
      <div className={`mx-auto max-w-3xl px-6 text-center reveal ${isVisible ? 'is-visible' : ''}`}>
        <h2 className="font-serif text-3xl font-bold leading-tight text-ivory sm:text-4xl lg:text-5xl">
          Make your next week of meals easier to organise.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-forest-100">
          Get 21 recipes, an organised shopping list and practical meal-planning guidance for one simple payment.
        </p>
        <div className="mt-8 flex justify-center">
          <button
            onClick={goToCheckout}
            className="btn-primary text-lg"
          >
            Get MealMate — £3.99
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
