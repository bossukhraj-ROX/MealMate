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
    <section className="relative overflow-hidden bg-ivory py-20 lg:py-28">
      {/* Cinematic background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/5645095/pexels-photo-5645095.jpeg?auto=compress&cs=tinysrgb&h=800&w=1600"
          alt=""
          className="h-full w-full object-cover opacity-10"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ivory via-ivory/90 to-ivory" />
      </div>

      <div ref={ref} className={`relative z-10 mx-auto max-w-3xl px-6 text-center reveal ${isVisible ? 'is-visible' : ''}`}>
        <h2 className="font-serif text-3xl font-bold leading-tight text-forest-700 sm:text-4xl lg:text-5xl">
          Make your next week of meals easier to organise.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-forest-500">
          Get 21 recipes, an organised shopping list and practical meal-planning guidance for one simple payment.
        </p>
        <div className="mt-8 flex justify-center">
          <button
            onClick={goToCheckout}
            className="btn-primary btn-glow text-lg"
          >
            Get MealMate — £3.99
            <ArrowRight size={20} />
          </button>
        </div>
        <p className="mt-4 text-sm text-forest-400">
          Instant download. No subscription. No account needed.
        </p>
      </div>
    </section>
  )
}
