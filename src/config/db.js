const mongoose=require("mongoose")

const connectDb=async ()=>{
    try {
        await mongoose.connect(process.env.acces_db);
        console.log("connected to db")
        
    } catch (error) {
        console.log("Error" +error)
    }
}

module.exports={
    connectDb
}