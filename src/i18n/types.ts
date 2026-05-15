export type Language = 'zh' | 'en' | 'ja'

export interface Translations {
  nav: {
    home: string
    about: string
    projects: string
    contact: string
  }
  hero: {
    greeting: string
    name: string
    role: string
    viewProjects: string
    contactMe: string
  }
  about: {
    title: string
    description: string
  }
  projects: {
    title: string
    subtitle: string
    empty: string
    viewProject: string
  }
  contact: {
    title: string
    subtitle: string
    emailLabel: string
    githubLabel: string
  }
  footer: {
    copyright: string
  }
}

export type TranslationsMap = Record<Language, Translations>
