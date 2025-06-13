import { z } from "zod"

// Sign Up

export interface SignupPayload {
  first_name: string
  last_name: string
  email: string
  password: string
}

export const signupSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
  confirmPassword: z.string().min(1, "Confirm password is required"),
})
.refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
})

export const signupResponseSchema = z.object({
  access_token: z.string(),
  user: z.object({
    id: z.string(),
  }),
})

export type SignupSchemaType = z.infer<typeof signupSchema>
export type SignupResponseType = z.infer<typeof signupResponseSchema>

// Login

export const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
})

export const loginResponseSchema = z.object({
  // refresh: z.string(),
  access_token: z.string(),
  user: z.object({
    id: z.string(),
  }),
})

export type LoginSchemaType = z.infer<typeof loginSchema>
export type LoginResponseType = z.infer<typeof loginResponseSchema>

// Refresh

export const refreshResponseSchema = z.object({
  access: z.string(),
})

// Reset password

export const resetPasswordSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
})

export const resetPasswordConfirmSchema = z.object({
  password: z.string().min(1, "Password is required"),
  confirmPassword: z.string().min(1, "Confirm password is required"),
})
.refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
})

export const resetQuerySchema = z.object({
  uid: z.string().min(1, "UID is missing"),
  token: z.string().min(1, "Token is missing"),
})

export type ResetPasswordSchemaType = z.infer<typeof resetPasswordSchema>
export type ResetPasswordConfirmType = z.infer<typeof resetPasswordConfirmSchema>
