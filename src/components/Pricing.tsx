import { useScrollReveal } from '../hooks/useScrollReveal'
import { ArrowRight, Check } from 'lucide-react'

const included = [
  '21 recipes — breakfast, lunch & dinner',
  'Shopping list organised by aisle',
  'Quantity calculator for 1–4 people',
  'Substitution guide',
  'Ingredient reuse guide',
  'Kitchen essentials checklist',
]

export default function Pricing() {
  const { ref, isVisible } = useScrollReveal()

  const goToCheckout = () => {
    const link = import.meta.env.VITE_STRIPE_PAYMENT_LINK_URL
    if (link) {
      window.location.href = link
    }
  }

  return (
    <section id="pricing" className="bg-ivory py-20 lg:py-28" ref={ref}>
      <div className={`mx-auto max-w-7xl px-6 lg:px-10 reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-forest-400">
            Pricing
          </p>
          <h2 className="font-serif text-3xl font-bold leading-tight text-forest-700 sm:text-4xl lg:text-5xl">
            One price. No surprises.
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-lg">
          <div className="overflow-hidden rounded-3xl border-2 border-forest-600 bg-ivory p-8 shadow-xl sm:p-10">
            <p className="font-serif text-lg font-medium text-forest-400">
              The 7-Day Student Meal Plan
            </p>

            <div className="mt-4 flex items-end gap-2">
              <span className="font-serif text-6xl font-bold text-forest-700">£3.99</span>
            </div>

            <p className="mt-2 text-base font-medium text-forest-600">
              One payment. No subscription.
            </p>

            <p className="mt-4 text-base leading-relaxed text-forest-500">
              Seven days of meal ideas, organised shopping and practical kitchen guidance in one convenient plan.
            </p>

            <button
              onClick={goToCheckout}
              className="btn-primary mt-8 w-full text-lg"
            >
              Get My Meal Plan — £3.99
              <ArrowRight size={20} />
            </button>

            <div className="mt-8 border-t border-forest-100 pt-6">
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check size={18} className="mt-0.5 flex-shrink-0 text-lime-accent-dark" />
                    <span className="text-sm text-forest-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
