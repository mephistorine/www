import type { ArticleTag } from "../models"

const tags: Map<string, ArticleTag> = new Map()

tags.set(
  "css",
  {
    name: "CSS",
    slug: "css",
    createTime: new Date("2022-07-05T18:50:42.284Z"),
    backgroundColor: "hsl(217,91%,60%, 50%)",
    textColor: ""
  }
)

tags.set(
  "angular",
  {
    name: "Angular",
    slug: "angular",
    createTime: new Date("2022-07-05T18:50:42.284Z"),
    backgroundColor: "hsla(358,100%,65%,0.5)",
    textColor: ""
  }
)

tags.set(
  "html",
  {
    name: "HTML",
    slug: "html",
    createTime: new Date("2022-07-05T18:50:42.284Z"),
    backgroundColor: "hsla(358,100%,65%,0.5)",
    textColor: ""
  }
)

export function getTag(slug: string): ArticleTag | undefined {
  return tags.get(slug)
}

export function getAllTags(): readonly ArticleTag[] {
  return Array.from(tags.values())
}

export {
  tags as TAGS
}