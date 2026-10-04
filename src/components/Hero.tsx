import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  const goToCheckout = () => {
    const link = import.meta.env.VITE_STRIPE_PAYMENT_LINK_URL
    if (link) {
      window.location.href = link
    }
  }
  return (
    <section id="top" className="relative overflow-hidden bg-ivory pt-28 pb-16 lg:pt-40 lg:pb-24">
      {/* Decorative background shapes */}
      <div className="pointer-events-none absolute top-0 right-0 -z-0 h-[500px] w-[500px] rounded-full bg-lime-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 -z-0 h-[300px] w-[300px] rounded-full bg-forest-100/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
        {/* Left: Copy */}
        <div className="animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-forest-50 px-4 py-2">
            <Sparkles size={16} className="text-forest-400" />
            <span className="text-sm font-medium text-forest-600">
              The 7-Day Student Meal Plan
            </span>
          </div>

          <h1 className="font-serif text-4xl font-bold leading-[1.1] text-forest-700 sm:text-5xl lg:text-6xl">
            Eating well shouldn&apos;t be this difficult.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-forest-500 sm:text-xl">
            Seven days of simple meals, one organised shopping list and less money wasted on food.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button
              onClick={goToCheckout}
              className="btn-primary text-lg"
            >
              Get my meal plan — £3.99
              <ArrowRight size={20} />
            </button>
            <a
              href="#how-it-works"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-secondary"
            >
              How it works
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-sm text-forest-400">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-lime-accent-dark" />
              One-off payment
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-lime-accent-dark" />
              Instant download
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-lime-accent-dark" />
              No subscription
            </span>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative animate-fade-in">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200"
              alt="Colourful meal prep containers with fresh vegetables, grains and legumes"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-4 rounded-2xl bg-forest-600 px-6 py-4 text-ivory shadow-xl sm:-left-6">
            <p className="font-serif text-3xl font-bold leading-none">7</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-lime-accent">
              Days of meals
            </p>
          </div>
          {/* Floating badge top-right */}
          <div className="absolute -top-4 -right-2 rounded-2xl bg-ivory px-5 py-3 shadow-xl border border-forest-100 sm:-right-6">
            <p className="font-serif text-2xl font-bold leading-none text-forest-600">£3.99</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-forest-400">
              One-off
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
