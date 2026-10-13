import { useScrollReveal } from '../hooks/useScrollReveal'
import { Smartphone, Laptop, Printer } from 'lucide-react'

const contexts = [
  {
    icon: Smartphone,
    title: 'On your phone',
    description: 'Open the guide while shopping to check your list on the go.',
    img: 'https://images.pexels.com/photos/7661069/pexels-photo-7661069.jpeg?auto=compress&cs=tinysrgb&h=600&w=400',
    label: 'Shopping',
  },
  {
    icon: Laptop,
    title: 'On your laptop',
    description: 'Browse recipes and plan your week from a larger screen at home.',
    img: 'https://images.pexels.com/photos/7836577/pexels-photo-7836577.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    label: 'Planning',
  },
  {
    icon: Printer,
    title: 'Printed for your kitchen',
    description: 'Pin a printed copy on your fridge or kitchen wall for quick reference.',
    img: 'https://images.pexels.com/photos/35657810/pexels-photo-35657810.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    label: 'Cooking',
  },
]

export default function ProductPresentation() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="bg-forest-700 py-20 lg:py-28">
      <div ref={ref} className={`mx-auto max-w-7xl px-6 lg:px-10 reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-lime-accent">
            Designed for real life
          </p>
          <h2 className="font-serif text-3xl font-bold leading-tight text-ivory sm:text-4xl lg:text-5xl">
            Designed to be used, not left unopened.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-forest-100/80">
            Keep your meal plan close at hand. Open it on your phone while shopping, view it on your laptop or print it for your kitchen.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {contexts.map((ctx) => (
            <div
              key={ctx.title}
              className="group overflow-hidden rounded-2xl bg-forest-800 ring-1 ring-forest-400/15 transition-all duration-300 hover:ring-lime-accent/30 hover:-translate-y-1"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={ctx.img}
                  alt={ctx.title}
                  className="h-full w-full object-cover opacity-70 transition-all duration-500 group-hover:opacity-90 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-800 to-transparent" />
                <span className="absolute top-4 left-4 rounded-full bg-lime-accent/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-forest-700">
                  {ctx.label}
                </span>
              </div>
              <div className="p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-lime-accent/15 text-lime-accent">
                  <ctx.icon size={20} />
                </div>
                <h3 className="font-serif text-lg font-bold text-ivory">
                  {ctx.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-forest-100/70">
                  {ctx.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
