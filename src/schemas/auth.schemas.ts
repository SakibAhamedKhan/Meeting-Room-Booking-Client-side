import { z } from "zod";

export const loginZodSchema = z.object({
    email: z.string({required_error:'Please enter your email'}),
    password: z.string({required_error:'Please enter your password'}),
})

export const registerZodSchema = z.object({
    email: z.string({required_error:'Please enter your email'}),
    password: z.string({required_error:'Please enter your password'}),
    name: z.string({required_error:'Please enter your name'}),
    phone: z.string({required_error:'Please enter your phone number'}),
    address: z.string({required_error:'Please enter your address'}),
})