const { deleteImgCloudinary } = require("../../utils/claudinary");
const { Movie } = require("../modelos/movies");
const { Plataform } = require("../modelos/plataforms");
const mongoose = require("mongoose");

const createMovie = async (req, res, next) => {
  try {
    const movie = new Movie(req.body);
    if (req.file) {
      movie.img = req.file.path;
    }

    const movieDB = await movie.save();
    return res.status(201).json(movieDB);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const deleteMovie = async (req, res) => {
  try {
    const { movieId } = req.params;

    const movieDeleted = await Movie.findByIdAndDelete(movieId);
    const plataformId = movieDeleted.plataform;
    if (!movieDeleted) {
      return res.status(404).json({ msg: "Movie not found" });
    }
    await Plataform.findByIdAndUpdate(plataformId, {
      $pull: { movieList: movieDeleted._id },
    });
    deleteImgCloudinary(movieDeleted.img);

    return res.status(200).json({ msg: "movie deleted", movie: movieDeleted });
  } catch (error) {
    return res.status(400).json(error);
  }
};
const updateMovie = async (req, res) => {
  try {
    const { movieId, plataformId } = req.params;
    const movie = await Movie.findById(movieId);

    const { title, director, year } = req.body;
    const updateFields = {};
    if (title) updateFields.title = title;
    if (director) updateFields.director = director;
    if (year) updateFields.year = year;
    if (plataformId) {
      //En el caso de que haya un plataform id se aladira el id de la pelicula a la lista de peliculas
      let plataform = await Plataform.findById(plataformId);
      if (movie.plataform) {
        // si ya existia  una plataforma se eliminara el id de la pelicula de la platafdorma antigua
        plataform = await Plataform.findByIdAndUpdate(
          movie.plataform,
          {
            $pull: { movieList: movie._id },
          },
          { new: true }
        );
      }
      if (!plataform.movieList.includes(movie._id)) {
        plataform.movieList.push(movie._id);
        await plataform.save();
      }
      // const plataform = await Plataform.findByIdAndUpdate(plataformId,{$push:{movieList:movie._id}});
      updateFields.plataform = plataform._id;
    }
    if (req.file) {
      deleteImgCloudinary(movie.img);
      updateFields.img = req.file.path;
    }

    const movieUpdated = await Movie.findByIdAndUpdate(
      movie._id,
      updateFields,
      { new: true }
    );
    return res.status(200).json({ msg: "movie updated", movie: movieUpdated });
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

const getMovie = async (req, res) => {
  try {
    const { movieId } = req.params;
    const movie = await Movie.findById(movieId).populate("plataform");
    return res.status(200).json(movie);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

const getMovies = async (req, res) => {
  try {
    const allMovies = await Movie.find();
    return res.status(200).json(allMovies);
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = { updateMovie, createMovie, deleteMovie, getMovie, getMovies };
