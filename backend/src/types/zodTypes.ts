import { z } from "zod";

export const signupSchema = z.object({
  name: z.string(),
  email: z.email(),
  password: z.string(),
});


export const signinSchema = z.object({
  email: z.email(),
  password: z.string(),
});

export const credentialsSchema = z.object({
  key: z.string(),
  value: z.string(),
  type: z.enum(["EMAIL", "TELEGRAM"]),
  imageUrl: z.string(),
});

export const updateWrokflowSchema = z.object({
  title: z.string().optional(),
  updatedAt: z.date().optional(),
  activeStatus: z.boolean().optional(),
  trigger: z.object({
    name: z.string().optional(),
    type: z.enum(["WEBHOOK", "MANUAL"]).optional(),
  }).optional(),
  actions: z.array(z.object({
    name: z.string().optional(),
    index: z.number().optional(),
    type: z.enum(["EMAIL", "TELEGRAM"]).optional(),
  })).optional()
});
