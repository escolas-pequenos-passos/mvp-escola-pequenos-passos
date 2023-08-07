import * as z from 'zod';
import { formSchema } from '../schema/formSchema';

export type FormDataDTO = z.infer<typeof formSchema>;