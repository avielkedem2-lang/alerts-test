import { ObjectId } from "mongodb";
import db from "../db/mongodb.js"


const collection = db.collection("soldiers");



async function inertSoldier(soldier) {
    const res = await collection.insertOne(soldier);
    return {_id: res.insertedId, ...soldier}
};




async function findAllSoldiers() {
    return await collection.find().toArray()
};



async function findSoldierById(id) {
    return await collection.findOne({_id: new ObjectId(id)})
}



async function findSoldierByEmail(email) {
    return await collection.findOne({email})
}



async function deleteSoldier(id) {
    return await collection.deleteOne({_id: new ObjectId(id)})
};





export default {
    inertSoldier,
    findAllSoldiers,
    findSoldierById,
    findSoldierByEmail,
    deleteSoldier,
}