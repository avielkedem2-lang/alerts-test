import express from "express"
import { createAlert, deleteAlertFromDb, getAll, getById, updateAlert } from "../service/alertService.js";



const router = express.Router();



router.get("/", async (req, res) => {
    try {
        const data = await getAll()
        res.status(200).json({ data })
    } catch (err) {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        };
        console.log(err);
    }
})







router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await getById(id)
        res.status(200).json({ data })
    } catch (err) {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        };
        console.log(err);
    }
})






router.post("/", async (req, res) => {
    try {
        const body = req.body
        const data = await createAlert(body)
        res.status(201).json({ data })
    } catch (err) {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        };
        console.log(err);
    }
})





router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id
        const data = await deleteAlertFromDb(id);
        res.status(200).json({ data })
    } catch (err) {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        };
        console.log(err);
    }
})




router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id
        const body = req.body
        const data = await updateAlert(id, body)
        res.status(200).json({ data })
    } catch (err) {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        };
        console.log(err);
    }
})


export default router;