import { useScrollReveal } from '../hooks/useScrollReveal'
import { BookOpen, ClipboardList, Calculator, RefreshCw, Recycle, UtensilsCrossed } from 'lucide-react'

const components = [
  { icon: BookOpen, title: '21 Recipes', description: 'Breakfast, lunch and dinner for seven days, with simple step-by-step instructions for every meal.' },
  { icon: ClipboardList, title: 'Shopping List by Aisle', description: 'Every ingredient consolidated and grouped by supermarket aisle for one efficient trip.' },
  { icon: Calculator, title: 'Quantity Calculator', description: 'Scale every recipe from one to four people with a simple multiplier table.' },
  { icon: RefreshCw, title: 'Substitution Guide', description: 'Suggested alternatives for common dietary needs — vegetarian, dairy-free, gluten-free and more.' },
  { icon: Recycle, title: 'Ingredient Reuse Map', description: 'See exactly where each ingredient is reused across recipes to cut waste and save money.' },
  { icon: UtensilsCrossed, title: 'Kitchen Essentials Checklist', description: 'A practical list of useful kitchen equipment to have on hand before you start cooking.' },
]

export default function WhatsIncluded() {
  const { ref, isVisible } = useScrollReveal()
  return (
    <section id="whats-included" className="bg-sage-100 section-padding">
      <div ref={ref} className={`section-container reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="mb-16 text-center">
          <p className="section-label">What&apos;s included</p>
          <h2 className="section-heading">Everything you need in one place.</h2>
        </div>
        <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 stagger ${isVisible ? 'is-visible' : ''}`}>
          {components.map((item) => (
            <div key={item.title} className="card card-hover p-7">
              <div className="icon-badge mb-5"><item.icon size={24} /></div>
              <h3 className="font-serif text-lg font-bold text-forest-600">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-grey-green">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
