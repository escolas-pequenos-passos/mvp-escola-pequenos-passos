
import { EventName } from '@/interfaces/eventName';
import * as z from 'zod';

export const formSchema = z.object({
  title: z.string().min(5, {
    message: "Insira um titulo",
  }),
  type: z.nativeEnum(EventName),
  date: z.date({
    required_error: "Selecione uma data",
  }),
});