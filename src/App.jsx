import { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Certifications from './sections/Certifications'
import Contact from './sections/Contact'

// ─── Floating petal canvas ─────────────────────────────────────────────────
function PetalCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const COLORS = [
      'rgba(249,216,227,0.6)',
      'rgba(243,184,204,0.5)',
      'rgba(232,223,245,0.55)',
      'rgba(201,184,232,0.45)',
      'rgba(232,121,154,0.28)',
      'rgba(255,230,240,0.5)',
    ]

    const mkPetal = (randomY = false) => ({
      x:        Math.random() * window.innerWidth,
      y:        randomY ? Math.random() * window.innerHeight : -20,
      rx:       Math.random() * 7 + 4,
      ry:       Math.random() * 11 + 6,
      rot:      Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.018,
      vy:       Math.random() * 0.45 + 0.25,
      vx:       (Math.random() - 0.5) * 0.35,
      color:    COLORS[Math.floor(Math.random() * COLORS.length)],
      wave:     Math.random() * Math.PI * 2,
      waveSpd:  Math.random() * 0.018 + 0.004,
      amp:      Math.random() * 22 + 10,
    })

    let petals = Array.from({ length: 22 }, () => mkPetal(true))
    let raf

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      petals.forEach(p => {
        p.y    += p.vy
        p.wave += p.waveSpd
        p.x    += p.vx + Math.sin(p.wave) * 0.28
        p.rot  += p.rotSpeed

        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rot)
        ctx.beginPath()
        ctx.ellipse(0, 0, p.rx, p.ry, 0, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()
        ctx.restore()

        if (p.y > canvas.height + 30) Object.assign(p, mkPetal())
      })
      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  )
}

// ─── Cursor glow ───────────────────────────────────────────────────────────
function CursorGlow() {
  const glowRef = useRef(null)
  const dotRef = useRef(null)

  useEffect(() => {
    let x = 0
    let y = 0

    const move = (e) => {
      x = e.clientX
      y = e.clientY
    }

    const animate = () => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
      }
      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', move)
    animate()

    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      {/* Glow */}
      <div
        ref={glowRef}
        className="fixed pointer-events-none z-50"
        style={{
          width: 220, // reduced from 340 → smoother
          height: 220,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(249,216,227,0.35) 0%, transparent 70%)',
          transform: 'translate3d(-50%, -50%, 0)',
        }}
      />

      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[51]"
        style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: '#c45778',
          transform: 'translate3d(-50%, -50%, 0)',
        }}
      />
    </>
  )
}


// ─── App ───────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <CursorGlow />
      <PetalCanvas />

      <div className="relative z-10">
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  )
}
