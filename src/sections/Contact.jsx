import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Twitter, Send, CheckCircle } from 'lucide-react'

const SOCIALS = [
  { icon: Linkedin, label: 'LinkedIn',  href: 'https://www.linkedin.com/in/rishikapopli/',  color: 'hover:text-blue-600'  },
  { icon: Github,   label: 'GitHub',    href: 'https://github.com/rishikapopli',    color: 'hover:text-slate-800' },
  { icon: Twitter,  label: 'Twitter',   href: 'https://twitter.com',   color: 'hover:text-sky-500'   },
]

export default function Contact() {
  const [form,    setForm]    = useState({ name: '', email: '', message: '' })
  const [sent,    setSent]    = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate send (wire up to Formspree / EmailJS / etc.)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  const inputClass = `
    w-full bg-white/70 border border-blush-200 rounded-2xl
    px-4 py-3 text-sm text-slate-700 font-light
    placeholder-slate-300 outline-none
    focus:border-blush-400 focus:ring-2 focus:ring-blush-200
    transition-all duration-250 resize-none
  `

  return (
    <section id="contact" className="relative bg-white py-24 md:py-32">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blush-200 to-transparent" />

      {/* Background orbs */}
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, #f9d8e3 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Get in touch</p>
          <h2 className="section-heading">
            Let's <em className="text-gradient not-italic">connect</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-slate-500 font-light leading-[1.9] mb-8 text-base">
              Have a project in mind? Looking for a designer-developer who cares
              deeply about craft? I'd genuinely love to hear from you.
              <br /><br />
              I'm currently open to freelance projects and full-time roles.
            </p>

            <a
              href="mailto:rishikapopli07@gmail.com"
              className="inline-flex items-center gap-3 group mb-8"
            >
              <span className="w-10 h-10 rounded-full bg-blush-100 flex items-center justify-center text-blush-500 group-hover:bg-blush-200 transition-colors">
                <Mail size={16} />
              </span>
              <span className="font-serif text-xl text-blush-700 group-hover:text-blush-800 transition-colors">
                rishikapopli07@gmail.com
              </span>
            </a>

            <div className="flex items-center gap-3">
              {SOCIALS.map(({ icon: Icon, label, href, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    w-11 h-11 glass-card rounded-full flex items-center justify-center
                    text-slate-400 ${color} transition-all duration-250
                  `}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>

            {/* Availability card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-10 glass-card rounded-3xl p-6 border border-blush-100"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.6)] animate-pulse" />
                <p className="text-sm font-medium text-slate-700">Currently available</p>
              </div>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Open to product design roles, frontend contracts, and interesting collaborations.
                Response time: within 24 hours.
              </p>
            </motion.div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-3xl p-7 flex flex-col gap-4"
              style={{ background: 'linear-gradient(135deg, rgba(255,245,248,0.8), rgba(245,237,248,0.7))' }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-medium text-blush-500 uppercase tracking-wider mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-blush-500 uppercase tracking-wider mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-blush-500 uppercase tracking-wider mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea..."
                  rows={5}
                  required
                  className={inputClass}
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading || sent}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`btn-primary justify-center text-sm py-3.5 ${
                  sent ? 'from-green-400 to-green-500 shadow-none' : ''
                } ${loading ? 'opacity-70' : ''}`}
              >
                {sent ? (
                  <><CheckCircle size={16} /> Message sent!</>
                ) : loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <><Send size={15} /> Send Message</>
                )}
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
