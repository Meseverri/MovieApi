# Movie  API
Con esta api tendras acceso a una base de datos de peliculas y su disponibilidad en sus respectivas plataformas de streaming.

## Database Schema

### Movies Schema
Este es un esquema de Mongoose para una colección de películas. Cada documento en la colección representa una película y tiene los siguientes campos:

- **Title (Título)**: Este es un campo de tipo `string` y es **obligatorio**. Representa el título de la película.

- **director**: Este es un campo de tipo `string` y es **obligatorio**. Representa el director de la película.

- **year (Año)**: Este es un campo de tipo `number` y es **obligatorio**. Representa el año de lanzamiento de la película.

- **image (Imagen)**: Este es un campo de tipo `string` y es **obligatorio**. Representa la URL de la imagen de la película.

- **genre (Género)**: Este es un campo de tipo `string`. Representa el género de la película. Este campo no es obligatorio, por lo que algunas películas pueden no tener un género especificado.

- **plataformId**: Este es un campo de tipo `array` que contiene referencias a los documentos de la plataforma en la que está disponible la película. Este campo no es obligatorio, por lo que algunas películas pueden no tener ninguna plataforma especificada.

### Plataforms Schema

Este es un esquema de Mongoose para una colección de plataformas. Cada documento en la colección representa una plataforma y tiene los siguientes campos:

- **name (Nombre)**: Este es un campo de tipo `string` y es **obligatorio**. Representa el nombre de la plataforma.

- **moviesList (Lista de películas)**: Este es un campo de tipo `array` que contiene referencias a los documentos de las películas disponibles en la plataforma. Este campo no es obligatorio, por lo que algunas plataformas pueden no tener ninguna película especificada.

- **url**: Este es un campo de tipo `string` y es **obligatorio**. Representa la URL de la plataforma.

- **logo**: Este es un campo de tipo `string` y es **obligatorio**. Representa la URL del logo de la plataforma.


Por favor, ten en cuenta que todos los campos marcados como **obligatorios** deben estar presentes para que un documento sea válido en Mongoose.