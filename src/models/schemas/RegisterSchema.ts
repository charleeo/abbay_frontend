import { z, ZodType } from "zod";

import { IRegisterFormDta } from "../types/IRegisterFormDta";
const genders:string[]|any = ["male",'female']

export const RegisterSchema: ZodType<IRegisterFormDta> = z
.object({
  email: z.string().email(),
  password: z.string().min(5).max(20),
  confirmPassword: z.string().min(5).max(20),
  bio: z.string().min(30),
  gender: z.any().optional(),
  lastname:z.string().min(2).optional(),
  firstname:z.string().min(2)
})
.refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
}).refine((data) => !genders.includes((data.gender)), {
    message: "Invalid gender type provided",
    path: ["gender"],
})


  