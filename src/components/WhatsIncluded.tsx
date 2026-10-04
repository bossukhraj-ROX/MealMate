import { useScrollReveal } from '../hooks/useScrollReveal'
import { BookOpen, Scale, ClipboardList, Recycle, RefreshCw, Download } from 'lucide-react'

const items = [
  {
    icon: BookOpen,
    title: 'Simple recipes',
    description: 'Step-by-step instructions for 21 meals, using techniques any beginner can follow.',
  },
  {
    icon: Scale,
    title: 'Exact quantities',
    description: 'Every ingredient measured for one person, so you buy what you need and cook what you\'ll eat.',
  },
  {
    icon: ClipboardList,
    title: 'Organised shopping list',
    description: 'One consolidated list grouped by supermarket aisle. One trip, nothing forgotten.',
  },
  {
    icon: Recycle,
    title: 'Ingredient reuse',
    description: 'Meals are designed so ingredients carry across days. That bag of spinach gets used — all of it.',
  },
  {
    icon: RefreshCw,
    title: 'Substitution suggestions',
    description: 'Vegetarian, dairy-free, gluten-free or nut-free — common swaps are flagged for every relevant meal.',
  },
  {
    icon: Download,
    title: 'Instant download',
    description: 'A beautifully formatted PDF you can view on any device, print, or keep on your phone.',
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
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-forest-50 text-forest-500 transition-colors duration-300 group-hover:bg-forest-600 group-hover:text-ivory">
                <item.icon size={24} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-forest-700">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-forest-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
