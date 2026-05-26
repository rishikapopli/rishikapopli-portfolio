import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'
import { useState } from 'react'
const profileImg = "/profile.png";

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 30 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
})

export default function Hero() {
  const [imgError, setImgError] = useState(false)

  const scrollToWork = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden
                 bg-gradient-to-br from-blush-50 via-lavender-50 to-blush-100
                 pt-16"
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-20 right-10 w-80 h-80 rounded-full opacity-30"
        style={{ background: 'radial-gradient(circle, #f9d8e3 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-20 left-10 w-64 h-64 rounded-full opacity-25"
        style={{ background: 'radial-gradient(circle, #dccfef 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          {/* TEXT */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div {...fadeUp(0.1)}>
              <span className="inline-flex items-center gap-2 pill mb-6 text-[11px] tracking-widest">
                <Sparkles size={11} className="text-lavender-500" />
                Open to opportunities
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.2)}
              className="font-serif font-medium leading-[1.05] text-slate-800 mb-5"
              style={{ fontSize: 'clamp(3rem, 6vw, 5.2rem)' }}
            >
              Hi, I'm{' '}
              <span className="text-gradient italic">Rishika</span>
              <br />
              <span className="text-gradient italic">Popli</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.35)}
              className="text-base md:text-lg text-slate-500 font-light leading-[1.85] max-w-xl mx-auto lg:mx-0 mb-8"
            >
             First-year CSE student creating intelligent web and AI-driven applications — focused on simplicity, usability, and real-world impact.
            </motion.p>

            <motion.div
              {...fadeUp(0.5)}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <button onClick={scrollToWork} className="btn-primary">
                View Work <ArrowDown size={15} />
              </button>
              <a href="https://drive.google.com/file/d/1bBFpO6YPHh2fXTNglZjV_Z0rYKlbKGRs/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn-outline">
                Resume ↗
              </a>
            </motion.div>

            {/* STATS */}
            <motion.div
              {...fadeUp(0.65)}
              className="flex gap-6 justify-center lg:justify-start mt-10"
            >
              {[
                { value: '10+', label: 'Months Learning' },
                { value: '4+', label: 'Projects Build' },
                { value: '12+', label: 'Technologies Explored' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="font-serif text-2xl text-blush-700">{value}</p>
                  <p className="text-xs text-slate-400">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* IMAGE */}
          <div className="flex-shrink-0 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="blob-shape w-72 h-72 md:w-96 md:h-96"
              style={{
                background: 'linear-gradient(135deg, #f3b8cc 0%, #c9b8e8 100%)',
                padding: 6,
              }}
            >
              <div
                className="w-full h-full blob-shape overflow-hidden relative"
                style={{
                  background: 'linear-gradient(160deg, #fce8f0 0%, #ede0f5 100%)',
                }}
              >
                {!imgError && (
                  <img
                    src={profileImg}
                    alt="Rishika Popli"
                    className="w-full h-full object-cover transition duration-500 hover:scale-105"
                    onError={() => setImgError(true)}
                  />
                )}

                {imgError && (
                  <div className="absolute inset-0 flex items-center justify-center text-6xl">
                    🌸
                  </div>
                )}
              </div>
            </motion.div>

            {/* FLOATING TAGS */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5 }}
              className="absolute -bottom-4 -left-8 glass-card px-4 py-2 rounded-xl text-sm"
            >
              🎓 CSE Student | 1st Year
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-4 -right-6 glass-card px-4 py-2 rounded-xl text-sm"
            >
              💻 Web & AI Builder
            </motion.div>

            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute top-1/2 -right-10 glass-card px-4 py-2 rounded-xl text-sm"
            >
              ✨ Building Real Projects
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}