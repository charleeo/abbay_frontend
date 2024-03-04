import { z, ZodType } from "zod";

import { ILoginData } from "../types/ILoginData";

export const loginSchema: ZodType<ILoginData> = z
.object({
  email: z.string().email(),
  password: z.string().min(5).max(20),
  remember: z.boolean().optional()
  
})

