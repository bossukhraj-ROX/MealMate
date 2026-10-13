import { useScrollReveal } from '../hooks/useScrollReveal'
import { Sun, Sandwich, Moon, ShoppingCart, RefreshCw, Recycle, Check } from 'lucide-react'

const shoppingAisles = [
  { name: 'Produce', items: ['Spinach', 'Tomatoes', 'Avocado', 'Bananas', 'Sweet potatoes'] },
  { name: 'Bakery', items: ['Wholemeal bread', 'Tortilla wraps'] },
  { name: 'Dairy', items: ['Eggs', 'Greek yoghurt', 'Cheddar cheese'] },
  { name: 'Pantry', items: ['Pasta', 'Rice', 'Lentils', 'Honey', 'Olive oil'] },
]

const substitutions = [
  { original: 'Chicken', alternative: 'Tofu or chickpeas', note: 'For vegetarian versions' },
  { original: 'Cow\'s milk', alternative: 'Oat or soya milk', note: 'For dairy-free diets' },
  { original: 'Regular pasta', alternative: 'Gluten-free pasta', note: 'For gluten-free needs' },
  { original: 'Honey', alternative: 'Maple syrup', note: 'For vegan diets' },
]

const reuseExamples = [
  { ingredient: 'Spinach', usedIn: 'Monday lunch, Tuesday dinner, Friday lunch' },
  { ingredient: 'Eggs', usedIn: 'Tuesday breakfast, Friday dinner, Saturday breakfast' },
  { ingredient: 'Pasta', usedIn: 'Monday dinner, Thursday dinner, Sunday dinner' },
]

const mealTypes = [
  { icon: Sun, label: 'Breakfast' },
  { icon: Sandwich, label: 'Lunch' },
  { icon: Moon, label: 'Dinner' },
] as const

const sampleDay = [
  { meal: 'Overnight oats with banana & honey', time: 'Breakfast' },
  { meal: 'Chicken & avocado wrap', time: 'Lunch' },
  { meal: 'One-pot tomato pasta with basil', time: 'Dinner' },
]

