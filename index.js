require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors")

const personRoutes = require("./routes/personRoutes")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/person", personRoutes)

const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

mongoose
    .connect(
        "mongodb+srv://DB_USER:DB_PASSWORD@apicluster.coitp.mongodb.net/bancodaapi?retryWrites=true&w=majority"
    )
    .then(()=>{
        console.log("conectamos ao mongo!")
        app.listen(3000)
})
    .catch((err) => console.log(err))