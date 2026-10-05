import z from "zod"




export const bodyValidation = z.object({
    displayName: z.string().min(1),
    description: z.string().min(1),
    priority: z.string().min(1),
    arena: z.string().min(1),
    status: z.string().min(1),
    lon: z.number(),
    lat: z.number(),
})