const { Genero } = require("../database/models");

module.exports = {
    getList: async (req, res) => {
        const generos = await Genero.findAll({
            include: ['canciones']
        });
        if (generos.length == 0) {
            return res.json({ mensaje: "No hay generos cargados." });
        }
        res.json(generos);
    },
}

