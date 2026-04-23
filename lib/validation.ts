import { z } from 'zod';

export const signinValidation = z.object({
  email: z.email('Invalid email').min(1, 'Required'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      'Password must contain at least one special character'
    ),
});

export type SignInFormData = z.infer<typeof signinValidation>;

export const signupValidation = z
  .object({
    email: z.email('Invalid email'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters long')
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .regex(/[0-9]/, 'Password must contain at least one number')
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        'Password must contain at least one special character'
      ),
    confirm_password: z
      .string()
      .min(8, 'Password must be at least 8 characters long')
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .regex(/[0-9]/, 'Password must contain at least one number')
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        'Password must contain at least one special character'
      ),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'Password and confirm password must match',
    path: ['confirm_password'],
  });

export type SignUpFormData = z.infer<typeof signupValidation>;
