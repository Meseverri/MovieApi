const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title: { type: String },
    director: { type: String },
    year: { type: Number },
    plataform: { type: mongoose.Types.ObjectId,ref:"Plataform" },
    img: { type: String, trim: true },
  },
  {
    timestamps: true,
  }
);
const Movie=mongoose.model("Movie",movieSchema,"movies");
module.exports = {Movie};