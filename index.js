require("dotenv").config();
const express = require("express");
const { connectDb } = require("./src/config/db");

const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    api_key: process.env.CLOUDINARY_API_KEY
})

const app = express();
app.use(express.json()); 
connectDb();

app.use("api/v1/movies",mo)
app.use("*",(req,res)=>{
    res.status(404).json("Route not found")
})

const PORT=5600;
app.listen(PORT,()=>{   
    console.log(`http://localhost:${PORT}`);

})