import { ObjectId } from "mongodb";
import db from "../db/mongodb.js";



const collection = db.collection("alerts");



async function findAllAlerts(){
    return await collection.find().toArray()
};



async function findAlertById(id) {
    return await collection.findOne({_id: new ObjectId(id)})
};



async function insertAlert(alert) {
    const res = await collection.insertOne(alert);
    return {_id: res.insertedId, ...alert}
};


async function deleteAlert(id) {
    return await collection.deleteOne({_id: new ObjectId(id)})
};


async function updateAlert(id, alert) {
    return await collection.updateOne({_id: new ObjectId(id)}, {$set: {...alert}})
}




export default {
    findAllAlerts,
    findAlertById,
    insertAlert,
    deleteAlert,
    updateAlert,
}