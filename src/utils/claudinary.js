
const cloudinary = require("cloudinary").v2;
const deleteImgCloudinary = (imgUrl) => {

    //----Con los siguientes métodos de JavaScript accederemos a la ruta de la imagen, su nombre, su carpeta y el id con el que se almacena en cloudinary para localizarlo nivel a nivel.
    const public_id = imgUrlParser(imgUrl);

    //----Con el método destroy localizamos nuestro archivo e imprimimos por callback un console.log indicando que se ha podido destruir correctamente.
    cloudinary.uploader.destroy(public_id, () => {
        console.log('Image delete in cloudinary')
    })
}
const imgUrlParser=(url)=>{
    const imgSplited = url.split('/')
    const nameSplited = imgSplited.at(-1).split('.')[0]
    const folderSplited = imgSplited.at(-2);
    const public_id = `${folderSplited}/${nameSplited}`;
    return public_id
}

// const creatImgClaudinary=(src,folder)=>{
//     cloudinary.uploader.upload(
//         src,{asset_folder:folder},
//       ).then( (error, result)=> {
//         if (error) {
//           console.log(" creatImgClaudinary: Hubo un error al subir la imagen:", error);
//         } else {
//           console.log("creatImgClaudinary: Imagen subida correctamente. Resultado:", result.url);
//           return result.url;
//         }
//       });
// }

const creatImgClaudinary = async (src, folder) => {
    try {
      const result = await cloudinary.uploader.upload(src, { asset_folder: folder });
      console.log("creatImgClaudinary: Imagen subida correctamente. Resultado:", result.url);
      return result.url;
    } catch (error) {
      console.log("creatImgClaudinary: Hubo un error al subir la imagen:", error);
    }
  }
const folderCleaner=(folder)=>{
    cloudinary.api.resources( 
        { type: "upload", asset_folder: folder  },
        function (error, result) {
          if (error) {
            console.log("folderCleaner: Hubo un error al recuperar los recursos:", error);
          } else {
            result.resources.forEach( function (resource) {
               cloudinary.uploader.destroy(
                resource.public_id,
                function (error, result) {
                  if (error) {
                    console.log("folderCleaner: Hubo un error al eliminar el recurso:", error);
                  } else {
                    console.log(
                      "folderCleaner: Recurso eliminado correctamente. Resultado:",
                      result
                    );
                  }
                }
              );
            });
          }
        }
      );
}
module.exports = { deleteImgCloudinary,folderCleaner,creatImgClaudinary}