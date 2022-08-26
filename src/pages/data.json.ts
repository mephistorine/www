import type { AllSiteData, Article, ArticleEntity, Talk, TalkEntity } from "../models"
import { getAllTalks } from "../static-data"

interface FileData<T> {
  frontmatter: T
  url: string
  file: string
}

const articleFiles = import.meta.glob("./articles/**/*.mdx", { eager: true })

const articles: readonly FileData<Article>[] = Object.values(articleFiles) as FileData<Article>[]
const talks: readonly Talk[] = getAllTalks()

export async function get() {
  const result: AllSiteData = {
    entities: [
      ...articles.map((article) => ({ type: "ARTICLE", value: article.frontmatter, url: article.url } as ArticleEntity)),
      ...talks.map((talk) => ({ type: "TALK", value: talk } as TalkEntity))
    ]
  }

  return {
    body: JSON.stringify(result)
  }
}