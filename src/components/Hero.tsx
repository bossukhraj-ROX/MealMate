import { useRef, useCallback } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = parallaxRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(1000px) rotateY(${x * 6}deg) rotateX(${-y * 4}deg)`
  }, [])

  const handleMouseLeave = useCallback(() => {
    const el = parallaxRef.current
    if (el) el.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)'
  }, [])

  const goToCheckout = () => {
    const link = import.meta.env.VITE_STRIPE_PAYMENT_LINK_URL
    if (link) window.location.href = link
  }

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="top" className="relative overflow-hidden bg-ivory pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="pointer-events-none absolute top-20 right-0 -z-0 h-[500px] w-[500px] rounded-full bg-sage-200/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 -z-0 h-[300px] w-[300px] rounded-full bg-lime-accent/8 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div>
          <div className="hero-enter hero-enter-delay-1 mb-6 inline-flex items-center gap-2 rounded-full bg-sage-100 px-4 py-2 border border-sage-200">
            <Sparkles size={16} className="text-forest-500" />
            <span className="text-sm font-medium text-forest-600">The 7-Day Student Meal Plan</span>
          </div>

          <h1 className="hero-enter hero-enter-delay-2 font-serif text-4xl font-bold leading-[1.1] text-forest-600 sm:text-5xl lg:text-6xl">
            Eating well shouldn&apos;t be this difficult.
          </h1>

          <p className="hero-enter hero-enter-delay-3 mt-6 max-w-xl text-lg leading-relaxed text-grey-green sm:text-xl">
            Seven days of simple meals, 21 recipes and one organised shopping list. Plan your meals, organise your ingredients and make student cooking simpler.
          </p>

          <div className="hero-enter hero-enter-delay-4 mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button onClick={goToCheckout} className="btn-primary btn-glow text-lg">
              Get MealMate — £3.99
              <ArrowRight size={20} />
            </button>
            <button onClick={() => scrollTo('#showcase')} className="btn-secondary">
              Explore the Meal Plan
            </button>
          </div>

          <div className="hero-enter hero-enter-delay-5 mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-grey-green">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-accent" /> One-off payment
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-accent" /> Instant download
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-accent" /> No subscription
            </span>
          </div>
        </div>

        <div className="hero-enter hero-enter-delay-3 relative hidden lg:block" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <div ref={parallaxRef} className="relative" style={{ transformStyle: 'preserve-3d', transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1)' }}>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-border-warm">
              <img
                src="https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&h=800&w=650"
                alt="Fresh meal prep with vegetables, grains and legumes beautifully arranged"
                className="h-[520px] w-full object-cover"
                loading="eager"
              />
            </div>

            <div className="absolute -bottom-5 -left-5 rounded-2xl bg-forest-600 px-6 py-4 text-ivory shadow-xl float-anim" style={{ animationDelay: '0s' }}>
              <p className="font-serif text-3xl font-bold leading-none">£3.99</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-lime-accent">One-off payment</p>
            </div>

            <div className="absolute -top-4 -right-3 rounded-2xl bg-white px-5 py-3 shadow-xl border border-border-warm float-anim" style={{ animationDelay: '2s' }}>
              <p className="font-serif text-2xl font-bold leading-none text-forest-600">21</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-grey-green">Recipes</p>
            </div>

            <div className="absolute -right-8 bottom-16 h-28 w-28 overflow-hidden rounded-2xl shadow-xl ring-2 ring-white float-anim" style={{ animationDelay: '4s' }}>
              <img
                src="https://images.pexels.com/photos/128865/pexels-photo-128865.jpeg?auto=compress&cs=tinysrgb&h=200&w=200"
                alt="Overnight oats"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="hero-enter hero-enter-delay-3 relative lg:hidden">
          <div className="relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-border-warm">
            <img
              src="https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&h=500&w=940"
              alt="Fresh meal prep with vegetables, grains and legumes"
              className="h-72 w-full object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-4 left-4 rounded-2xl bg-forest-600 px-5 py-3 text-ivory shadow-xl">
            <p className="font-serif text-2xl font-bold leading-none">£3.99</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-lime-accent">One-off</p>
          </div>
        </div>
      </div>

      <div className="hero-enter hero-enter-delay-5 relative z-10 mt-12 flex justify-center lg:mt-20">
        <div className="flex flex-col items-center gap-2 text-grey-green/50">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="h-10 w-px bg-gradient-to-b from-grey-green/40 to-transparent" />
        </div>
      </div>
    </section>
  )
}
