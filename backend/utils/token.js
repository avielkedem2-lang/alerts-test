import jwt from "jsonwebtoken"
import "dotenv/config";



export function createToken(id){
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_TIME});
}



export function verifyToken(token) {
    try {
        return jwt.verify(token, process.env.JWT_SECRET)
    } catch (err) {
        return false
    }
}

export function decodeToken(token) {
    return jwt.decode(token)
};
