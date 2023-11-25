import {z} from 'zod';


export const newPostSchema = z.object({
  title: z.string().min(3).max(300),
  description: z.string().optional(),
});

export type NewPostSchema = z.infer<typeof newPostSchema>;
