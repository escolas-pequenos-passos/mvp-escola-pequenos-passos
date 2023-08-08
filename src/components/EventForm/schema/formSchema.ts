
import { EventName } from '@/interfaces/eventName';
import * as z from 'zod';

export const formSchema = z.object({
  title: z.string().min(5, {
    message: "Insira um titulo",
  }),
  type: z.nativeEnum(EventName),
  start: z.date({
    required_error: "Selecione a data inicial",
  }),
  startTime: z.string().optional(),
  end: z.date({
    required_error: "Selecione a data inicial",
  }).optional(),
  endTime: z.string().optional()
});