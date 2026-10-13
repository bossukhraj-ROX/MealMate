import { useScrollReveal } from '../hooks/useScrollReveal'
import { BookOpen, ClipboardList, Calculator, RefreshCw, Recycle, UtensilsCrossed } from 'lucide-react'

const components = [
  {
    icon: BookOpen,
    title: '21 Recipes',
    description: 'Breakfast, lunch and dinner for seven days — with simple, step-by-step instructions for every meal.',
    accent: 'light',
  },
  {
    icon: ClipboardList,
    title: 'Shopping List by Aisle',
    description: 'Every ingredient consolidated and grouped by supermarket aisle for one efficient trip.',
    accent: 'dark',
  },
  {
    icon: Calculator,
    title: 'Quantity Calculator',
    description: 'Scale every recipe from one to four people with a simple multiplier table.',
    accent: 'dark',
  },
  {
    icon: RefreshCw,
    title: 'Substitution Guide',
    description: 'Suggested alternatives for common dietary needs — vegetarian, dairy-free, gluten-free and more.',
    accent: 'light',
  },
  {
    icon: Recycle,
    title: 'Ingredient Reuse Map',
    description: 'See exactly where each ingredient is reused across recipes to cut waste and save money.',
    accent: 'light',
  },
  {
    icon: UtensilsCrossed,
    title: 'Kitchen Essentials Checklist',
    description: 'A practical list of useful kitchen equipment to have on hand before you start cooking.',
    accent: 'dark',
  },
]

export default function WhatsIncluded() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="whats-included" className="bg-ivory py-20 lg:py-28">
      <div ref={ref} className={`mx-auto max-w-5xl px-6 lg:px-10 reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-forest-400">
            What&apos;s included
          </p>
          <h2 className="font-serif text-3xl font-bold leading-tight text-forest-700 sm:text-4xl lg:text-5xl">
            Everything you need in one place.
          </h2>
        </div>

        <div className="space-y-4">
          {components.map((item) => {
            const isDark = item.accent === 'dark'
            return (
              <div
                key={item.title}
                className={`flex items-center gap-5 rounded-2xl p-6 transition-all duration-300 sm:gap-6 sm:p-7 ${
                  isDark
                    ? 'bg-forest-700 hover:bg-forest-600'
                    : 'bg-forest-50 hover:bg-forest-100'
                }`}
              >
                <div
                  className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl transition-colors duration-300 ${
                    isDark
                      ? 'bg-lime-accent/15 text-lime-accent'
                      : 'bg-forest-600 text-ivory'
                  }`}
                >
                  <item.icon size={26} />
                </div>
                <div className="min-w-0">
                  <h3 className={`font-serif text-lg font-bold sm:text-xl ${isDark ? 'text-ivory' : 'text-forest-700'}`}>
                    {item.title}
                  </h3>
                  <p className={`mt-1 text-sm leading-relaxed sm:text-base ${isDark ? 'text-forest-100/80' : 'text-forest-500'}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
