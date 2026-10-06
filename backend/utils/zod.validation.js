import z from "zod"




export const bodyValidation = z.object({
    displayName: z.string().min(1),
    description: z.string().min(1),
    priority: z.enum(["Low", "Medium", "High", "Critical"]),
    arena: z.enum(["North", "South", "Center"]),
    status: z.enum(["Active", "Handled"]),
    lon: z.number(),
    lat: z.number(),
})




export const updateValidation = z.object({
    displayName: z.string().min(1).optional(),
    description: z.string().min(1).optional(),
    priority: z.enum(["Low", "Medium", "High", "Critical"]).optional(),
    arena: z.enum(["North", "South", "Center"]).optional(),
    status: z.enum(["Active", "Handled"]).optional(),
    lon: z.number().optional(),
    lat: z.number().optional(),
});




export const registerValidation = z.object({
    username: z.string().min(1),
    password: z.string().min(4),
    email: z.email(),
    role: z.enum(["arena_user", "general_user", "admin"]),
    assignedArena: z.enum(["North", "South", "Center", "All"])
})



export const loginValidation = z.object({
    password: z.string().min(4),
    email: z.email(),
})