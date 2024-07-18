import { z } from "zod";

export const signInSchema = z.object({
	playerName: z.string().min(3, "Deve ter no minimo 3 caracteres."),
});

export type signInRequest = z.infer<typeof signInSchema>;
