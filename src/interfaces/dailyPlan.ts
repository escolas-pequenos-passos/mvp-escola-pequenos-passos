export enum DailyStatus {
  active = 'Ativo',
  processing = 'Processando',
  deactive = 'Desativad'
}

export interface DailyPlan {
  id: number;
  content: string;
  date: Date;
  discipline: string;
  status: DailyStatus;
  isReviewed: boolean;
  descriptionPlan: string;
}