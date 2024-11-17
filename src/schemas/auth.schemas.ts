import { z } from "zod";

export const loginZodSchema = z.object({
    email: z.string({required_error:'Please enter your email'}),
    password: z.string({required_error:'Please enter your password'}),
})