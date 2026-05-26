import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const CERTS = [
  {
    icon: '🤖',
    title: 'Microsoft Azure AI Fundamentals (AI-900)',
    issuer: 'Microsoft',
    year: '2025',
    // link: 'https://drive.google.com/', // replace with your actual link
    color: 'from-blush-100 to-lavender-50',
  },
  {
    icon: '☁️',
    title: 'Microsoft Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    year: '2026',
    // link: 'https://drive.google.com/',
    color: 'from-lavender-100 to-blush-50',
  },
  {
    icon: '🐍',
    title: 'Python Programming Fundamentals',
    issuer: 'Infosys Springboard',
    year: '2025',
    // link: 'https://drive.google.com/',
    color: 'from-blush-100 to-blush-50',
  },
  {
    icon: '🌐',
    title: 'HTML5 & Frontend Development Basics',
    issuer: 'Infosys Springboard',
    year: '2025',
    // link: 'https://drive.google.com/',
    color: 'from-lavender-50 to-blush-50',
  },
  // {
  //   icon: '🚀',
  //   title: 'Full Stack Web Development (In Progress)',
  //   issuer: 'Self Learning',
  //   year: '2026',
  //   link: '#',
  //   color: 'from-blush-50 to-lavender-100',
  // },
]

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative py-24 md:py-32"
      style={{
        background:
          'linear-gradient(135deg, #fdf2f7 0%, #f5edf8 100%)',
      }}
    >
      {/* Top border glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blush-200 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Credentials</p>
          <h2 className="section-heading">
            Certifications &{' '}
            <em className="text-gradient not-italic">
              Achievements
            </em>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10">
          {CERTS.map((cert, i) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow:
                  '0 20px 50px rgba(180,80,120,0.2)',
              }}
              className="relative group glass-card rounded-3xl p-5 flex flex-col gap-3 transition-all duration-300 no-underline"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-xl`}
              >
                {cert.icon}
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="text-sm font-semibold text-slate-800 leading-snug mb-1.5 group-hover:text-blush-700 transition-colors">
                  {cert.title}
                </p>

                <p className="text-xs text-slate-400 mb-1">
                  {cert.issuer}
                </p>

                <span className="text-[11px] font-semibold text-lavender-500 tracking-wider">
                  {cert.year}
                </span>
              </div>

              {/* Hover Arrow */}
              <ExternalLink
                size={16}
                className="absolute bottom-4 right-4 text-slate-200 group-hover:text-blush-400 group-hover:scale-110 transition-all duration-300"
              />

              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}