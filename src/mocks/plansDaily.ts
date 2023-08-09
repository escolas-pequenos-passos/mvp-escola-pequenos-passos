
import { DailyStatus } from "@/interfaces/dailyPlan";

export const plansDaily = [
  {
    id: 1,
    content: 'Literatura teste',
    date: new Date('2023-08-08'),
    discipline: 'Portugues',
    status: DailyStatus.active,
    isReviewed: false,
    descriptionPlan: '<p>Conteudo</p>'
  },
  {
    id: 2,
    content: 'O planeta terra',
    date: new Date('2023-08-10'),
    discipline: 'Ciencias',
    status: DailyStatus.active,
    isReviewed: true,
    descriptionPlan: '<p>Conteudo</p>'
  },
  {
    id: 3,
    content: 'Letra Q',
    date: new Date('2023-08-08'),
    discipline: 'Portugues',
    status: DailyStatus.active,
    isReviewed: true,
    descriptionPlan: '<p>Conteudo</p>'
  },
  {
    id: 4,
    content: 'Numero primos',
    date: new Date('2023-08-12'),
    discipline: 'Matematica',
    status: DailyStatus.active,
    isReviewed: false,
    descriptionPlan: '<p>Conteudo</p>'
  },
  {
    id: 5,
    content: 'Grupos sociais',
    date: new Date('2023-08-20'),
    discipline: 'Historia',
    status: DailyStatus.active,
    isReviewed: true,
    descriptionPlan: '<p>Conteudo</p>'
  }
]