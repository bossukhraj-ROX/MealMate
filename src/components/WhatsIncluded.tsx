import { useScrollReveal } from '../hooks/useScrollReveal'
import { BookOpen, ClipboardList, Calculator, RefreshCw, Recycle, UtensilsCrossed } from 'lucide-react'

const items = [
  {
    icon: BookOpen,
    title: '21 Recipes',
    description: 'Breakfast, lunch and dinner ideas across seven days — with simple, step-by-step instructions.',
  },
  {
    icon: ClipboardList,
    title: 'Organised Shopping List',
    description: 'Ingredients grouped by supermarket aisle, so you can shop in one efficient trip.',
  },
  {
    icon: Calculator,
    title: 'Quantity Calculator',
    description: 'Adjust quantities for one to four people with a simple multiplier table.',
  },
  {
    icon: RefreshCw,
    title: 'Substitution Guide',
    description: 'Suggested alternatives for ingredients — vegetarian, dairy-free, gluten-free and more.',
  },
  {
    icon: Recycle,
    title: 'Ingredient Reuse Guide',
    description: 'See where ingredients can be reused across recipes to reduce waste and save money.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Kitchen Essentials Checklist',
    description: 'A practical list of useful kitchen equipment to have on hand.',
  },
]

export default function WhatsIncluded() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="whats-included" className="bg-ivory py-20 lg:py-28" ref={ref}>
      <div className={`mx-auto max-w-7xl px-6 lg:px-10 reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-forest-400">
            What&apos;s included
          </p>
          <h2 className="font-serif text-3xl font-bold leading-tight text-forest-700 sm:text-4xl lg:text-5xl">
            Everything you need for a week of good food.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-forest-100 bg-ivory p-7 transition-all duration-300 hover:border-forest-300 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-forest-50 text-forest-500">
                <item.icon size={24} />
              </div>
              <h3 className="font-serif text-lg font-semibold text-forest-700">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-forest-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
