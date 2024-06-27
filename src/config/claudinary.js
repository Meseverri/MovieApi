const cloudinary = require("cloudinary").v2;


const connectCludinary=()=>{
    try {
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_secret: process.env.CLOUDINARY_API_SECRET,
            api_key: process.env.CLOUDINARY_API_KEY
        })
    } catch (error) {
        console.log(error)
    }
};

// Intenta subir una imagen



module.exports={connectCludinary}

