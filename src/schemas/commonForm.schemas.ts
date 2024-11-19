import { z } from "zod";

export const contactFormZodSchema = z.object({
    email: z.string({required_error:'Please enter your email'}),
    name: z.string({required_error:'Please enter your name'}),
    subject: z.string({required_error:'Please enter subject'}),
    message: z.string({required_error:'Please type message'}),
})