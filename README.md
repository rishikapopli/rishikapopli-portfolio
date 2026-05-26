# Rishika Popli — Portfolio

A premium minimal portfolio built with **React + Vite + Tailwind CSS + Framer Motion**.

## ✨ Features

- Soft blush pink × lavender pastel theme
- Glassmorphism cards with subtle blur
- Floating petal canvas animation (pure canvas, 60fps)
- Custom cursor glow + precise dot tracker
- Framer Motion: fade-up reveals, hover lift, morphing blob
- Sticky blur navbar with active-section tracking
- Filterable skills grid with animated progress bars
- Expandable project case-study cards (Problem → Approach → Impact)
- Certification cards with hover arrow reveal
- Contact form with loading + success state
- Fully responsive (mobile-first)

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── profile.jpg          ← Add your photo here
│   ├── resume.pdf           ← Add your resume here
│   └── projects/            ← Add project screenshots here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ProjectCard.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Certifications.jsx
│   │   └── Contact.jsx
│   ├── hooks/
│   │   └── useInView.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## 🎨 Personalising

### 1. Add your photo
Drop `profile.jpg` into `/public/`. The Hero section will use it automatically.

### 2. Add your resume
Drop `resume.pdf` into `/public/`.

### 3. Update content
- **Hero** — edit `src/sections/Hero.jsx` for your tagline
- **About** — edit facts and bio in `src/sections/About.jsx`
- **Skills** — add/remove skills in `src/sections/Skills.jsx`
- **Projects** — update the `PROJECTS` array in `src/sections/Projects.jsx`
- **Certifications** — update the `CERTS` array in `src/sections/Certifications.jsx`
- **Contact** — update your email and social links in `src/sections/Contact.jsx`

### 4. Wire up the contact form
In `Contact.jsx`, replace the `setTimeout` mock with:
- **[Formspree](https://formspree.io/)** — free, no backend needed
- **[EmailJS](https://www.emailjs.com/)** — send directly from JS

### 5. Deploy
```bash
npm run build       # Outputs to /dist
# Deploy /dist to Vercel, Netlify, or GitHub Pages
```

## 🛠 Tech Stack

| Tool            | Purpose                     |
|-----------------|-----------------------------|
| React 18        | UI framework                |
| Vite 5          | Build tool & dev server     |
| Tailwind CSS 3  | Utility-first styling       |
| Framer Motion   | Animations & transitions    |
| Lucide React    | Icon library                |
| Canvas API      | Floating petal animation    |

## 📦 Build for Production

```bash
npm run build
npm run preview   # Preview the production build locally
```
