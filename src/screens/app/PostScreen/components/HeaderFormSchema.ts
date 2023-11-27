import {z} from 'zod';


export const headerSchema = z.object({
  text: z.string().min(1, 'Digite algo antes de enviar'),
});

export type HeaderFormSchema = z.infer<typeof headerSchema>;
