import type { Article } from "./../models";

export function articleCompare(a: Article, b: Article): number {
  return Date.parse(b.createTime) - Date.parse(a.createTime)
}