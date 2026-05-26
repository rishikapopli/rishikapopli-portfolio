import { motion } from 'framer-motion'

const SKILLS = [
  { icon: '⚛️',  name: 'React',         level: 90, cat: 'Frontend' },
  { icon: '🎨',  name: 'Figma',         level: 95, cat: 'Design'   },
  { icon: '🟨',  name: 'TypeScript',    level: 88, cat: 'Frontend' },
  { icon: '⚡',  name: 'Tailwind CSS',  level: 92, cat: 'Frontend' },
  { icon: '🐍',  name: 'Python',        level: 75, cat: 'Backend'  },
  { icon: '🌐',  name: 'HTML', level: 85, cat: 'Frontend' },
  { icon: '🗂️',  name: 'JavaScript',   level: 80, cat: 'Frontend' },
  { icon: '🌿',  name: 'Node.js',       level: 72, cat: 'Backend'  },
  { icon: '🔥',  name: 'Firebase',      level: 78, cat: 'Backend'  },
  { icon: '📊',  name: 'SQL',           level: 70, cat: 'Backend'  },
  { icon: '🔮',  name: 'UX Research',   level: 88, cat: 'Design'   },
  { icon: '🧩',  name: 'Prototyping',   level: 93, cat: 'Design'   },
  { icon: '🌐',  name: 'Next.js',       level: 82, cat: 'Frontend' },
  { icon: '🧠',  name: 'AWS',           level: 65, cat: 'Backend'  },
  { icon: '📱',  name: 'Responsive UI', level: 95, cat: 'Frontend' },
  { icon: '🤖',  name: 'AI/Prompt Eng', level: 78, cat: 'Other'   },
]

const CATS = ['All', 'Frontend', 'Design', 'Backend', 'Other']

import { useState } from 'react'

export default function Skills() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? SKILLS : SKILLS.filter(s => s.cat === active)

  return (
    <section
      id="skills"
      className="relative py-24 md:py-32"
      style={{ background: 'linear-gradient(180deg, #fdf7f9 0%, #f5edf8 100%)' }}
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blush-200 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">My toolkit</p>
          <h2 className="section-heading">
            Skills & <em className="text-gradient not-italic">Technologies</em>
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {CATS.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-250 ${
                active === cat
                  ? 'bg-blush-500 text-white shadow-pink'
                  : 'glass-card text-slate-500 hover:text-blush-600 hover:border-blush-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3"
        >
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              whileHover={{ y: -6, boxShadow: '0 12px 32px rgba(180,80,120,0.2)', scale: 1.03 }}
              className="glass-card rounded-2xl p-4 text-center transition-shadow duration-300 group"
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <p className="text-xs font-medium text-slate-600 group-hover:text-blush-700 transition-colors mb-2.5">
                {skill.name}
              </p>
              {/* Level bar */}
              <div className="h-1 rounded-full bg-blush-100 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.04 + 0.3, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-blush-400 to-lavender-500"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
