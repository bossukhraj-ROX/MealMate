import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Sun, Sandwich, Moon, ShoppingCart, RefreshCw, Recycle, Check, Users } from 'lucide-react'

const shoppingAisles = [
  { name: 'Produce', items: ['Spinach', 'Tomatoes', 'Avocado', 'Bananas', 'Sweet potatoes'] },
  { name: 'Bakery', items: ['Wholemeal bread', 'Tortilla wraps'] },
  { name: 'Dairy', items: ['Eggs', 'Greek yoghurt', 'Cheddar cheese'] },
  { name: 'Pantry', items: ['Pasta', 'Rice', 'Lentils', 'Honey', 'Olive oil'] },
]

const substitutions = [
  { original: 'Chicken', alternative: 'Tofu or chickpeas', note: 'For vegetarian versions' },
  { original: "Cow's milk", alternative: 'Oat or soya milk', note: 'For dairy-free diets' },
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

const recipeLabels = [
  { img: 'https://images.pexels.com/photos/128865/pexels-photo-128865.jpeg?auto=compress&cs=tinysrgb&h=400&w=400', label: 'Overnight oats' },
  { img: 'https://images.pexels.com/photos/7936680/pexels-photo-7936680.jpeg?auto=compress&cs=tinysrgb&h=400&w=400', label: 'Chicken wrap' },
  { img: 'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&h=400&w=400', label: 'Tomato pasta' },
  { img: 'https://images.pexels.com/photos/4451874/pexels-photo-4451874.jpeg?auto=compress&cs=tinysrgb&h=400&w=400', label: 'Scrambled eggs' },
]

function PlanStage() {
  const { ref, isVisible } = useScrollReveal()
  return (
    <div ref={ref} className={`stagger ${isVisible ? 'is-visible' : ''}`}>
      <div className="mb-10 flex items-center gap-4">
        <span className="font-serif text-sm font-bold uppercase tracking-widest text-lime-accent-dark">01 — Plan</span>
        <div className="h-px flex-1 bg-border-warm" />
      </div>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h3 className="font-serif text-2xl font-bold text-forest-600 sm:text-3xl">21 recipes across breakfast, lunch and dinner.</h3>
          <p className="mt-4 text-base leading-relaxed text-grey-green">Every meal for seven days, organised in advance. No last-minute decisions — just open the plan and cook.</p>
          <div className="card mt-8 p-6">
            <p className="font-serif text-sm font-bold uppercase tracking-wider text-grey-green">Monday — Sample</p>
            <div className="mt-4 space-y-3">
              {sampleDay.map((item) => {
                const mealType = mealTypes.find((m) => m.label === item.time)
                return (
                  <div key={item.meal} className="flex items-center gap-3">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-sage-100 text-forest-500">
                      {mealType && <mealType.icon size={18} />}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-forest-600">{item.time}</p>
                      <p className="text-sm text-grey-green">{item.meal}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {recipeLabels.map((recipe) => (
            <div key={recipe.label} className="card card-hover tilt-card overflow-hidden">
              <div className="relative h-40 overflow-hidden rounded-2xl">
                <img src={recipe.img} alt={recipe.label} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-700/70 to-transparent" />
                <p className="absolute bottom-3 left-3 font-serif text-sm font-semibold text-ivory">{recipe.label}</p>
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
        <span className="font-serif text-sm font-bold uppercase tracking-widest text-lime-accent-dark">02 — Shop</span>
        <div className="h-px flex-1 bg-border-warm" />
      </div>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <div className="card p-6">
            <div className="mb-5 flex items-center gap-2 border-b border-border-warm pb-4">
              <ShoppingCart size={20} className="text-forest-500" />
              <p className="font-serif text-sm font-bold uppercase tracking-wider text-forest-600">Shopping List</p>
            </div>
            <div className="space-y-5">
              {shoppingAisles.map((aisle) => (
                <div key={aisle.name}>
                  <p className="text-xs font-bold uppercase tracking-wider text-lime-accent-dark">{aisle.name}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {aisle.items.map((item) => (
                      <span key={item} className="inline-flex items-center gap-1.5 rounded-full bg-sage-100 px-3 py-1.5 text-sm text-forest-600">
                        <Check size={12} className="text-lime-accent-dark" />{item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <h3 className="font-serif text-2xl font-bold text-forest-600 sm:text-3xl">Know what you need before you reach the supermarket.</h3>
          <p className="mt-4 text-base leading-relaxed text-grey-green">Every ingredient from all 21 meals is consolidated into one list, grouped by aisle. Take it on your phone or print it — one trip, nothing forgotten.</p>
          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3">
              <div className="icon-badge flex-shrink-0"><ShoppingCart size={20} /></div>
              <div><p className="font-semibold text-forest-600">Grouped by aisle</p><p className="text-sm text-grey-green">Walk the store in order — no backtracking.</p></div>
            </div>
            <div className="flex items-start gap-3">
              <div className="icon-badge flex-shrink-0"><Check size={20} /></div>
              <div><p className="font-semibold text-forest-600">Exact quantities</p><p className="text-sm text-grey-green">Buy what you need — no overspending or waste.</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PrepareStage() {
  const { ref, isVisible } = useScrollReveal()
  const [people, setPeople] = useState(1)
  const quantities = {
    pasta: `${100 * people}g`,
    eggs: people === 1 ? '2' : `${2 * people}`,
    spinach: `${50 * people}g`,
    sauce: `${3 * people} tbsp`,
  }

  return (
    <div ref={ref} className={`stagger ${isVisible ? 'is-visible' : ''}`}>
      <div className="mb-10 flex items-center gap-4">
        <span className="font-serif text-sm font-bold uppercase tracking-widest text-lime-accent-dark">03 — Prepare</span>
        <div className="h-px flex-1 bg-border-warm" />
      </div>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h3 className="font-serif text-2xl font-bold text-forest-600 sm:text-3xl">Make more informed use of the ingredients in your plan.</h3>
          <p className="mt-4 text-base leading-relaxed text-grey-green">Swap ingredients confidently with the substitution guide, and see exactly where each ingredient is reused across the week.</p>

          <div className="card mt-8 p-6">
            <div className="mb-4 flex items-center gap-2">
              <Users size={18} className="text-forest-500" />
              <p className="font-serif text-sm font-bold uppercase tracking-wider text-forest-600">Quantity Calculator</p>
            </div>
            <p className="mb-4 text-xs text-grey-green">One-pot tomato pasta with basil</p>
            <div className="mb-5 flex gap-2">
              {[1, 2, 3, 4].map((n) => (
                <button key={n} onClick={() => setPeople(n)}
                  className={`flex h-11 w-11 items-center justify-center rounded-xl text-sm font-bold transition-all duration-300 ${
                    people === n ? 'bg-forest-600 text-ivory shadow-md' : 'bg-sage-100 text-forest-600 hover:bg-sage-200'
                  }`}>
                  {n}
                </button>
              ))}
            </div>
            <div className="space-y-2.5">
              {Object.entries(quantities).map(([key, val]) => (
                <div key={key} className="flex items-center justify-between border-b border-border-warm pb-2.5 last:border-0 last:pb-0">
                  <span className="text-sm font-medium capitalize text-charcoal">{key}</span>
                  <span className="text-sm font-semibold text-forest-600 transition-all duration-200">{val}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-grey-green">Tap a number to scale the recipe. The full plan calculates quantities for every meal this way.</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="card p-6">
            <div className="mb-4 flex items-center gap-2">
              <RefreshCw size={18} className="text-forest-500" />
              <p className="font-serif text-sm font-bold uppercase tracking-wider text-forest-600">Substitution Guide</p>
            </div>
            <div className="space-y-3">
              {substitutions.map((sub) => (
                <div key={sub.original} className="flex items-center justify-between gap-4 border-b border-border-warm pb-3 last:border-0 last:pb-0">
                  <div><p className="text-sm font-semibold text-charcoal">{sub.original}</p><p className="text-xs text-grey-green">{sub.note}</p></div>
                  <div className="flex items-center gap-2 text-right"><span className="text-grey-green/50">→</span><span className="text-sm font-medium text-forest-600">{sub.alternative}</span></div>
                </div>
              ))}
            </div>
          </div>
          <div className="card p-6">
            <div className="mb-4 flex items-center gap-2">
              <Recycle size={18} className="text-forest-500" />
              <p className="font-serif text-sm font-bold uppercase tracking-wider text-forest-600">Ingredient Reuse Map</p>
            </div>
            <div className="space-y-3">
              {reuseExamples.map((item) => (
                <div key={item.ingredient} className="rounded-xl bg-sage-100 p-4">
                  <p className="font-serif text-sm font-bold text-forest-600">{item.ingredient}</p>
                  <p className="mt-1 text-xs text-grey-green">{item.usedIn}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProductShowcase() {
  const { ref, isVisible } = useScrollReveal()
  return (
    <section id="showcase" className="bg-ivory section-padding">
      <div ref={ref} className={`section-container reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <p className="section-label">The product</p>
          <h2 className="section-heading">Your week, thoughtfully organised.</h2>
          <p className="mt-5 section-body">Three stages — plan, shop, prepare — all in one practical guide.</p>
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
