const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario');

router.post('/', usuarioController.create);
router.put('/:id', usuarioController.update);
router.delete('/:id', usuarioController.delete);
router.get('/', usuarioController.findAll);

module.exports = router;
