const { deleteImgCloudinary } = require("../../utils/claudinary");
const { Movie } = require("../modelos/movies");
const { Plataform } = require("../modelos/plataforms");

const createPlataform = async (req, res) => {
  try {
    const plataform = new Plataform(req.body);
    if (req.file) {
      plataform.logo = req.file.path;
    }
    const plataformSaved = await plataform.save();
    return res.status(201).json(plataformSaved);
  } catch (error) {
    return res.status(401).json(error);
  }
};

const deletePlataform = async (req, res) => {
  try {
    const { plataformId } = req.params;
    const plataformDeleted = await Plataform.findByIdAndDelete(plataformId);
    if (!plataformDeleted)
      return res.status(404).json({ msg: "Plataform not found" });
    deleteImgCloudinary(plataformDeleted.logo);

    for (let i = 0; i < plataformDeleted.movieList.length; i++) {
      await Movie.findByIdAndUpdate(
        plataformDeleted.movieList[i],
        { plataform: null },
        { new: true }
      );
    }

    return res.status(200).json(plataformDeleted);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

const updatePlataform = async (req, res) => {
  try {
    const { plataformName, url } = req.body;
    let logo=false;
    if (req.file) logo = req.file.path;
    const { plataformId } = req.params;
    const plataform = await Plataform.findById(plataformId);
    if (!plataform) return res.status(400).json({ msg: "plataform not found" });

    if (plataformName) plataform.plataformName = plataformName;
    if (url) plataform.url = url;
    if (logo) {
      deleteImgCloudinary(plataform.logo);
      plataform.logo = logo;
    };
    const plataformsaved =await plataform.save()
    return res.status(200).json(plataform);
  } catch (error) {
    console.log(error)
    return res.status(400).json(error);
  }
};

const getPlataform = async (req, res) => {
  try {
    const { plataformId } = req.params;
    const plataform = await Plataform.findById(plataformId).populate(
      "movieList"
    );
    if (!plataform) return res.status(404).json({ msg: "Plataform not found" });
    return res.status(200).json(plataform);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const getPlataforms = async (req, res) => {
  try {
    const allPlataforms = await Plataform.find();
    return res.status(200).json(allPlataforms);
  } catch (error) {
    return res.status(400).json(error);
  }
};
module.exports = {
  createPlataform,
  deletePlataform,
  updatePlataform,
  getPlataform,
  getPlataforms,
};
