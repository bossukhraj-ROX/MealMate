import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  const goToCheckout = () => {
    const link = import.meta.env.VITE_STRIPE_PAYMENT_LINK_URL
    if (link) {
      window.location.href = link
    }
  }

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="top" className="relative overflow-hidden bg-forest-800 pt-28 pb-20 lg:pt-36 lg:pb-32">
      {/* Cinematic background image with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920"
          alt=""
          className="h-full w-full object-cover opacity-25"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-800/80 via-forest-800/70 to-forest-800/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-800/90 to-transparent" />
      </div>

      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-1/4 right-0 z-0 h-[400px] w-[400px] rounded-full bg-lime-accent/8 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
        {/* Left: Copy with staggered entrance */}
        <div>
          <div className="hero-enter hero-enter-delay-1 mb-6 inline-flex items-center gap-2 rounded-full bg-forest-600/40 px-4 py-2 backdrop-blur-sm border border-forest-400/20">
            <Sparkles size={16} className="text-lime-accent" />
            <span className="text-sm font-medium text-forest-100">
              The 7-Day Student Meal Plan
            </span>
          </div>

          <h1 className="hero-enter hero-enter-delay-2 font-serif text-4xl font-bold leading-[1.08] text-ivory sm:text-5xl lg:text-6xl">
            Eating well shouldn&apos;t be this difficult.
          </h1>

          <p className="hero-enter hero-enter-delay-3 mt-6 max-w-xl text-lg leading-relaxed text-forest-100/80 sm:text-xl">
            Seven days of simple meals, 21 recipes and one organised shopping list. Plan your meals, organise your ingredients and make student cooking simpler.
          </p>

          <div className="hero-enter hero-enter-delay-4 mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button
              onClick={goToCheckout}
              className="btn-primary-dark btn-glow text-lg"
            >
              Get MealMate — £3.99
              <ArrowRight size={20} />
            </button>
            <button
              onClick={() => scrollTo('#showcase')}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-forest-100/30 px-8 py-4 text-base font-semibold text-ivory transition-all duration-300 hover:border-lime-accent hover:text-lime-accent"
            >
              Explore the Meal Plan
            </button>
          </div>

          <div className="hero-enter hero-enter-delay-4 mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-forest-100/60">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-accent" />
              One-off payment
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-accent" />
              Instant download
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-accent" />
              No subscription
            </span>
          </div>
        </div>

        {/* Right: Editorial image composition */}
        <div className="hero-enter hero-enter-delay-3 relative hidden lg:block">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-forest-400/15">
            <img
              src="https://images.pexels.com/photos/4781419/pexels-photo-4781419.jpeg?auto=compress&cs=tinysrgb&h=900&w=700"
              alt="Student cooking fresh ingredients in a sunlit kitchen"
              className="h-[560px] w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-800/50 to-transparent" />
          </div>

          {/* Floating price badge */}
          <div className="absolute -bottom-5 -left-5 rounded-2xl bg-forest-600 px-6 py-4 text-ivory shadow-xl ring-1 ring-lime-accent/20">
            <p className="font-serif text-3xl font-bold leading-none">£3.99</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-lime-accent">
              One-off payment
            </p>
          </div>

          {/* Floating recipe count */}
          <div className="absolute -top-4 -right-3 rounded-2xl bg-ivory/95 px-5 py-3 shadow-xl backdrop-blur-sm">
            <p className="font-serif text-2xl font-bold leading-none text-forest-600">21</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-forest-400">
              Recipes
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-enter hero-enter-delay-4 relative z-10 mt-12 flex justify-center lg:mt-16">
        <div className="flex flex-col items-center gap-2 text-forest-100/40">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="h-10 w-px bg-gradient-to-b from-forest-100/40 to-transparent" />
        </div>
      </div>
    </section>
  )
}
