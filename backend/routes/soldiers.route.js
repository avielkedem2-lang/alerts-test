import express from "express"
import { createSoldier, deleteSoldier, getSoldier, loginSoldier } from "../service/soldiersService.js"
import { checkLogin, checkRegister } from "../middleware/soldiers.midd.js"
import {checkToken} from "../middleware/alert.midd.js"


const router = express.Router()





router.post("/register", checkToken,checkRegister, async (req, res) => {
    try {
        const token = req.token
        const body = req.body
        const data = await createSoldier(body, token)
        res.status(201).json({data})
    } catch (err) {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        }
        console.log(err);
    }
})






router.post("/login", checkLogin,async (req, res) => {
    try {
        const body = req.body
        const data = await loginSoldier(body)
        res.status(200).json({data})
    } catch (err) {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        }
        console.log(err);
    }
})




router.get("/me", checkToken, async (req, res) => {
    try {
        const token = req.token
        const data = await getSoldier(token)
        res.status(200).json((data))
    } catch (err) {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        }
        console.log(err);
    }
})




router.delete("/users/:id", checkToken,async (req, res) => {
    try {
        const token = req.token
        const data = await deleteSoldier(token)
        res.status(200).json((data))
    } catch (err) {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        }
        console.log(err);
    }
})





router.get("/token", checkToken, (req, res) => {
    return res.status(200).json({data: "success"})
})



export default router;