import { Leaf, Mail, Instagram, Twitter } from 'lucide-react'

const footerLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: "What's included", href: '#whats-included' },
  { label: 'Meal plan', href: '#meal-plan' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Buy now', href: '#pricing' },
]

export default function Footer() {
  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-forest-800 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest-600 text-ivory">
                <Leaf size={18} />
              </span>
              <span className="font-serif text-2xl font-bold tracking-tight text-ivory">
                MEALMATE
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-forest-200">
              Eat well. Spend smarter. Think less. The 7-Day Student Meal Plan for university students and young adults.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-sm font-semibold uppercase tracking-widest text-lime-accent">
              Explore
            </h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-forest-200 transition-colors hover:text-ivory"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Social */}
          <div>
            <h4 className="font-serif text-sm font-semibold uppercase tracking-widest text-lime-accent">
              Connect
            </h4>
            <div className="mt-4 flex gap-3">
              <a
                href="mailto:hello@mealmate.co.uk"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-700 text-forest-200 transition-all duration-300 hover:bg-forest-600 hover:text-ivory"
                aria-label="Email MEALMATE"
              >
                <Mail size={18} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-700 text-forest-200 transition-all duration-300 hover:bg-forest-600 hover:text-ivory"
                aria-label="MEALMATE on Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-700 text-forest-200 transition-all duration-300 hover:bg-forest-600 hover:text-ivory"
                aria-label="MEALMATE on Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
            <p className="mt-4 text-xs text-forest-300">
              hello@mealmate.co.uk
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-forest-700 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-xs text-forest-300">
              © {new Date().getFullYear()} MEALMATE. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-xs text-forest-300 transition-colors hover:text-ivory">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-forest-300 transition-colors hover:text-ivory">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
