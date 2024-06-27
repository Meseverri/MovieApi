const mongoose = require("mongoose");
const { Movie } = require("../api/modelos/movies");
const { Plataform } = require("../api/modelos/plataforms");
const { connectCludinary } = require("../config/claudinary");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();
connectCludinary();

mongoose
  .connect(process.env.acces_db)
  .then(async () => {
    await Movie.collection.drop();
    await Plataform.collection.drop();

    
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .finally(() => mongoose.disconnect());

let upload = false;
if (upload) {
  cloudinary.uploader.upload(
    "./src/utils/movieAssets/godfather.jpg",
    function (error, result) {
      if (error) {
        console.log("Hubo un error al subir la imagen:", error);
      } else {
        console.log("Imagen subida correctamente. Resultado:", result);

        // Intenta recuperar la imagen
        var url = cloudinary.url(result.public_id, {
          width: 100,
          height: 150,
          crop: "fill",
        });
        console.log("URL de la imagen:", url);
      }
    }
  );
  var folder = "nombre_de_tu_carpeta";

  cloudinary.api.resources(
    { type: "upload", prefix: folder + "/" },
    function (error, result) {
      if (error) {
        console.log("Hubo un error al recuperar los recursos:", error);
      } else {
        result.resources.forEach(function (resource) {
          cloudinary.uploader.destroy(
            resource.public_id,
            function (error, result) {
              if (error) {
                console.log("Hubo un error al eliminar el recurso:", error);
              } else {
                console.log(
                  "Recurso eliminado correctamente. Resultado:",
                  result
                );
              }
            }
          );
        });
      }
    }
  );
  var image = "nombre_de_tu_imagen";

  cloudinary.api.resources_by_tag(
    folder,
    { type: "upload", prefix: folder + "/" + image },
    function (error, result) {
      if (error) {
        console.log("Hubo un error al recuperar los recursos:", error);
      } else {
        if (result.resources.length > 0) {
          console.log("La imagen ya existe en la carpeta.");
        } else {
          console.log("La imagen no existe en la carpeta.");
          // Aquí puedes agregar el código para guardar la imagen...
        }
      }
    }
  );
}
