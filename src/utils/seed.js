const mongoose = require("mongoose");
const { Movie } = require("../api/modelos/movies");
const { Plataform } = require("../api/modelos/plataforms");
const { connectCludinary } = require("../config/claudinary");
const { folderCleaner, creatImgClaudinary } = require("./claudinary");
const { plataformas, classicMovies } = require("./data");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();
connectCludinary();

mongoose
  .connect(process.env.acces_db)
  .then(async () => {
    await Movie.collection.drop();
    await Plataform.collection.drop();
    // folderCleaner("Movies");
    folderCleaner("Plataforms");
    const plataformsList = [];
    for (let i = 0; i < plataformas.length; i++) {
      const plataform = plataformas[i];
      let { plaraformName, url, logo } = plataform;
      logo = await creatImgClaudinary(logo, "Plataforms")

      const newPlataform = new Plataform({
        plaraformName,
        url,
        logo
      });
    for(let i=0;i<classicMovies.length)
      const plataformSaved = await newPlataform.save();
      plataformsList.push(plataformSaved);
    }
    return plataformsList
  }).then(async (ret)=>{
    console.log( ret);  
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .finally(() => mongoose.disconnect());
