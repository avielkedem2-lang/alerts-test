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




export const updateValidation = z.object({
    displayName: z.string().min(1).optional(),
    description: z.string().min(1).optional(),
    priority: z.string().min(1).optional(),
    arena: z.string().min(1).optional(),
    status: z.string().min(1).optional(),
    lon: z.number().optional(),
    lat: z.number().optional(),
})