import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { faqs } from '../data/content'
import { Plus, Minus } from 'lucide-react'

export default function FAQ() {
  const { ref, isVisible } = useScrollReveal()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-forest-50 py-20 lg:py-28" ref={ref}>
      <div className={`mx-auto max-w-3xl px-6 lg:px-10 reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-forest-400">
            FAQ
          </p>
          <h2 className="font-serif text-3xl font-bold leading-tight text-forest-700 sm:text-4xl lg:text-5xl">
            Questions, answered.
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              className="overflow-hidden rounded-2xl bg-ivory border border-forest-100 transition-shadow duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-serif text-lg font-semibold text-forest-700">
                  {faq.q}
                </span>
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-forest-50 text-forest-500">
                  {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  openIndex === i
                    ? 'grid-rows-[1fr] opacity-100'
                    : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-base leading-relaxed text-forest-500">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
