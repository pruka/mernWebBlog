import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log("MongoDB is connnected")
    })
    .catch((err) => {
        console.log(err)
    })

const app = express()

app.get("/", (req, res) => {
    res.send("<h1>hello</h1>")
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})