import { EventName } from "@/interfaces/eventName";

export const EventTypeMapper = new Map<EventName, {color: string, title: string}>([
  [EventName.external_activies, {color: '#f59e0b', title: 'Atividades Externas'}],
  [EventName.planning, {color: '#facc15', title: 'Planejamento'}],
  [EventName.avaliations, {color: '#22d3ee', title: 'Avaliacoes'}],
  [EventName.projects, {color: '#ec4899', title: 'Projetos'}],
]);