const express = require('express');

const router = express.Router();

const productosController = require('../controllers/productosControllers');

module.exports= function(){
    router.get('/productos',productosController.lista);
    router.get('/productos/:id',productosController.seleccionado);
    router.post('/productos',productosController.agregar);
    router.put('/productos/:id',productosController.actualizar);
    router.delete('/productos/:id',productosController.eliminar);
    return router;
}