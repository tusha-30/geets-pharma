# Geet's Pharmaceutical

A modern, fully-responsive marketing website for **Geet's Pharmaceutical** built with **Next.js 14**, **TypeScript** and **Tailwind CSS**. Inspired by the structure and feel of leading global pharma sites like Sun Pharma.

## Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) icons

## Features

- Fully responsive (mobile, tablet, desktop)
- Sticky responsive navbar with mega-menu and mobile drawer
- Hero carousel with auto-advance, dots and arrow navigation
- Sections for: About, Businesses, Global Presence, Research, Sustainability, Newsroom and Careers
- Dedicated pages: `/about`, `/businesses`, `/investors`, `/sustainability`, `/newsroom`, `/careers`, `/contact`
- Contact form with success state
- Accessible markup, smooth animations and a polished brand system

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm start
```

## Project Structure

```
geets-pharmaceutical/
├── app/                # App router pages
│   ├── about/
│   ├── businesses/
│   ├── careers/
│   ├── contact/
│   ├── investors/
│   ├── newsroom/
│   ├── sustainability/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/         # Reusable UI components
├── public/             # Static assets
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Customization

- **Colors** – update the `brand` palette in `tailwind.config.ts`.
- **Content** – edit the data arrays at the top of each component (e.g. slides in `Hero.tsx`).
- **Fonts** – swap the Google Fonts in `app/globals.css`.

---

© Geet's Pharmaceutical. Built with care.
