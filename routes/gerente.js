const express = require('express');
const router = express.Router();
const gerenteController = require('../controllers/gerente');

router.post('/', gerenteController.create); 
router.get('/', gerenteController.findAll); 
router.get('/:id_gerente', gerenteController.findById); 
router.put('/:id_gerente', gerenteController.update); 
router.delete('/:id_gerente', gerenteController.delete); 

module.exports = router;
