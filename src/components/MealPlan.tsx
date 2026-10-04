import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { mealPlan } from '../data/content'
import { Sun, Sandwich, Moon } from 'lucide-react'

const mealTypes = [
  { key: 'breakfast', label: 'Breakfast', icon: Sun },
  { key: 'lunch', label: 'Lunch', icon: Sandwich },
  { key: 'dinner', label: 'Dinner', icon: Moon },
] as const

export default function MealPlan() {
  const { ref, isVisible } = useScrollReveal()
  const [selectedDay, setSelectedDay] = useState(0)

  const day = mealPlan[selectedDay]

  return (
    <section id="meal-plan" className="bg-forest-50 py-20 lg:py-28" ref={ref}>
      <div className={`mx-auto max-w-7xl px-6 lg:px-10 reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-forest-400">
            Sample meal plan
          </p>
          <h2 className="font-serif text-3xl font-bold leading-tight text-forest-700 sm:text-4xl lg:text-5xl">
            A week of real, doable meals.
          </h2>
          <p className="mt-4 text-lg text-forest-500">
            Here&apos;s a taste of what&apos;s inside. Tap a day to see what&apos;s on the menu.
          </p>
        </div>

        {/* Day selector */}
        <div className="mt-12 flex flex-wrap justify-center gap-2 sm:gap-3">
          {mealPlan.map((d, i) => (
            <button
              key={d.day}
              onClick={() => setSelectedDay(i)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                selectedDay === i
                  ? 'bg-forest-600 text-ivory shadow-md'
                  : 'bg-ivory text-forest-600 hover:bg-forest-100'
              }`}
            >
              {d.day}
            </button>
          ))}
        </div>

        {/* Meal cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {mealTypes.map((meal) => {
            const mealName = day[meal.key as keyof typeof day].replace(/^(?:breakfast|lunch|dinner)/, '')
            const imgKey = `${meal.key}Img` as keyof typeof day
            return (
              <div
                key={meal.key}
                className="group overflow-hidden rounded-2xl bg-ivory shadow-md transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={day[imgKey] as string}
                    alt={mealName}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-700/60 to-transparent" />
                  <div className="absolute bottom-3 left-4 flex items-center gap-2 text-ivory">
                    <meal.icon size={18} className="text-lime-accent" />
                    <span className="text-sm font-semibold uppercase tracking-wider">
                      {meal.label}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="font-serif text-lg font-medium text-forest-700">
                    {mealName}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <p className="mt-8 text-center text-sm text-forest-400">
          This is a sample. The full plan includes recipes, quantities and substitutions for every meal.
        </p>
      </div>
    </section>
  )
}
