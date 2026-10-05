import {MongoClient} from "mongodb"
import "dotenv/config"

const MONGO_DB_URL = process.env.MONGO_DB_URL

const client = new MongoClient(MONGO_DB_URL)



export async function connectionToMongo() {
    try {
        await client.connect()
        console.log("connection success");
    } catch (err) {
        console.log("connection failed");
    }
}

const db = client.db("alerts-test");

export default db;