const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produto');

router.post('/', produtoController.create);
router.put('/:id_produto', produtoController.update);
router.delete('/:id_produto', produtoController.delete);
router.get('/', produtoController.findAll);

module.exports = router;