function PlanStage() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div ref={ref} className={`stagger ${isVisible ? 'is-visible' : ''}`}>
      {/* Stage label */}
      <div className="mb-10 flex items-center gap-4">
        <span className="font-serif text-sm font-bold uppercase tracking-widest text-lime-accent-dark">
          01 — Plan
        </span>
        <div className="h-px flex-1 bg-forest-100" />
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h3 className="font-serif text-2xl font-bold text-forest-700 sm:text-3xl">
            21 recipes across breakfast, lunch and dinner.
          </h3>
          <p className="mt-4 text-base leading-relaxed text-forest-500">
            Every meal for seven days, organised in advance. No last-minute decisions — just open the plan and cook.
          </p>

          {/* Sample day card */}
          <div className="mt-8 rounded-2xl border border-forest-100 bg-ivory p-6 shadow-sm">
            <p className="font-serif text-sm font-bold uppercase tracking-wider text-forest-400">
              Monday — Sample
            </p>
            <div className="mt-4 space-y-3">
              {sampleDay.map((item) => {
                const mealType = mealTypes.find((m) => m.label === item.time)
                return (
                  <div key={item.meal} className="flex items-center gap-3">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-forest-50 text-forest-500">
                      {mealType && <mealType.icon size={18} />}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-forest-600">{item.time}</p>
                      <p className="text-sm text-forest-500">{item.meal}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Recipe preview grid */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { img: 'https://images.pexels.com/photos/128865/pexels-photo-128865.jpeg?auto=compress&cs=tinysrgb&h=400&w=400', label: 'Overnight oats' },
            { img: 'https://images.pexels.com/photos/7936680/pexels-photo-7936680.jpeg?auto=compress&cs=tinysrgb&h=400&w=400', label: 'Chicken wrap' },
            { img: 'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&h=400&w=400', label: 'Tomato pasta' },
            { img: 'https://images.pexels.com/photos/4451874/pexels-photo-4451874.jpeg?auto=compress&cs=tinysrgb&h=400&w=400', label: 'Scrambled eggs' },
          ].map((recipe) => (
            <div key={recipe.label} className="group overflow-hidden rounded-2xl shadow-sm">
              <div className="relative h-40 overflow-hidden">
                <img
                  src={recipe.img}
                  alt={recipe.label}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-700/60 to-transparent" />
                <p className="absolute bottom-3 left-3 font-serif text-sm font-semibold text-ivory">
                  {recipe.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ShopStage() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div ref={ref} className={`stagger ${isVisible ? 'is-visible' : ''}`}>
      <div className="mb-10 flex items-center gap-4">
        <span className="font-serif text-sm font-bold uppercase tracking-widest text-lime-accent-dark">
          02 — Shop
        </span>
        <div className="h-px flex-1 bg-forest-100" />
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Shopping list mockup */}
        <div className="order-2 lg:order-1">
          <div className="rounded-2xl border border-forest-100 bg-ivory p-6 shadow-sm">
            <div className="mb-5 flex items-center gap-2 border-b border-forest-100 pb-4">
              <ShoppingCart size={20} className="text-forest-500" />
              <p className="font-serif text-sm font-bold uppercase tracking-wider text-forest-700">
                Shopping List
              </p>
            </div>
            <div className="space-y-5">
              {shoppingAisles.map((aisle) => (
                <div key={aisle.name}>
                  <p className="text-xs font-bold uppercase tracking-wider text-lime-accent-dark">
                    {aisle.name}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {aisle.items.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 rounded-full bg-forest-50 px-3 py-1.5 text-sm text-forest-600"
                      >
                        <Check size={12} className="text-lime-accent-dark" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <h3 className="font-serif text-2xl font-bold text-forest-700 sm:text-3xl">
            Know what you need before you reach the supermarket.
          </h3>
          <p className="mt-4 text-base leading-relaxed text-forest-500">
            Every ingredient from all 21 meals is consolidated into one list, grouped by aisle. Take it on your phone or print it — one trip, nothing forgotten.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-forest-50 text-forest-500">
                <ShoppingCart size={20} />
              </div>
              <div>
                <p className="font-semibold text-forest-700">Grouped by aisle</p>
                <p className="text-sm text-forest-500">Walk the store in order — no backtracking.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-forest-50 text-forest-500">
                <Check size={20} />
              </div>
              <div>
                <p className="font-semibold text-forest-700">Exact quantities</p>
                <p className="text-sm text-forest-500">Buy what you need — no overspending or waste.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PrepareStage() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div ref={ref} className={`stagger ${isVisible ? 'is-visible' : ''}`}>
      <div className="mb-10 flex items-center gap-4">
        <span className="font-serif text-sm font-bold uppercase tracking-widest text-lime-accent-dark">
          03 — Prepare
        </span>
        <div className="h-px flex-1 bg-forest-100" />
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h3 className="font-serif text-2xl font-bold text-forest-700 sm:text-3xl">
            Make more informed use of the ingredients in your plan.
          </h3>
          <p className="mt-4 text-base leading-relaxed text-forest-500">
            Swap ingredients confidently with the substitution guide, and see exactly where each ingredient is reused across the week.
          </p>

          {/* Substitution guide mockup */}
          <div className="mt-8 rounded-2xl border border-forest-100 bg-ivory p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <RefreshCw size={18} className="text-forest-500" />
              <p className="font-serif text-sm font-bold uppercase tracking-wider text-forest-700">
                Substitution Guide
              </p>
            </div>
            <div className="space-y-3">
              {substitutions.map((sub) => (
                <div key={sub.original} className="flex items-center justify-between gap-4 border-b border-forest-50 pb-3 last:border-0 last:pb-0">
                  <div>
                    <p className="text-sm font-semibold text-forest-700">{sub.original}</p>
                    <p className="text-xs text-forest-400">{sub.note}</p>
                  </div>
                  <div className="flex items-center gap-2 text-right">
                    <span className="text-forest-300">→</span>
                    <span className="text-sm font-medium text-forest-600">{sub.alternative}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ingredient reuse mockup */}
        <div>
          <div className="rounded-2xl border border-forest-100 bg-ivory p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <Recycle size={18} className="text-forest-500" />
              <p className="font-serif text-sm font-bold uppercase tracking-wider text-forest-700">
                Ingredient Reuse Map
              </p>
            </div>
            <div className="space-y-4">
              {reuseExamples.map((item) => (
                <div key={item.ingredient} className="rounded-xl bg-forest-50 p-4">
                  <p className="font-serif text-sm font-bold text-forest-700">{item.ingredient}</p>
                  <p className="mt-1 text-xs text-forest-500">{item.usedIn}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-forest-400">
              See where every ingredient appears across the week, so nothing goes to waste.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProductShowcase() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="showcase" className="bg-ivory py-20 lg:py-28">
      <div className={`mx-auto max-w-6xl px-6 lg:px-10 reveal ${isVisible ? 'is-visible' : ''}`} ref={ref}>
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-forest-400">
            The product
          </p>
          <h2 className="font-serif text-3xl font-bold leading-tight text-forest-700 sm:text-4xl lg:text-5xl">
            Your week, thoughtfully organised.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-forest-500">
            Three stages — plan, shop, prepare — all in one practical guide.
          </p>
        </div>

        <div className="space-y-24 lg:space-y-32">
          <PlanStage />
          <ShopStage />
          <PrepareStage />
        </div>
      </div>
    </section>
  )
}
