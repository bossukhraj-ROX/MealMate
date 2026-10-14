import { useScrollReveal } from '../hooks/useScrollReveal'
import { Smartphone, Laptop, Printer } from 'lucide-react'

const contexts = [
  {
    icon: Smartphone,
    title: 'On your phone',
    description: 'Open the guide while shopping to check your list on the go.',
    img: 'https://images.pexels.com/photos/7661069/pexels-photo-7661069.jpeg?auto=compress&cs=tinysrgb&h=500&w=350',
    label: 'Shopping',
  },
  {
    icon: Laptop,
    title: 'On your laptop',
    description: 'Browse recipes and plan your week from a larger screen at home.',
    img: 'https://images.pexels.com/photos/7836577/pexels-photo-7836577.jpeg?auto=compress&cs=tinysrgb&h=500&w=700',
    label: 'Planning',
  },
  {
    icon: Printer,
    title: 'Printed for your kitchen',
    description: 'Pin a printed copy on your fridge or kitchen wall for quick reference.',
    img: 'https://images.pexels.com/photos/35657810/pexels-photo-35657810.jpeg?auto=compress&cs=tinysrgb&h=500&w=700',
    label: 'Cooking',
  },
]

export default function ProductPresentation() {
  const { ref, isVisible } = useScrollReveal()
  return (
    <section className="bg-sage-100 section-padding">
      <div ref={ref} className={`section-container reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="section-label">Designed for real life</p>
          <h2 className="section-heading">Designed to be used, not left unopened.</h2>
          <p className="mt-5 section-body">Keep your meal plan close at hand. Open it on your phone while shopping, view it on your laptop or print it for your kitchen.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {contexts.map((ctx) => (
            <div key={ctx.title} className="card card-hover tilt-card group overflow-hidden">
              <div className="relative h-52 overflow-hidden rounded-t-2xl">
                <img src={ctx.img} alt={ctx.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-600/30 to-transparent" />
                <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-forest-600 backdrop-blur-sm">{ctx.label}</span>
              </div>
              <div className="p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-sage-100 text-forest-500"><ctx.icon size={20} /></div>
                <h3 className="font-serif text-lg font-bold text-forest-600">{ctx.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-grey-green">{ctx.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
