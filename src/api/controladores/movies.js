const { deleteImgCloudinary } = require("../../utils/claudinary");
const { Movie } = require("../modelos/movies");

async function createMovie(req, res, next) {
    try {
      console.log(req.body);
      const movie = new Movie(req.body);
      if (req.file) {
        console.log(req.file.path);
        movie.img= req.file.path 
      }

      const movieDB = await movie.save();
      return res.status(201).json(movieDB)
    } catch (error) {
      return res.status(400).json(error)
    }
  };


const deleteMovie= async (req,res)=>{
  try {
    const {movieId}=req.params;

    const movieDeleted=await Movie.findByIdAndDelete(movieId)
    if(!movieDeleted){
      return res.status(404).json({msg:"Movie not found"})
    }
    deleteImgCloudinary(movieDeleted.img)
    return res.status(200).json({msg:"movie deleted",movie:movieDeleted})
  } catch (error) {
    return res.status(400).json(error)
  }
}
module.exports={createMovie,deleteMovie}