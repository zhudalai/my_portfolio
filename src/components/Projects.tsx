import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import projects from '../data/projects'
import { useI18n } from '../i18n/I18nContext'

const languageColors: Record<string, string> = {
  TypeScript: 'bg-blue-500',
  Python: 'bg-yellow-500',
  PHP: 'bg-purple-500',
  JavaScript: 'bg-yellow-400',
  Rust: 'bg-orange-500',
  Go: 'bg-cyan-500',
}

const filters = ['all', 'web', 'ai', 'fullstack'] as const
type Filter = (typeof filters)[number]

function getLanguageColor(lang: string): string {
  return languageColors[lang] || 'bg-gray-500'
}

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-dark-surface rounded-xl border border-dark-border overflow-hidden hover:border-gray-500 hover:shadow-lg hover:shadow-accent-start/5 hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image / Placeholder */}
      <div className="aspect-video overflow-hidden relative">
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-dark-surface via-dark-border to-dark-surface flex items-center justify-center">
            <span className="text-6xl opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-300">
              {project.emoji}
            </span>
          </div>
        )}
        {/* Language badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm">
          <span className={`w-2.5 h-2.5 rounded-full ${getLanguageColor(project.language)}`} />
          <span className="text-xs text-gray-300 font-medium">{project.language}</span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-accent-start transition-colors">
          {project.name}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs rounded-full bg-dark-border text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-accent-start hover:text-accent-end transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

function Projects() {
  const { t } = useI18n()
  const [activeFilter, setActiveFilter] = useState<Filter>('all')

  const filterLabels: Record<Filter, string> = {
    all: t.projects.filterAll,
    web: t.projects.filterWeb,
    ai: t.projects.filterAI,
    fullstack: t.projects.filterFullStack,
  }

  // Categorize projects
  const categorize = (project: (typeof projects)[0]): Filter[] => {
    const cats: Filter[] = []
    const techs = project.techStack.map((t) => t.toLowerCase())
    const name = project.name.toLowerCase()

    if (techs.some((t) => ['python', 'rag', 'autorrag', 'milvus', 'streamlit', 'deepsearcher'].includes(t)) || name.includes('ai') || name.includes('geo') || name.includes('bot')) {
      cats.push('ai')
    }
    if (techs.some((t) => ['next.js', 'react', 'laravel', 'php', 'tailwind css', 'typescript', 'javascript'].includes(t))) {
      cats.push('web')
    }
    if (techs.some((t) => ['next.js', 'laravel', 'postgresql'].includes(t)) && techs.length >= 3) {
      cats.push('fullstack')
    }
    return cats
  }

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => categorize(p).includes(activeFilter))

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
        >
          {t.projects.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-center max-w-2xl mx-auto mb-10"
        >
          {t.projects.subtitle}
        </motion.p>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-sm rounded-full border transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-accent-start to-accent-end text-white border-transparent'
                  : 'border-dark-border text-gray-400 hover:text-white hover:border-gray-500'
              }`}
            >
              {filterLabels[filter]}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        {filtered.length === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 text-center py-12"
          >
            {t.projects.empty}
          </motion.p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, index) => (
                <ProjectCard key={project.name} project={project} index={index} />
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
