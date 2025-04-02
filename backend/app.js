import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import router from "./routes/route.js"
import connectDb from "./db/connectDb.js"
dotenv.config({
    path: "./config/config.env"
})
const app = express()
app.use(cors())
app.use(express.json())
app.use("/api/v1", router)
connectDb()
export default app