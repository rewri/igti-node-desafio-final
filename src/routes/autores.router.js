const express = require('express');
const autoresController = require('../controllers/autores.controller.js');

const router = express.Router();

router.post('/', autoresController.createAutor);
router.put('/', autoresController.updateAutor);
router.delete('/:id', autoresController.deleteAutor);
router.get('/', autoresController.getAutores);
router.get('/:id', autoresController.getAutor);

module.exports = router;