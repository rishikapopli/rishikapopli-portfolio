import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

// ✅ YOUR FACTS (cleaned slightly)
const FACTS = [
  { emoji: '🎓', label: 'Education', value: 'B.E Computer Science (AIFT)' },
  { emoji: '📍', label: 'Location', value: 'Ambala, India' },
  { emoji: '💼', label: 'Focus', value: 'MERN Stack & AI Learning' },
  { emoji: '🌐', label: 'Languages', value: 'English, Hindi, French, Punjabi' },
]

export default function About() {
  return (
    <section id="about" className="relative bg-white py-24 md:py-32">

      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blush-200 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch"
        >

          {/* LEFT — TEXT */}
          <div className="flex flex-col justify-center">
            <motion.p variants={itemVariants} className="section-label">
              Who I am
            </motion.p>

            <motion.h2 variants={itemVariants} className="section-heading">
              A little about <em className="text-gradient not-italic">me</em>
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="space-y-5 text-slate-500 text-base leading-relaxed"
            >
              <p>
                I’m a first-year Computer Science student at Chitkara University
                with a passion for building digital experiences that feel intuitive and engaging.
              </p>

              <p>
                My work blends problem-solving, clean design, and modern web development
                to create interfaces that are both functional and visually refined.
              </p>

              <p>
                Currently advancing my proficiency in React and Node.js, while expanding my knowledge of AI to create meaningful, real-world applications. I focus on building scalable, user-centric solutions that address practical challenges.
              </p>

              <p>
                Beyond academics, I continuously learn, experiment, and push my limits as a developer. I actively participate in hackathons and maintain a strong interest in the startup ecosystem, where I seek opportunities to apply my skills to solve meaningful, real-world problems.
              </p>
            </motion.div>
          </div>

          {/* RIGHT — FACT CARDS */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-5 h-full"
          >
            {FACTS.map(({ emoji, label, value }) => (
              <motion.div
                key={label}
                whileHover={{ y: -6, scale: 1.03 }}
                className="glass-card rounded-2xl p-6 flex flex-col justify-between h-full min-h-[180px]"
              >
                {/* Top */}
                <div>
                  <p className="text-2xl">{emoji}</p>
                  <p className="text-xs uppercase tracking-wide text-purple-400 mt-2">
                    {label}
                  </p>
                </div>

                {/* Bottom */}
                <p className="text-sm font-medium text-slate-700">
                  {value}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}