const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedido');

router.post('/', pedidoController.create); 
router.get('/', pedidoController.findAll);
router.get('/:id_pedido', pedidoController.findById); 
router.put('/:id_pedido', pedidoController.update); 
router.delete('/:id_pedido', pedidoController.delete); 

module.exports = router;
