export interface Skill {
  name: string
  icon: string
  category: string
}

export interface SkillCategory {
  name: string
  key: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    key: "languages",
    skills: [
      { name: "Python", icon: "🐍", category: "languages" },
      { name: "TypeScript", icon: "💠", category: "languages" },
      { name: "PHP", icon: "🐘", category: "languages" },
    ],
  },
  {
    name: "Frontend",
    key: "frontend",
    skills: [
      { name: "React", icon: "⚛️", category: "frontend" },
      { name: "Next.js", icon: "▲", category: "frontend" },
      { name: "Tailwind CSS", icon: "🎨", category: "frontend" },
    ],
  },
  {
    name: "Backend",
    key: "backend",
    skills: [
      { name: "Laravel", icon: "🔴", category: "backend" },
      { name: "PostgreSQL", icon: "🐘", category: "backend" },
      { name: "REST API", icon: "🔗", category: "backend" },
    ],
  },
  {
    name: "AI & ML",
    key: "ai",
    skills: [
      { name: "RAG", icon: "🔍", category: "ai" },
      { name: "AutoRAG", icon: "🤖", category: "ai" },
      { name: "Milvus", icon: "🧠", category: "ai" },
      { name: "Streamlit", icon: "📊", category: "ai" },
    ],
  },
  {
    name: "Tools",
    key: "tools",
    skills: [
      { name: "Git / GitHub", icon: "🐙", category: "tools" },
      { name: "VS Code", icon: "💻", category: "tools" },
      { name: "Vercel", icon: "▲", category: "tools" },
      { name: "Claude Code", icon: "✨", category: "tools" },
    ],
  },
]

export default skillCategories
