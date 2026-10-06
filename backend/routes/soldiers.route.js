import express from "express"
import { createSoldier, deleteSoldier, getSoldier, loginSoldier } from "../service/soldiersService"



const router = express.Router()





router.post("/register", async (req, res) => {
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






router.post("/login", async (req, res) => {
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




router.post("/me", async (req, res) => {
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




router.post("/users/:id", async (req, res) => {
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