import { z } from "zod";

export const partnerRequestSchemas = z.object({
  businessName: z
    .string({ required_error: "Please enter your business name" })
    .min(1, { message: "Business Name is required" })
    .max(100, { message: "Business Name cannot exceed 100 characters" }),

  businessAddress: z
    .string({ required_error: "Please enter your business address" })
    .min(1, { message: "Business Address is required" })
    .max(255, { message: "Business Address cannot exceed 255 characters" }),

  taxIdentificationNumber: z
    .string({ required_error: "Please enter your tax identification number" })
    .min(1, { message: "Tax Identification Number is required" })
    .max(20, {
      message: "Tax Identification Number cannot exceed 20 characters",
    }),

  accountNumber: z
    .string({ required_error: "Please enter your account number" })
    .min(1, { message: "Account Number is required" })
    .max(20, { message: "Account Number cannot exceed 20 characters" }),

  bankName: z
    .string({ required_error: "Please enter your bank name" })
    .min(1, { message: "Bank Name is required" })
    .max(100, { message: "Bank Name cannot exceed 100 characters" }),

  idType: z
    .string({ required_error: "Please select your identification type" })
    .refine(
      (val) => ["PASSPORT", "NATIONAL_ID", "DRIVER_LICENSE"].includes(val),
      {
        message: "Invalid identification type",
      }
    ),

  idNumber: z
    .string({ required_error: "Please enter your ID number" })
    .min(1, { message: "ID Number is required" })
    .max(50, { message: "ID Number cannot exceed 50 characters" }),
  termsAgreed: z.boolean({
    required_error: "Please agree to the terms and conditions",
  }),
});

export const addSlotZodSchema = z.object({
  time: z
    .array(z.string().min(1)) // Assuming your time range picker returns an array of strings (start time, end time)
    .length(2, "Both start and end times are required.")
    .refine(
      ([start, end]) => {
        // Custom validation logic for time range
        return (
          new Date(`1970-01-01T${start}:00Z`) <
          new Date(`1970-01-01T${end}:00Z`)
        );
      },
      {
        message: "End time must be later than start time.",
      }
    ),
});
