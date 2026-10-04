# MEALMATE

A premium student meal-planning brand.

## Project

MEALMATE helps students and young adults plan affordable, practical meals.

## First product

The 7-Day Student Meal Plan.

## Technology

- Frontend: React + TypeScript + Tailwind CSS (Vite)
- Hosting: Vercel
- Payments: Stripe (not yet connected)

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server
npm run build    # build for production
```

## Project structure

```
src/
├── components/      # Navbar, Hero, Problem, HowItWorks, MealPlan,
│                    # WhatsIncluded, ProductPreview, Pricing, FAQ, Footer
├── data/            # Meal plan and FAQ content
├── hooks/           # Scroll reveal animation hook
├── App.tsx          # Root component assembling all sections
├── main.tsx         # Entry point
└── index.css        # Tailwind + global styles
```

## Design system

- **Primary**: Deep forest green (#1B3A2F)
- **Background**: Warm ivory (#FAF8F3)
- **Accent**: Subtle lime/citrus (#C5D86D)
- **Typography**: Fraunces (editorial headings) + Inter (body text)
- **Spacing**: 8px grid system
- **Responsive**: Mobile-first with breakpoints at sm, md, and lg
