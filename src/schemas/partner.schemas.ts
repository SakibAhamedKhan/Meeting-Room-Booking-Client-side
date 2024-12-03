import { z } from "zod";

export const requestToCreateRoomPartner = z.object({
  name: z.string({ required_error: "Please enter your meeting room name" }),
  roomNo: z.string({ required_error: "Please enter your room number" }),
  floorNo: z.string({ required_error: "Please enter your floor number" }),
  capacity: z.string({ required_error: "Please enter your capacity number" }),
  pricePerSlot: z.string({
    required_error: "Please enter your price-per-slot number",
  }),
  googleMapURL: z
    .string({ required_error: "Please enter your meeting room Google Map URL" })
    .url("Please enter a valid URL"),
  address: z.string({
    required_error: "Please enter your meeting room address",
  }),
  description: z.string({
    required_error: "Please enter your meeting room description",
  }),
  amenities: z.array(z.string(), { required_error: "Please select amenities" }),
  extraImages: z
    .array(
      z.object({
        uid: z.string(),
        name: z.string(),
        size: z.number(),
        type: z.string(),
      })
    )
    .optional(),
  thumbnail: z
    .array(
      z.object({
        uid: z.string(),
        name: z.string(),
        size: z.number(),
        type: z.string(),
      })
    )
    .optional(),
});
