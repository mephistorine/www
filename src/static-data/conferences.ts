import type { Conference } from "../models"

const conferences: readonly Conference[] = [
  {
    id: "rnd-tech-conf-2021",
    name: "RndTechConf 2021",
    url: "https://rndtech.pro/",
    location: "Россия, Ростов-на-Дону"
  },
  {
    id: "merge-conf-2021",
    name: "MergeConf 2021",
    url: "https://mergeconf.ru/",
    location: "Россия, Казань; Иннополис"
  },
  {
    id: "404-fest-2021",
    name: "404 Fest 2021",
    url: null,
    location: "Россия, Самара"
  },
  {
    id: "frontendconf-2021",
    name: "FrontendConf 2021",
    url: "https://frontendconf.ru",
    location: "Россия, Москва"
  },
  {
    id: "krddevdays-3",
    name: "KrdDevDays 3",
    url: "https://krd.dev/",
    location: "Россия, Краснодар"
  },
  {
    id: "ng-rostov-2019",
    name: "NgRostov 2019",
    url: null,
    location: "Россия, Ростов-на-Дону"
  },
  {
    id: "web-standards-days-2019",
    name: "Web Standards Days 2019",
    url: "https://wsd.events",
    location: "Россия, Москва"
  },
  {
    id: "sochi-evening-of-knowledge",
    name: "Evening of Knowledge",
    url: "https://itsochi.pro/events/july-meetup-evening-of-knowledge/",
    location: "Россия, Сочи"
  },
  {
    id: "rnd-frontend-picnic-2022",
    name: "Frontend/JS-пикник в Зеленом театре",
    url: "https://rndtech.timepad.ru/event/2124507/",
    location: "Россия, Ростов-на-Дону"
  }
]

export function getAllConferences(): readonly Conference[] {
  return conferences
}

export function getConference(id: string): Conference | null {
  return conferences.find((t) => t.id === id) ?? null
}