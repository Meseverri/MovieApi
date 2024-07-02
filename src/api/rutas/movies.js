const { MovieUpload } = require('../../middlewares/file')
const { createMovie, deleteMovie,getMovie,getMovies,updateMovie } = require('../controladores/movies')

const MoviesRouter=require("express").Router();

MoviesRouter.post('/', MovieUpload.single('img'), createMovie);
MoviesRouter.delete('/:movieId',deleteMovie);
MoviesRouter.get('/:movieId',getMovie);
MoviesRouter.get('/',getMovies);
MoviesRouter.put("/:movieId/:plataformId",MovieUpload.single('img'),updateMovie)



module.exports= {MoviesRouter}