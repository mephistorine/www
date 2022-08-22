export function isHasEmoji(target: string): boolean {
  return /\p{Extended_Pictographic}/u.test(target)
}
