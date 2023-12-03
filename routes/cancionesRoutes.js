const express = require('express');
const router = express.Router();
const cancionesController = require ('../controllers/cancionesController');

// Muestra todo el listado de las canciones con sus propiedades
router.get('/', cancionesController.getList)

// Crea un nuevo registro de una cancion
router.post('/create', cancionesController.create)

// // Muestra una cancion
router.get('/:id', cancionesController.findOne)

// // Edita una cancion
router.put('/update/:id', cancionesController.update)

// // Elimina una cancion
router.delete('/delete/:id', cancionesController.delete)


module.exports = router;
