import {z} from 'zod';

export const forgotPasswordSchema = z.object({
  email: z.string().email('Email inválido'),
});

export type ForgotPasswordSchemaProps = z.infer<typeof forgotPasswordSchema>;
