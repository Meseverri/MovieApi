const { MovieUpload } = require('../../middlewares/file')
const { createMovie, deleteMovie } = require('../controladores/movies')

const MoviesRouter=require("express").Router();

MoviesRouter.post('/', MovieUpload.single('img'), createMovie);
MoviesRouter.delete('/:movieId',deleteMovie);

module.exports= {MoviesRouter}