const { PlataformUpload } = require("../../middlewares/file");
const { createPlataform,deletePlataform,updatePlataform,getPlataform,getPlataforms } = require("../controladores/plataforms");

const PlataformRouter =require("express").Router()
PlataformRouter.post("/",PlataformUpload.single("logo"),createPlataform)
PlataformRouter.get("/:plataformId",getPlataform)
PlataformRouter.get("/",getPlataforms)
PlataformRouter.put("/:plataformId",PlataformUpload.single("logo"),updatePlataform)
PlataformRouter.delete("/:plataformId",deletePlataform)

module.exports ={PlataformRouter}