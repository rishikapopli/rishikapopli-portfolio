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
│   ├── profile.jpg         
│   ├── resume.pdf           
│   └── projects/           
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
