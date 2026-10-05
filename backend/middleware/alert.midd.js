import { ObjectId } from "mongodb";
import { bodyValidation } from "../utils/zod.validation.js"

export const checkBody = (req, res, next) => {
    const body = req.body
    if (bodyValidation.safeParse(body).success === false) return res.status(400).json({ message: "bad request" });
    next()
}



export const checkParams = (req, res, next) => {
    const id = req.params.id
    if (!ObjectId.isValid(id)) return res.status(400).json({message: "The id is not good"});
    next()
} 