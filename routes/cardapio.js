const express = require('express');
const router = express.Router();
const cardapioController = require('../controllers/cardapio');

router.post('/', cardapioController.create);
router.put('/:id_cardapio', cardapioController.update);
router.delete('/:id_cardapio', cardapioController.delete);
router.get('/', cardapioController.findAll);

module.exports = router;
