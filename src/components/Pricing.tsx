import { useScrollReveal } from '../hooks/useScrollReveal'
import { ArrowRight, Check, Zap } from 'lucide-react'

const included = [
  '21 recipes across 7 days',
  'Organised shopping list',
  'Exact quantities for one',
  'Substitution suggestions',
  'Ingredient reuse guide',
  'Instant PDF download',
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
          <div className="relative overflow-hidden rounded-3xl border-2 border-forest-600 bg-ivory p-8 shadow-xl sm:p-10">
            {/* Accent bar */}
            <div className="absolute right-0 top-0 flex items-center gap-1.5 rounded-bl-2xl bg-forest-600 px-4 py-2">
              <Zap size={14} className="text-lime-accent" />
              <span className="text-xs font-semibold uppercase tracking-wider text-ivory">
                Best value
              </span>
            </div>

            <p className="font-serif text-lg font-medium text-forest-400">
              The 7-Day Student Meal Plan
            </p>

            <div className="mt-4 flex items-end gap-2">
              <span className="font-serif text-6xl font-bold text-forest-700">£3.99</span>
              <span className="mb-2 text-base font-medium text-forest-400">one-off</span>
            </div>

            <p className="mt-3 text-base text-forest-500">
              No subscription. No account. No recurring charges. Pay once, download instantly.
            </p>

            <button
              onClick={goToCheckout}
              className="btn-primary mt-8 w-full text-lg"
            >
              Get my meal plan — £3.99
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
