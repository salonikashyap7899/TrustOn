# TrustOn — Premium Real Estate Website

## What's Included

This is a full-featured React + Vite website for TrustOn Developers — a luxury real estate developer based in Lucknow, India.

**Pages:**
- Home (hero, plot tracker, wealth planner, services, testimonials, channel partner, contact form)
- About Us (story, mission, vision, team, why Lucknow)
- Services (overview of all 4 services)
- Plot Selling (full content, process steps, FAQs)
- Architecture & Design (full content, process steps, FAQs)
- Construction & Build (full content, process steps, FAQs)
- Investment Consulting (full content, process steps, FAQs)
- Project (Prime Estate portfolio page with gallery)
- FAQ (10 Q&As)
- Contact (full address, contact form)

**Features:**
- Dark luxury theme (charcoal + gold #c9a84c)
- Playfair Display headings + Inter body font
- Framer Motion scroll animations
- Interactive Wealth Planner (3 sliders: investment, duration, growth rate)
- Live Plot Tracker dashboard
- Floating WhatsApp chat button
- Fully responsive (mobile + desktop)
- Lazy-loaded images from the original site
- shadcn/ui components (Accordion, Slider, Input, Textarea, Button)

---

## Tech Stack

- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Routing:** Wouter
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Package Manager:** pnpm

---

## Prerequisites

- Node.js 18+ (recommended: Node 20 or 24)
- pnpm 8+

Install pnpm if you don't have it:
```bash
npm install -g pnpm
```

---

## Setup Instructions

### Option A — Standalone (run just this site)

1. **Extract** the zip / tar.gz file
2. **Navigate** to the project folder:
   ```bash
   cd artifacts/truston
   ```
3. **Install dependencies:**
   ```bash
   pnpm install
   ```
4. **Start the dev server:**
   ```bash
   pnpm dev
   ```
5. Open `http://localhost:5173` in your browser

### Option B — As part of the pnpm monorepo (original Replit setup)

1. **Extract** the zip / tar.gz to the `artifacts/` folder of your monorepo
2. **From the monorepo root**, install all dependencies:
   ```bash
   pnpm install
   ```
3. **Start the TrustOn site:**
   ```bash
   pnpm --filter @workspace/truston run dev
   ```

---

## Environment Variables

No environment variables are required to run this site. All content is static and images are served from the original domain:
`https://truston.advrtisinguru.com/wp-content/uploads/`

---

## Building for Production

```bash
# From the truston directory:
pnpm build

# Output is in: artifacts/truston/dist/
```

To deploy, upload the contents of `dist/` to any static hosting provider (Vercel, Netlify, Cloudflare Pages, etc.).

---

## Customising the WhatsApp Number

Open `artifacts/truston/src/components/WhatsAppButton.tsx` and change:

```ts
const WHATSAPP_NUMBER = "919616061166"; // Country code + number, no +
const WHATSAPP_MESSAGE = "Hi TrustOn! I'm interested in Prime Estate...";
```

---

## Customising the Wealth Planner

Open `artifacts/truston/src/pages/Home.tsx`. The planner uses compound interest:

```
A = P × (1 + r)^t
```

Where:
- `P` = Initial Investment (slider)
- `r` = Annual Growth Rate / 100 (slider)
- `t` = Holding Period in years (slider)

---

## Key Files

| File | Purpose |
|------|---------|
| `src/App.tsx` | Routes and layout shell |
| `src/index.css` | Theme variables (gold, background, fonts) |
| `src/components/Navbar.tsx` | Fixed navigation with Services dropdown |
| `src/components/Footer.tsx` | Footer with links and contact details |
| `src/components/WhatsAppButton.tsx` | Floating WhatsApp chat button |
| `src/pages/Home.tsx` | Main landing page |
| `src/pages/PlotSelling.tsx` | Plot Selling service page |
| `src/pages/ArchitectureDesign.tsx` | Architecture & Design service page |
| `src/pages/ConstructionBuild.tsx` | Construction & Build service page |
| `src/pages/InvestmentConsulting.tsx` | Investment Consulting service page |
| `src/pages/Project.tsx` | Prime Estate portfolio page |
| `src/pages/Faq.tsx` | FAQ accordion page |
| `src/pages/Contact.tsx` | Contact form + info page |

---

## Gold Theme Reference

The gold colour is defined as a CSS variable in `src/index.css`:

```css
--primary: 44 54% 54%;   /* hsl → #c9a84c */
```

Use these utility classes anywhere:
- `text-gold` — gold text
- `bg-gold` — gold background
- `border-gold` — gold border

Or use the raw hex `#c9a84c` / Tailwind arbitrary `text-[#c9a84c]`.

---

## Contact Details (as configured)

- **Phone:** +91 96160-61166
- **Email:** trustondevelopers01@gmail.com
- **Address:** UGF, Apple Plaza, Next To HDFC Bank, Hardoi Road, Lucknow-226003
- **WhatsApp:** +91 96160-61166

---

*Built with React + Vite + Tailwind CSS v4 + Framer Motion*
