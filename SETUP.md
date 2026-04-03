# 🚀 Portfolio Setup Guide

## 1. Install new dependencies

In your project root, run:

```bash
npm install @react-three/fiber @react-three/drei @react-three/postprocessing three framer-motion
npm install --save-dev @types/three
```

## 2. Replace these files in your repo

Copy each file from this package into the matching location in your repo:

| File | Destination |
|------|-------------|
| `app/page.tsx` | `app/page.tsx` |
| `app/globals.css` | `app/globals.css` |
| `app/layout.tsx` | `app/layout.tsx` |
| `next.config.ts` | `next.config.ts` |
| `tsconfig.json` | `tsconfig.json` |
| `components/Hero3D.tsx` | `components/Hero3D.tsx` ← CREATE this folder |
| `components/Navbar.tsx` | `components/Navbar.tsx` |
| `components/About.tsx` | `components/About.tsx` |
| `components/Projects.tsx` | `components/Projects.tsx` |
| `components/Skills.tsx` | `components/Skills.tsx` |
| `components/Contact.tsx` | `components/Contact.tsx` |

## 3. Personalize (important!)

Open each file and replace placeholders:

- **`components/Contact.tsx`** → Replace `your@email.com` with your real email
- **`components/Contact.tsx`** → Replace LinkedIn URL with yours
- **`components/Projects.tsx`** → Replace placeholder project cards with your real projects
- **`app/page.tsx`** → Update the hero bio text with your real info

## 4. Run locally

```bash
npm run dev
```

Open http://localhost:3000

## 5. Deploy to Vercel

Just push to GitHub — Vercel auto-deploys from your master branch!

---

## Stack

- **Next.js 15** + TypeScript
- **React Three Fiber** + Drei (3D canvas)
- **Three.js** (starfield, torus knot, grid)
- **CSS animations** (glitch, scanlines, neon)
- **Google Fonts** (Orbitron + Share Tech Mono)
