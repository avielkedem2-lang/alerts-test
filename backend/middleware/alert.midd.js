import { ObjectId } from "mongodb";
import { bodyValidation , updateValidation} from "../utils/zod.validation.js"
import {verifyToken} from "../utils/token.js"

export const checkBody = (req, res, next) => {
    const body = req.body
    console.log(body);
    
    if (body.y){
        const lat = body.y
        delete body.y
        body.lat = lat
    }
    if (body.x){
        const lon = body.x
        delete body.x
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
    if (Object.keys(body).length === 0) return res.status(400).json({ message: "You cna't sand empty body" });
    if (updateValidation.safeParse(body).success === false) return res.status(400).json({ message: "bad request" });
    next()
}


export const checkToken = (req, res, next) => {
    const token = req.headers.token;
    if (!token) return res.status(400).json({ message: "Missing token"});
    const isToken = verifyToken(token)
    if (!isToken) return res.status(401).json({ message: "The token is not good"});
    req.token = token
    next()
}