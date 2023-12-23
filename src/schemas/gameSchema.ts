import * as z from "zod";

export const gameFormSchema = z.object({
    playerName: z.string().min(3, "minimo de caracteres 3")
});