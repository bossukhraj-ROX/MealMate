import { useScrollReveal } from '../hooks/useScrollReveal'
import { FileText, Check } from 'lucide-react'

const features = [
  '21 recipes (breakfast, lunch & dinner)',
  'Shopping list by aisle',
  'Quantity calculator for 1–4 people',
  'Substitution guide',
  'Ingredient reuse map',
  'Kitchen essentials checklist',
]

export default function ProductPreview() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="bg-forest-700 py-20 lg:py-28" ref={ref}>
      <div className={`mx-auto max-w-7xl px-6 lg:px-10 reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Product mockup */}
          <div className="relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md">
              {/* PDF mockup */}
              <div className="rounded-2xl bg-ivory p-8 shadow-2xl">
                <div className="mb-6 border-b border-forest-100 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-forest-600 text-xs font-bold text-ivory">
                      M
                    </span>
                    <span className="font-serif text-lg font-bold text-forest-700">MEALMATE</span>
                  </div>
                  <p className="mt-2 text-xs font-medium uppercase tracking-widest text-forest-400">
                    7-Day Student Meal Plan
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Mock day block */}
                  <div className="rounded-lg bg-forest-50 p-4">
                    <p className="font-serif text-sm font-bold text-forest-700">Monday</p>
                    <div className="mt-2 space-y-1.5 text-xs text-forest-500">
                      <p><span className="font-semibold text-forest-400">Breakfast:</span> Overnight oats with banana & honey</p>
                      <p><span className="font-semibold text-forest-400">Lunch:</span> Chicken & avocado wrap</p>
                      <p><span className="font-semibold text-forest-400">Dinner:</span> One-pot tomato pasta with basil</p>
                    </div>
                  </div>
                  <div className="rounded-lg bg-forest-50 p-4">
                    <p className="font-serif text-sm font-bold text-forest-700">Tuesday</p>
                    <div className="mt-2 space-y-1.5 text-xs text-forest-500">
                      <p><span className="font-semibold text-forest-400">Breakfast:</span> Scrambled eggs on toast</p>
                      <p><span className="font-semibold text-forest-400">Lunch:</span> Lentil & vegetable soup with bread</p>
                      <p><span className="font-semibold text-forest-400">Dinner:</span> Veggie stir-fry with rice</p>
                    </div>
                  </div>
                  <div className="h-3 rounded-full bg-forest-100" />
                  <div className="h-3 w-2/3 rounded-full bg-forest-100" />
                </div>
              </div>

              {/* Floating accent */}
              <div className="absolute -right-4 -top-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-lime-accent shadow-xl">
                <FileText size={32} className="text-forest-700" />
              </div>
            </div>
          </div>

          {/* Right: Copy */}
          <div className="order-1 lg:order-2">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-lime-accent">
              The product
            </p>
            <h2 className="font-serif text-3xl font-bold leading-tight text-ivory sm:text-4xl lg:text-5xl">
              A polished PDF you&apos;ll actually use.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-forest-100">
              No app to install, no account to manage. Just a clean, well-designed document you can open on your laptop, print for your fridge, or pull up on your phone in the supermarket.
            </p>

            <ul className="mt-8 space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lime-accent/20">
                    <Check size={14} className="text-lime-accent" />
                  </span>
                  <span className="text-base text-ivory">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
