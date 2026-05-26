import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ChevronDown } from 'lucide-react'

export default function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false)

  const {
    tag, title, description,
    problem, approach, impact,
    tech, link, accent,
  } = project

  const accentColors = {
    pink:     'from-blush-400 to-blush-600',
    lavender: 'from-lavender-400 to-lavender-600',
    rose:     'from-pink-400 to-rose-500',
    mauve:    'from-blush-500 to-lavender-600',
  }
  const gradient = accentColors[accent] || accentColors.pink

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="glass-card rounded-3xl overflow-hidden group transition-shadow duration-300 hover:shadow-glass-hover"
    >
      {/* Accent bar */}
      <div className={`h-1 bg-gradient-to-r ${gradient}`} />

      <div className="p-7">
        {/* Tag + link */}
        <div className="flex items-start justify-between mb-3">
          <span className="pill">{tag}</span>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-blush-500 transition-colors"
              aria-label={`View ${title}`}
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>

        {/* Title */}
        <h3 className="font-serif text-2xl font-semibold text-slate-800 mb-2 leading-snug group-hover:text-blush-700 transition-colors">
          {title}
        </h3>

        {/* Short desc */}
        <p className="text-sm text-slate-500 leading-relaxed font-light mb-5">
          {description}
        </p>

        {/* Case-study expandable */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-xs font-medium text-blush-600 hover:text-blush-800 transition-colors mb-4"
        >
          <span>{expanded ? 'Hide case study' : 'View case study'}</span>
          <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.25 }}>
            <ChevronDown size={14} />
          </motion.span>
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5 pt-1">
                {[
                  { label: '🔍 Problem',  text: problem  },
                  { label: '💡 Approach', text: approach },
                  { label: '🚀 Impact',   text: impact   },
                ].map(({ label, text }) => (
                  <div
                    key={label}
                    className="bg-gradient-to-br from-blush-50 to-lavender-50 rounded-2xl p-4 border border-blush-100"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-blush-500 mb-2">{label}</p>
                    <p className="text-xs text-slate-600 leading-relaxed font-light">{text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-blush-100">
          {tech.map(t => (
            <span key={t} className="tech-badge">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
