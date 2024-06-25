const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const movieStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "Movies",
    allowedFormats: ["jpg", "png", "jpeg", "gif", "webp"],
  },
});

const plataformStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "Plataform",
    allowedFormats: ["jpg", "png", "jpeg", "gif", "webp"],
  },
});

const MovieUpload = multer({ movieStorage });
const PlataformUpload = multer({ plataformStorage });

module.exports = { MovieUpload, PlataformUpload };
