const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title: { type: String },
    year: { type: Number },
    description: { type: String },
    img: { type: String, trim: true, required: false },
    plataform: [{ type: mongoose.Types.ObjectId,ref:"Plataform" }],
  },
  {
    timestamps: true,
  }
);
const Movie=mongoose.model("Movie",movieSchema,"movies");
module.exports = Movie;