const express = require("express");

const cors = require("cors");

const app = express();
require("dotenv").config();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT
const connect = require("./configs/db")

const  userController= require("./controllers/user.controller");


app.use("/UserData",userController)

app.listen(PORT, async()=>{
    try {
        await connect();
        console.log("listening port 8080")
    } catch (error) {
        console.log(error);
    }
})