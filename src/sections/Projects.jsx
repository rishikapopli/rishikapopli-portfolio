import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'

const PROJECTS = [
  {
    tag:         'AI · NLP · EdTech',
  title:       'StarlightAnalyzer — Research Paper Analyzer',
  description: 'Transforms dense academic papers into structured, digestible insights using AI, enabling faster learning and deeper comprehension for students and researchers.',
  
  problem:     'Academic papers are time-intensive and cognitively heavy, especially for beginners. Most readers abandon papers midway due to complexity and lack of guided understanding.',
  
  approach:    'Built an intelligent summarization system using NLP techniques and LLMs to break papers into key sections, generate simplified explanations, and highlight critical concepts. Focused on clarity-first UX with progressive disclosure and contextual learning aids.',
  
  impact:      'Accelerated research consumption by ~60%, improved comprehension rates, and made academic knowledge more accessible to non-experts.',
  
  tech:        ['Python', 'LLMs', 'React', 'Tailwind CSS', 'FastAPI'],
  
  link:        '#',
  accent:      'purple'
  },
  {
     tag:         '🏆 1st Runner-Up · Sandbox 4.0 · AI · EdTech',
  
  title:       'ThinkScore AI — AI Proficiency Assessment Platform',
  
  description: 'An intelligent, human-centered platform that evaluates AI proficiency across disciplines, adapts to user specialization, and delivers transparent, actionable insights for both learners and recruiters.',
  
  problem:     'There is no standardized, accessible way for students to demonstrate AI proficiency across disciplines. Existing systems fail to assess real-world AI understanding, leaving students underprepared and recruiters without reliable signals of capability.',
  
  approach:    'Designed an end-to-end AI proficiency platform featuring adaptive assessments, a human-AI interview layer, and a transparent scoring system. The platform dynamically adjusts questions based on user specialization and translates results into clear, explainable insights.',
  
  impact:      'Recognized as 1st Runner-Up at Sandbox 4.0. Created a scalable framework for evaluating AI readiness, improving clarity for students and enabling more informed hiring decisions.',
  
  tech:        ['Python', 'Machine Learning', 'React', 'Node.js', 'MongoDB'],
  
  link:        '#',
  accent:      'rose'
  },
  {
    tag:         'Developer Tool · Open Source',
  title:       'GitPulseAI — GitHub Repository Explainer',
  description: 'An AI-powered tool that breaks down GitHub repositories into clear, structured explanations, helping developers quickly understand codebases without manual deep-dives.',
  
  problem:     'Developers, especially beginners, struggle to understand unfamiliar repositories due to complex file structures, lack of documentation, and time constraints.',
  
  approach:    'Built an AI-driven system that analyzes repository structure, reads key files, and generates simplified explanations of project purpose, architecture, and core logic. Focused on clean UI with section-wise breakdowns and code context highlighting.',
  
  impact:      'Reduced onboarding time for new codebases by ~70%. Enabled faster learning and improved developer productivity when exploring open-source projects.',
  
  tech:        ['React', 'Node.js', 'OpenAI API', 'GitHub API', 'Tailwind CSS'],
  
  link:        '#',
  accent:      'blue'
  },
  {
     tag:         'Web · Personal Branding',
  
  title:       'Rishika Popli — Personal Portfolio Website',
  
  description: 'A modern, cherry blossom–inspired personal portfolio designed to showcase projects, skills, and achievements through a clean, elegant, and immersive user experience.',
  
  problem:     'Most student portfolios are generic, cluttered, and fail to communicate personality or real project depth, making it difficult to stand out to recruiters.',
  
  approach:    'Designed and developed a fully responsive portfolio with a minimal, aesthetic UI inspired by cherry blossom themes. Focused on clear storytelling, smooth animations, and structured project case studies to highlight both design thinking and technical execution.',
  
  impact:      'Created a strong personal brand presence, improved project presentation clarity, and made the portfolio more engaging and recruiter-friendly.',
  
  tech:        ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
  
  link:        '#',
  accent:      'rose'
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative bg-white py-24 md:py-32">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blush-200 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Selected work</p>
          <h2 className="section-heading">
            Featured <em className="text-gradient not-italic">Projects</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            View all on GitHub ↗
          </a>
        </motion.div>
      </div>
    </section>
  )
}
