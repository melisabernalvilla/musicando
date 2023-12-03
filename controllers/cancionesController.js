const { Cancion } = require("../database/models");

module.exports = {
  getList: async (req, res) => {
    try {
      const canciones = await Cancion.findAll();
      if (canciones.length == 0) {
        return res.json({ mensaje: "No hay canciones cargadas." });
      }
      res.json(canciones);
    } catch (error) {
      console.log(error);
    }
  },

  create: async (req, res) => {
    try {
      const nuevaCancion = {
        titulo: req.body.titulo,
        album_id: req.body.album_id,
        duracion: req.body.duracion,
        artista_id: req.body.artista_id,
        genero_id: req.body.genero_id,
      };
      console.log(nuevaCancion);
      nuevaCancion.created_at = new Date();
      const cancion = await Cancion.create(nuevaCancion);
      res.json(cancion);
    } catch (error) {
      console.log(error);
    }
  },
  findOne: async (req, res) => {
    const id = req.params.id;
    const cancion = await Cancion.findByPk(id);
    res.json(cancion);
  },
  update: async (req, res) => {
    const id = req.params.id;
    try {
      const cancionEncontrada = await Cancion.findByPk(id);
      console.log(cancionEncontrada + 'cancion encontrada')
      const datosActualizados = await Cancion.update(
        {
          titulo: req.body.titulo ? req.body.titulo : cancionEncontrada.titulo,
          album_id: req.body.album_id ? req.body.album_id : cancionEncontrada.album_id,
          duracion: req.body.duracion ? req.body.duracion : cancionEncontrada.duracion,
          artista_id: req.body.artista_id ? req.body.artista_id : cancionEncontrada.artista_id,
          genero_id: req.body.genero_id ? req.body.genero_id : cancionEncontrada.genero_id,
        },
        {
          where: { id: id },
        }
      );
      const cancionActualizada = await Cancion.findByPk(id);
      console.log(datosActualizados +  'estos son datos actualizados')
      res.json(cancionActualizada);
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res) => {
    const id = req.params.id;
    await Cancion.destroy({ where: { id } });
    res.json({  mensaje: "Canción eliminada correctamente." });
  },
};
