import { z } from 'zod';

export const userRoleValidation = z.enum(['user', 'admin']);

export const userSchemaValidation = z.object({
  body: z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string(),
    role: userRoleValidation,
  }),
});
export const userLoginSchemaValidation = z.object({
  body: z.object({
    username: z.string(),
    password: z.string(),
  }),
});
