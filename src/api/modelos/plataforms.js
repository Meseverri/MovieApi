const mongoose = require("mongoose");

const plataformSchema = new mongoose.Schema(
  {
    plataformName: { type: String },
    movieList: [{ type: mongoose.Types.ObjectId, ref: "Movie" }],
    url: { type: String },
    logo: { type: String, trim: true },
  },
  {
    timestamps: true,
  }
);

const Plataform=mongoose.model("Plataform",plataformSchema,"plataforms");
module.exports={Plataform};