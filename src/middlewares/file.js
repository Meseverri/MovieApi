const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const movieStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Movies",
    allowedFormats: ["jpg", "png", "jpeg", "gif", "webp"],
  },
});

const MovieUpload = multer({ storage: movieStorage });

const plataformStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "Plataform",
    allowedFormats: ["jpg", "png", "jpeg", "gif", "webp"],
  },
});

const PlataformUpload = multer({ storage:plataformStorage });

module.exports = { MovieUpload,PlataformUpload };
