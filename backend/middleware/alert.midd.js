import { ObjectId } from "mongodb";
import { bodyValidation , updateValidation} from "../utils/zod.validation.js"

export const checkBody = (req, res, next) => {
    const body = req.body
    if (body.x){
        const lat = body.x
        delete body.x
        body.lat = lat
    }
    if (body.y){
        const lon = body.y
        delete body.y
        body.lon = lon
    }
    if (bodyValidation.safeParse(body).success === false) return res.status(400).json({ message: "bad request" });
    next()
}



export const checkParams = (req, res, next) => {
    const id = req.params.id
    console.log(id);
    
    if (!ObjectId.isValid(id)) return res.status(400).json({message: "The id is not good"});
    next()
}




export const checkBodyUpdate = (req, res, next) => {
    const body = req.body
    if (body.x){
        const lat = body.x
        delete body.x
        body.lat = lat
    }
    if (body.y){
        const lon = body.y
        delete body.y
        body.lon = lon
    }
    if (updateValidation.safeParse(body).success === false) return res.status(400).json({ message: "bad request" });
    next()
}