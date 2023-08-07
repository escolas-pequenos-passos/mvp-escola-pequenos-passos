import { EventName } from "@/interfaces/eventName";

export const EventTypeMapper = new Map<EventName, {color: string, title: string}>([
  [EventName.external_activies, {color: '#f59e0b', title: 'Atividades Externas'}],
  [EventName.planning, {color: '#facc15', title: 'Planejamento'}],
  [EventName.avaliations, {color: '#22d3ee', title: 'Avaliacoes'}],
  [EventName.projects, {color: '#ec4899', title: 'Projetos'}],
]);


export const EventToType = new Map<EventName, string>([
  [EventName.external_activies, 'Atividades Externas'],
  [EventName.planning, 'Planejamento'],
  [EventName.avaliations, 'Avaliacoes'],
  [EventName.projects, 'Projetos'],
]);