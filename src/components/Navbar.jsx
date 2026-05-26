import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'About',          href: '#about'          },
  { label: 'Skills',         href: '#skills'         },
  { label: 'Projects',       href: '#projects'       },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact',        href: '#contact'        },
]

// 🔥 PASTE YOUR GOOGLE DRIVE LINK HERE
const RESUME_LINK = "https://drive.google.com/file/d/1bBFpO6YPHh2fXTNglZjV_Z0rYKlbKGRs/view?usp=drive_link"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_LINKS.map(l => l.href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { threshold: 0.35 }
    )

    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  // ✅ Open resume from Google Drive
  const openResume = () => {
    window.open(RESUME_LINK, '_blank')
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/70 backdrop-blur-xl border-b border-white/60 shadow-glass'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <a
          href="#home"
          onClick={e => {
            e.preventDefault()
            handleNav('#home')
          }}
          className="font-serif text-xl font-semibold text-blush-700 tracking-wide hover:text-blush-800 transition-colors"
        >
          R<span className="text-lavender-500">P</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <button
                onClick={() => handleNav(href)}
                className={`relative text-xs font-medium tracking-[0.1em] uppercase transition-colors duration-200 group ${
                  active === href.slice(1)
                    ? 'text-blush-700'
                    : 'text-slate-500 hover:text-blush-600'
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-blush-400 transition-all duration-300 ${
                    active === href.slice(1)
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* ✅ Desktop Resume Button */}
        <button
          onClick={openResume}
          className="hidden md:inline-flex btn-primary text-xs py-2.5 px-5"
        >
          Download Resume 
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-5 bg-blush-600 rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-5 bg-blush-600 rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-5 bg-blush-600 rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white/90 backdrop-blur-xl border-t border-blush-100"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => handleNav(href)}
                    className="text-sm font-medium text-slate-600 hover:text-blush-700 transition-colors w-full text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}

              {/* ✅ Mobile Resume Button */}
              <li>
                <button
                  onClick={openResume}
                  className="btn-primary text-xs py-2.5 px-5 w-full justify-center"
                >
                  Download Resume 
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}