import { useState, useEffect } from 'react'
import { Menu, X, Leaf } from 'lucide-react'

const navLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: "What's included", href: '#whats-included' },
  { label: 'Meal plan', href: '#meal-plan' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const goToCheckout = () => {
    setMobileOpen(false)
    const link = import.meta.env.VITE_STRIPE_PAYMENT_LINK_URL
    if (link) {
      window.location.href = link
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ivory/95 backdrop-blur-md shadow-sm border-b border-forest-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('#top')
          }}
          className="flex items-center gap-2"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest-600 text-ivory">
            <Leaf size={18} />
          </span>
          <span className="font-serif text-2xl font-bold tracking-tight text-forest-600">
            MEALMATE
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-forest-700 transition-colors hover:text-forest-400"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={goToCheckout}
            className="rounded-full bg-forest-600 px-6 py-2.5 text-sm font-semibold text-ivory transition-all duration-300 hover:bg-forest-500 hover:shadow-lg"
          >
            Buy now — £3.99
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full text-forest-600 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute left-0 right-0 top-full bg-ivory border-b border-forest-100 shadow-lg lg:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="py-3 text-left text-base font-medium text-forest-700 transition-colors hover:text-forest-400"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={goToCheckout}
              className="mt-2 rounded-full bg-forest-600 px-6 py-3 text-center text-base font-semibold text-ivory"
            >
              Buy now — £3.99
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
