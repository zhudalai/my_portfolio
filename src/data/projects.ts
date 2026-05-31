export interface Project {
  name: string
  image: string
  description: string
  techStack: string[]
  link: string
  githubUrl: string
  liveUrl: string
  language: string
  emoji: string
}

const projects: Project[] = [
  {
    name: "Airbnb Clone",
    image: "",
    description: "A full-stack Airbnb clone built with Next.js. Features property listings, search & filtering, booking flow, and responsive UI.",
    techStack: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    link: "https://github.com/zhudalai/airbnb-clone",
    githubUrl: "https://github.com/zhudalai/airbnb-clone",
    liveUrl: "https://airbnb-clone-phi-green.vercel.app",
    language: "TypeScript",
    emoji: "🏠",
  },
  {
    name: "WeatherFitBot",
    image: "",
    description: "A weather-based outfit recommendation bot. Get daily clothing suggestions based on real-time weather data.",
    techStack: ["Python", "API Integration", "Bot"],
    link: "https://github.com/zhudalai/WeatherFitBot",
    githubUrl: "https://github.com/zhudalai/WeatherFitBot",
    liveUrl: "https://weather-fit-bot.vercel.app",
    language: "Python",
    emoji: "🌤️",
  },
  {
    name: "Smart Restaurant POS",
    image: "",
    description: "AI-assisted full-stack restaurant management system. Features POS interface, order Kanban board, and AI-powered daily report generation (Japanese).",
    techStack: ["Laravel", "React", "PostgreSQL", "PHP"],
    link: "https://github.com/zhudalai/smart-restaurant-lite",
    githubUrl: "https://github.com/zhudalai/smart-restaurant-lite",
    liveUrl: "https://smart-restaurant-lite.onrender.com",
    language: "PHP",
    emoji: "🍽️",
  },
  {
    name: "Geo Knowledge Base",
    image: "",
    description: "Subsurface AI Knowledge Base system. RAG-powered knowledge retrieval with DeepSearcher, OpenRouter, and Milvus vector database.",
    techStack: ["Python", "RAG", "Milvus", "DeepSearcher"],
    link: "https://github.com/zhudalai/geo-knowledge-base",
    githubUrl: "https://github.com/zhudalai/geo-knowledge-base",
    liveUrl: "",
    language: "Python",
    emoji: "🌍",
  },
  {
    name: "RAG Pipeline Optimization",
    image: "",
    description: "RAG Pipeline Auto-Evaluation & Optimization System. Built with AutoRAG, OpenRouter, and Streamlit. Supports EN/JP languages.",
    techStack: ["Python", "AutoRAG", "Streamlit", "RAG"],
    link: "https://github.com/zhudalai/rag-pipeline-optimization",
    githubUrl: "https://github.com/zhudalai/rag-pipeline-optimization",
    liveUrl: "",
    language: "Python",
    emoji: "🤖",
  },
]

export default projects
