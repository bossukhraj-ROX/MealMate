import { useScrollReveal } from '../hooks/useScrollReveal'

const previews = [
  {
    img: 'https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'The seven-day meal plan',
    caption: 'See every breakfast, lunch and dinner laid out for the week — so you always know what to cook.',
    badge: 'Meal Plan',
  },
  {
    img: 'https://images.pexels.com/photos/8422682/pexels-photo-8422682.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Shopping list organised by aisle',
    caption: 'Every ingredient consolidated and grouped by supermarket aisle. One trip, nothing forgotten.',
    badge: 'Shopping List',
  },
  {
    img: 'https://images.pexels.com/photos/6287216/pexels-photo-6287216.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Substitution & reuse guides',
    caption: 'Swap ingredients confidently and see where each one is reused across the week to cut waste.',
    badge: 'Guides',
  },
]

export default function ProductPreview() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="product-preview" className="bg-forest-50 py-20 lg:py-28" ref={ref}>
      <div className={`mx-auto max-w-7xl px-6 lg:px-10 reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-forest-400">
            Product preview
          </p>
          <h2 className="font-serif text-3xl font-bold leading-tight text-forest-700 sm:text-4xl lg:text-5xl">
            Here&apos;s what your week could look like.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {previews.map((preview) => (
            <div
              key={preview.title}
              className="group overflow-hidden rounded-2xl bg-ivory shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={preview.img}
                  alt={preview.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-700/50 to-transparent" />
                <span className="absolute top-4 left-4 rounded-full bg-forest-600/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ivory backdrop-blur-sm">
                  {preview.badge}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg font-bold text-forest-700">
                  {preview.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-forest-500">
                  {preview.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-forest-400">
          The full plan includes recipes, quantities and kitchen tools for every meal.
        </p>
      </div>
    </section>
  )
}
