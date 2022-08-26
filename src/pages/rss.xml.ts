import { site } from "./../static-data/site"
import rss from '@astrojs/rss'

const postsResult = import.meta.glob("./articles/**/*.mdx", { eager: true })
const articles = Object.values(postsResult)

export const get = () => {
  return rss({
    title: site.name,
    description: site.description,
    site: import.meta.env.SITE,
    // @ts-ignore
    items: articles.map(({ frontmatter }) => {
      return {
        title: frontmatter.title,
        link: new URL(frontmatter.url, import.meta.env.SITE),
        pubDate: new Date(frontmatter.createTime),
        description: frontmatter.description
      }
    })
  })
}