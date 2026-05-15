import type { TranslationsMap } from './types'

const translations: TranslationsMap = {
  zh: {
    nav: {
      home: '首页',
      about: '关于我',
      projects: '项目',
      contact: '联系我',
    },
    hero: {
      greeting: '你好，我是',
      name: '朱延俊',
      role: 'AI编程学习者',
      viewProjects: '查看项目',
      contactMe: '联系我',
    },
    about: {
      title: '关于我',
      description: 'AI编程初学者，正在学习 Python、Git / GitHub 和 Claude Code。',
    },
    projects: {
      title: '项目展示',
      subtitle: '以下是我参与开发的部分项目，每个项目都体现了不同的技术挑战和解决方案。',
      empty: '项目正在筹备中，敬请期待...',
      viewProject: '查看项目',
    },
    contact: {
      title: '联系我',
      subtitle: '有项目合作或工作机会？欢迎通过以下方式与我取得联系。',
      emailLabel: '邮箱',
      githubLabel: 'GitHub',
    },
    footer: {
      copyright: '© {year} 个人作品集. All rights reserved.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hello, I'm",
      name: 'Zhu Yanjun',
      role: 'AI Programming Learner',
      viewProjects: 'View Projects',
      contactMe: 'Contact Me',
    },
    about: {
      title: 'About Me',
      description:
        "I'm an AI programming beginner, learning Python, Git / GitHub, and Claude Code.",
    },
    projects: {
      title: 'Projects',
      subtitle:
        'Here are some of my projects, each showcasing different technical challenges and solutions.',
      empty: 'Projects are coming soon, stay tuned...',
      viewProject: 'View Project',
    },
    contact: {
      title: 'Contact',
      subtitle:
        'Have a project or job opportunity? Feel free to reach out.',
      emailLabel: 'Email',
      githubLabel: 'GitHub',
    },
    footer: {
      copyright: '© {year} Personal Portfolio. All rights reserved.',
    },
  },
  ja: {
    nav: {
      home: 'ホーム',
      about: '自己紹介',
      projects: 'プロジェクト',
      contact: 'お問い合わせ',
    },
    hero: {
      greeting: 'こんにちは、',
      name: '朱延俊',
      role: 'AIプログラミング学習者',
      viewProjects: 'プロジェクトを見る',
      contactMe: 'お問い合わせ',
    },
    about: {
      title: '自己紹介',
      description:
        'AIプログラミングの初心者で、Python、Git / GitHub、Claude Codeを学んでいます。',
    },
    projects: {
      title: 'プロジェクト',
      subtitle:
        '以下は私が開発に携わったプロジェクトの一部で、それぞれ異なる技術的課題と解決策を示しています。',
      empty: 'プロジェクトは準備中です。お楽しみに…',
      viewProject: 'プロジェクトを見る',
    },
    contact: {
      title: 'お問い合わせ',
      subtitle:
        'プロジェクトの協力や仕事の機会がありましたら、お気軽にお問い合わせください。',
      emailLabel: 'メール',
      githubLabel: 'GitHub',
    },
    footer: {
      copyright: '© {year} 個人ポートフォリオ. All rights reserved.',
    },
  },
}

export default translations
