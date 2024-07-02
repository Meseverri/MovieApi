require("dotenv").config();
const express = require("express");
const { connectDb } = require("./src/config/db");
const { MoviesRouter } = require("./src/api/rutas/movies");
const { connectCludinary } = require("./src/config/claudinary");
const { PlataformRouter } = require("./src/api/rutas/plataforms");
const cloudinary = require("cloudinary").v2;


const app = express();
app.use(express.json()); 
connectDb();
connectCludinary();

app.use("/api/v1/movies",MoviesRouter);
app.use("/api/v1/plataforms",PlataformRouter);

app.use("*",(req,res)=>{
    res.status(404).json("Route not found")
})

const PORT=5600;
app.listen(PORT,()=>{   
    console.log(`http://localhost:${PORT}`);

})