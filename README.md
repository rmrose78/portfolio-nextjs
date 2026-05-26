# Ryan Rose — Portfolio

Personal portfolio site for Ryan Rose, Frontend Developer, U.S. Army Veteran, and Biomedical Engineering graduate.

🌐 **Live site:** [ryanmrose.com](https://ryanmrose.com)

---

## Tech Stack

- **Framework:** Next.js 12.1.6
- **UI Library:** React 18 + TypeScript
- **Styling:** Tailwind CSS, SCSS Modules
- **Theming:** Dark/light mode via `next-themes`
- **Deployment:** Netlify

## Features

- 🌗 Dark/light mode toggle with hydration-safe mounting guard
- 🚀 NASA Astronomy Picture of the Day (APOD) fetched via internal API route
- 💬 Random quotes from Dune, The First Law, and Stoic philosophy
- 📬 Contact form powered by Web3Forms
- ♿ Accessible: skip nav, `aria-label`, `aria-current`, `aria-expanded`, focus-visible outlines
- 📱 Responsive layout with mobile hamburger menu

## Project Structure
pages/
index.jsx         # Home — astronaut background, pitch text, APOD, Quote
about.jsx         # About — bio, profile pic, tech stack icons
contact.jsx       # Contact — Web3Forms ajax integration
api/
getApodData.ts  # Server-side NASA APOD API proxy
components/
Navbar.tsx
NavElement.tsx
DarkmodeToggle.tsx
Menu.tsx
Apod.tsx
Quote.tsx
Contact.tsx

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Create a `.env.local` file in the root with the following:
NEXT_PUBLIC_APOD_API_KEY=your_nasa_api_key
NEXT_PUBLIC_WEB3FORMS_KEY=your_web3forms_key

- NASA API key: [https://api.nasa.gov](https://api.nasa.gov)
- Web3Forms key: [https://web3forms.com](https://web3forms.com)

> `.env.local` is gitignored and should never be committed.

## Deployment

Deployed on **Netlify**. All environment variables are set in the Netlify dashboard under Site Settings → Environment Variables.

## Notes on Next.js 12

This project uses Next.js **12.1.6**, which requires explicit `<a>` tags inside `<Link>` components. This is intentional and should not be "upgraded" to the Next 13+ auto-anchor pattern without a broader migration.

---

Built by [Ryan Rose](https://ryanmrose.com) · [GitHub](https://github.com/rmrose78) · [LinkedIn](https://www.linkedin.com/in/ryan-rose-272626170/)
