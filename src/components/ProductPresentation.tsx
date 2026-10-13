import { useScrollReveal } from '../hooks/useScrollReveal'
import { CreditCard, Smartphone, BookMarked } from 'lucide-react'

const benefits = [
  {
    icon: CreditCard,
    title: 'One payment. No subscription.',
    description: 'Pay £3.99 once and the plan is yours. No account, no recurring charge, nothing to cancel.',
  },
  {
    icon: Smartphone,
    title: 'Ready for real life.',
    description: 'Open it on your phone while shopping, view it on your laptop or print it for your kitchen.',
  },
  {
    icon: BookMarked,
    title: 'Everything in one organised guide.',
    description: 'Recipes, shopping lists and practical kitchen tools in one place — no jumping between apps.',
  },
]

export default function ProductPresentation() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="bg-forest-700 py-20 lg:py-28" ref={ref}>
      <div className={`mx-auto max-w-4xl px-6 lg:px-10 reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-lime-accent">
            The product
          </p>
          <h2 className="font-serif text-3xl font-bold leading-tight text-ivory sm:text-4xl lg:text-5xl">
            A better-organised week starts here.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-forest-100">
            Your seven-day student meal plan, thoughtfully organised into one practical guide.
          </p>
        </div>

        <div className="mt-16 space-y-10">
          {benefits.map((benefit, i) => (
            <div
              key={benefit.title}
              className={`flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6 ${
                i === 1 ? 'sm:flex-row-reverse sm:text-right' : ''
              }`}
            >
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-lime-accent/15 text-lime-accent sm:mx-auto">
                <benefit.icon size={26} />
              </div>
              <div className={i === 1 ? 'sm:text-right' : ''}>
                <h3 className="font-serif text-xl font-semibold text-ivory">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-forest-100">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
