import { useScrollReveal } from '../hooks/useScrollReveal'
import { TrendingUp, Trash2, ChefHat, HelpCircle } from 'lucide-react'

const problems = [
  {
    icon: TrendingUp,
    title: 'Expensive takeaways',
    description: 'Delivery apps drain your budget faster than you realise. A few taps, a few times a week, and your money is gone.',
  },
  {
    icon: Trash2,
    title: 'Wasted ingredients',
    description: 'You buy a bag of spinach for one recipe. Half of it goes slimy in the back of the fridge. Sound familiar?',
  },
  {
    icon: ChefHat,
    title: 'Limited cooking experience',
    description: 'Nobody taught you how to cook. Recipes online assume skills and equipment you don\'t have yet.',
  },
  {
    icon: HelpCircle,
    title: 'Not knowing what to cook',
    description: 'Every evening, the same question. You stare at the cupboard, give up, and reach for your phone.',
  },
]

export default function Problem() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="bg-forest-700 py-20 lg:py-28" ref={ref}>
      <div className={`mx-auto max-w-7xl px-6 lg:px-10 reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-lime-accent">
            The problem
          </p>
          <h2 className="font-serif text-3xl font-bold leading-tight text-ivory sm:text-4xl lg:text-5xl">
            Student cooking is harder than it should be.
          </h2>
          <p className="mt-4 text-lg text-forest-100">
            You want to eat well. You end up spending too much, wasting too much, and thinking about food more than you&apos;d like.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="rounded-2xl bg-forest-800 p-7 transition-all duration-300 hover:bg-forest-600 hover:-translate-y-1"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-lime-accent/20 text-lime-accent">
                <problem.icon size={24} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-ivory">
                {problem.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-forest-100">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
