import { createHash } from "../utils/hash.js"
import {registerValidation, loginValidation} from "../utils/zod.validation.js"





export const checkRegister = async (req, res, next) => {
    const body = req.body
    if (registerValidation.safeParse(body).success === false) return res.status(400).json({message: "Bad request"});
    const password = await createHash(body.password)
    req.body.password = password
    next()
}




export const checkLogin = (req, res, next) => {
    const body = req.body
    if (loginValidation.safeParse(body).success === false) return res.status(400).json({message: "Bad request"});
    next()
}



// export const checkMe =