import express from "express"
import { createAlert, deleteAlertFromDb, getAll, getById, updateAlert } from "../service/alertService.js";
import { checkBody, checkBodyUpdate, checkParams, checkToken } from "../middleware/alert.midd.js";



const router = express.Router();



router.get("/", checkToken, async (req, res) => {
    try {
        const token = req.token
        const data = await getAll(token)
        res.status(200).json({ data })
    } catch (err) {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        };
        console.log(err);
    }
})







router.get("/:id", checkToken, checkParams, async (req, res) => {
    try {
        const token = req.token
        const id = req.params.id;
        const data = await getById(id, token)
        res.status(200).json({ data })
    } catch (err) {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        };
        console.log(err);
    }
})






router.post("/", checkToken, checkBody, async (req, res) => {
    try {
        const token = req.token
        const body = req.body
        const data = await createAlert(body, token)
        res.status(201).json({ data })
    } catch (err) {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        };
        console.log(err);
    }
})





router.delete("/:id", checkToken, checkParams, async (req, res) => {
    try {
        const token = req.token
        const id = req.params.id
        const data = await deleteAlertFromDb(id, token);
        res.status(200).json({ data })
    } catch (err) {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        };
        console.log(err);
    }
})




router.patch("/:id", checkToken, checkParams, checkBodyUpdate, async (req, res) => {
    try {
        const token = req.token
        const id = req.params.id
        const body = req.body
        const data = await updateAlert(id, body, token)
        res.status(200).json({ data })
    } catch (err) {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        };
        console.log(err);
    }
})


export default router;