import type { Talk } from "../models"

const talks: readonly Talk[] = [
  {
    id: "css-container-queries-and-units",
    title: "CSS Container Queries and Units",
    description: `
      <p>С годами популяризации интернета интерфейсы становились все сложнее, но вместе с этим развивались и инструменты, которые
      мы используем для создания этих самых интерфейсов. В этом докладе я хочу вам рассказать об еще одном таком инструменте «CSS
      Container Queries» и «CSS Container units».</p>
      <p>В будущем эти возможности языка CSS помогут нам делать наши интерфейсы удобнее и адаптивнее.</p>
    `
  },
  {
    id: "seven-future-wonders-of-css",
    title: "Семь Будущих Чудес CSS",
    description: `Как часто вы читаете спецификации? Не очень? Да не проблема. Уже догадались, к чему идёт? Развитие спецификаций, стадии и процесс утверждения. Семь интереснейших спецификаций, связанные с доступностью, смешиванием цветов, управлением прокруткой, CSS-фигурами и другим. А вишенкой на торте — декларативный подход к написанию CSS в JS.`
  },
  {
    id: "nestjs-for-frontend-devs",
    title: "NestJS - бэкенд для фронтедеров",
    description: "NodeJS показал миру что можно писать серверные приложение на JS. За последующие годы Node стал лучше и стабильнее. С появлением Express. Писать приложения для веба, стало еще проще. Я расскажу про NestJS - молодой и амбициозный фреймворк, написанный на Typescript и быстро набирающий популярность и признание среди разработчиков."
  },
  {
    id: "rxjs-schedulers",
    title: "Таинственные шедулеры RxJS в море асинхронных чудовищ",
    description: "Буду разбирать внутренности того как RxJS работает с асинхронщиной, какие могут встретиться подводные камни и когда их нужно использовать, буду затрагивать тему шуделеров и операторов по типу observeOn. Комбинация опыта работы с RxJS и объяснения внутренной реализации."
  },
  {
    id: "deep-dive-into-reactive-workshop",
    title: "Глубокое погружение в реактивное программирование на примере RxJS",
    description: "Вы слышали про RxJS? Возможно, но это не точно. А про реактивное программирование? Скорее да. А вот про такую характеристику как «Реактивность» вы слышали наверняка! Но что это такое? Зачем это нужно? Кому это может быть полезным? На этом воркшопе я отвечу на эти вопросы, а так же научу вас этим пользоваться! Погружаемся в реактивщину :)"
  },
  {
    id: "simplify-life-with-rxjs",
    title: "Упрощаем жизнь с RxJS. Что это такое и зачем это нужно?",
    description: ""
  }
]

export function getAllTalks(): readonly Talk[] {
  return talks
}

export function getTalk(id: string): Talk | null {
  return talks.find((t) => t.id === id) ?? null
}