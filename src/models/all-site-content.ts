import type { Article } from "./article"
import type { Talk } from "./talk"

export interface ArticleEntity {
  type: "ARTICLE"
  value: Article
  url: string
}

export interface TalkEntity {
  type: "TALK"
  value: Talk
}

export type SiteEntity = ArticleEntity | TalkEntity

export interface AllSiteData {
  entities: readonly SiteEntity[]
}