const { MovieUpload } = require('../../middlewares/file')
const { createMovie } = require('../controladores/movies')

const MoviesRouter=require("express").Router();

MoviesRouter.post('/', MovieUpload.single('img'), createMovie);

module.exports= {MoviesRouter}