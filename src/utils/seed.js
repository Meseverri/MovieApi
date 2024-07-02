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
    await folderCleaner("Movies");
    await folderCleaner("Plataforms");
    const plataformsList = [];
    for (let i = 0; i < plataformas.length; i++) {
      const plataform = plataformas[i];
      let { plaraformName, url, logo } = plataform;
      logo = await creatImgClaudinary(logo, "Plataforms");

      const newPlataform = new Plataform({
        plaraformName,
        url,
        logo,
      });
        const plataformSaved = await newPlataform.save();
        plataformsList.push(plataformSaved);
  
    }
    for (let i = 0; i < classicMovies.length; i++) {
      const { title, director, year, img, genre } = classicMovies[i];
      const randomPlataform = plataformsList[i % plataformsList.length];
      const posterImg = await creatImgClaudinary(img, "Movies");
      const newMovie = new Movie({
        title,
        director,
        year,
        plataform:randomPlataform._id,
        img:posterImg,
      });

        const movieSaved = await newMovie.save();
        randomPlataform.movieList.push(movieSaved._id);
        await Plataform.findByIdAndUpdate(randomPlataform._id,randomPlataform);
    }


  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .finally(() => mongoose.disconnect());
