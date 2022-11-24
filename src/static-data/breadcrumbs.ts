import type { Breadcrumb } from "../models"

type BreadcrumbPages = "home" | "talks" | "articles" | "projects" | "about" | "tags" | "resume"

export const BREADCRUMBS: Record<BreadcrumbPages, Breadcrumb> = {
  home: {
    name: "Сэм Булатов",
    icon: "/assets/favicon.png",
    url: "/"
  },
  talks: {
    name: "Доклады",
    icon: "🗣",
    url: "/talks"
  },
  articles: {
    name: "Статьи",
    icon: "📚",
    url: "/articles"
  },
  projects: {
    name: "Проекты",
    icon: "🩼",
    url: "/projects"
  },
  about: {
    name: "О себе",
    icon: null,
    url: "/about"
  },
  tags: {
    name: "Метки",
    icon: null,
    url: "/tags"
  },
  resume: {
    name: "Резюме",
    icon: "🎃",
    url: "/resume"
  }
}