const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const storage=(folderName)=>{
  return new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: folderName,
      allowedFormats: ["jpg", "png", "jpeg", "gif", "webp"],
    },
  });
}

const movieStorage= storage("Movies")
const MovieUpload = multer({ storage: movieStorage });

const plataformStorage=storage("Plataforms")
const PlataformUpload = multer({ storage:plataformStorage });

module.exports = { MovieUpload,PlataformUpload };
