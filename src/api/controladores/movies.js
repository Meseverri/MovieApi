async function createMovie(req, res, next) {
    try {
      const movie = new Movie(req.body);
  
      if (req.file) {
          img: req.file.path 
      }
  
      const movieDB = await movie.save()
      res.status(201).json(movieDB)
    } catch (error) {
      return next(error)
    }
  };

module.exports={createMovie}