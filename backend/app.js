import express from "express"
import cors from "cors"
import helmet from "helmet";
import "dotenv/config"
import { connectionToMongo } from "./db/mongodb.js"
import alertRouter from "./routes/alertRoute.js";
import soldierRouter from "./routes/soldiers.route.js";



const PORT = process.env.PORT
const app = express()


app.use(express.json());
app.use(cors());
app.use(helmet())
app.use("/api/alerts", alertRouter)
app.use("/api/auth", soldierRouter)







async function run() {
    await connectionToMongo()
    app.listen(PORT, () => {
        console.log("The server is running...");
    })
}

run()