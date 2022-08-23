export interface Article {
  title: string
  createTime: string
  updateTime: string
  tags: readonly string[]
  icon: string
  poster: {
    src: string
  }
}