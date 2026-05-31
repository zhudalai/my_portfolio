import { motion } from 'framer-motion'
import skillCategories from '../data/skills'
import { useI18n } from '../i18n/I18nContext'

const categoryIconBg: Record<string, string> = {
  languages: 'from-blue-500/20 to-blue-600/10 border-blue-500/30',
  frontend: 'from-cyan-500/20 to-cyan-600/10 border-cyan-500/30',
  backend: 'from-green-500/20 to-green-600/10 border-green-500/30',
  ai: 'from-purple-500/20 to-purple-600/10 border-purple-500/30',
  tools: 'from-orange-500/20 to-orange-600/10 border-orange-500/30',
}

function About() {
  const { t } = useI18n()

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
        >
          {t.about.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-center max-w-2xl mb-12"
        >
          {t.about.description}
        </motion.p>

        {/* Identity cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {t.about.cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group relative bg-dark-surface rounded-xl border border-dark-border p-6 hover:border-gray-500 hover:-translate-y-0.5 transition-all duration-300"
            >
              {/* accent glow on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent-start/5 to-accent-end/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <h3 className="text-base font-semibold mb-3 text-gray-100">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill categories */}
        <div className="space-y-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-br border ${categoryIconBg[category.key] || 'from-gray-500/20 to-gray-600/10 border-gray-500/30'} hover:scale-105 transition-transform cursor-default`}
                  >
                    <span className="text-xl">{skill.icon}</span>
                    <span className="text-sm font-medium text-gray-200">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
