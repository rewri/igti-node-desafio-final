const express = require('express');
const livrosController = require('../controllers/livros.controller.js');

const router = express.Router();

router.post('/', livrosController.createLivro);
router.put('/', livrosController.updateLivro);
router.delete('/:id', livrosController.deleteLivro);
router.get('/', livrosController.getLivros);
router.get('/:id', livrosController.getLivro);

module.exports = router;