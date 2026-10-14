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
    <section id="meal-plan" className="bg-ivory section-padding" ref={ref}>
      <div className={`section-container reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-label">Sample meal plan</p>
          <h2 className="section-heading">A week of real, doable meals.</h2>
          <p className="mt-4 section-body">Here&apos;s a taste of what&apos;s inside. Tap a day to see what&apos;s on the menu.</p>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-2 sm:gap-3">
          {mealPlan.map((d, i) => (
            <button key={d.day} onClick={() => setSelectedDay(i)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                selectedDay === i ? 'bg-forest-600 text-ivory shadow-md' : 'bg-sage-100 text-forest-600 hover:bg-sage-200'
              }`}>
              {d.day}
            </button>
          ))}
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {mealTypes.map((meal) => {
            const mealName = day[meal.key as keyof typeof day].replace(/^(?:breakfast|lunch|dinner)/, '')
            const imgKey = `${meal.key}Img` as keyof typeof day
            return (
              <div key={meal.key} className="card card-hover group overflow-hidden">
                <div className="relative h-52 overflow-hidden rounded-t-2xl">
                  <img src={day[imgKey] as string} alt={mealName} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-600/40 to-transparent" />
                  <div className="absolute bottom-3 left-4 flex items-center gap-2 text-ivory">
                    <meal.icon size={18} className="text-lime-accent" />
                    <span className="text-sm font-semibold uppercase tracking-wider">{meal.label}</span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="font-serif text-lg font-medium text-forest-600">{mealName}</p>
                </div>
              </div>
            )
          })}
        </div>
        <p className="mt-8 text-center text-sm text-grey-green">This is a sample. The full plan includes recipes, quantities and substitutions for every meal.</p>
      </div>
    </section>
  )
}
