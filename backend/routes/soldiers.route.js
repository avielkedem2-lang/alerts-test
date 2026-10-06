import express from "express"
import { createSoldier, deleteSoldier, getSoldier, loginSoldier } from "../service/soldiersService"
import { checkLogin, checkRegister } from "../middleware/soldiers.midd"
import {checkToken} from "../middleware/alert.midd"


const router = express.Router()





router.post("/register",checkRegister, async (req, res) => {
    try {
        const body = req.body
        const data = await createSoldier(body)
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




router.post("/me", checkToken, async (req, res) => {
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




router.post("/users/:id", checkToken,async (req, res) => {
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







export default router;