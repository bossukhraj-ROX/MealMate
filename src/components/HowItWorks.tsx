import { useScrollReveal } from '../hooks/useScrollReveal'
import { CalendarDays, ShoppingCart, UtensilsCrossed } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: CalendarDays,
    title: 'Plan your week',
    description: 'Open your meal plan and see every breakfast, lunch and dinner laid out for seven days. No decisions to make, no mental energy spent.',
  },
  {
    number: '02',
    icon: ShoppingCart,
    title: 'Shop once',
    description: 'Take the organised shopping list to any UK supermarket. Every ingredient is listed by aisle with exact quantities. One trip, done.',
  },
  {
    number: '03',
    icon: UtensilsCrossed,
    title: 'Cook with confidence',
    description: 'Follow simple, step-by-step recipes designed for basic kitchens and beginner cooks. Reuse ingredients smartly so nothing goes to waste.',
  },
]

export default function HowItWorks() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="how-it-works" className="bg-ivory py-20 lg:py-28" ref={ref}>
      <div className={`mx-auto max-w-7xl px-6 lg:px-10 reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-forest-400">
            How it works
          </p>
          <h2 className="font-serif text-3xl font-bold leading-tight text-forest-700 sm:text-4xl lg:text-5xl">
            Three steps. One calm week of food.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-16 -z-0 hidden h-0.5 w-full bg-forest-100 md:block" />
              )}

              <div className="relative flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-forest-600 text-ivory shadow-lg transition-transform duration-300 hover:scale-110">
                  <step.icon size={28} />
                </div>
                <span className="mt-5 font-serif text-sm font-semibold uppercase tracking-widest text-lime-accent-dark">
                  {step.number}
                </span>
                <h3 className="mt-2 font-serif text-2xl font-bold text-forest-700">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xs text-base leading-relaxed text-forest-500">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
