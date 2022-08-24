export interface Speach {
  conferenceId: string
  talkId: string
  language: "RU" | "EN"
  time: string
  slidesUrl: string | null
  videoUrl: string | null
  notesUrl: string | null
  siteUrl: string | null
}