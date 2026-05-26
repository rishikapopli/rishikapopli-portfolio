import { motion } from 'framer-motion'
import { Github, Linkedin, Dribbble, Heart } from 'lucide-react'

const SOCIALS = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/rishikapopli/', label: 'LinkedIn'  },
  { icon: Github,   href: 'https://github.com/rishikapopli',   label: 'GitHub'    },
  { icon: Dribbble, href: 'https://dribbble.com', label: 'Dribbble'  },
]

export default function Footer() {
  return (
    <footer className="relative z-10 bg-gradient-to-r from-blush-100 via-white to-lavender-100 border-t border-blush-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-4">

        <p className="font-serif text-lg text-blush-700 font-medium">
          Rishika Popli<span className="text-lavender-500"></span>
        </p>

        <p className="text-xs text-slate-400 flex items-center gap-1.5">
          Crafted with <Heart size={12} className="text-blush-500 fill-blush-500" /> and lots of ✨
        </p>

        <div className="flex items-center gap-4">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-9 h-9 rounded-full glass-card flex items-center justify-center text-blush-500 hover:text-blush-700 hover:border-blush-300 transition-colors"
            >
              <Icon size={15} />
            </motion.a>
          ))}
        </div>

      </div>
    </footer>
  )
}
