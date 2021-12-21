const express = require('express');
const clientesController = require('../controllers/clientes.controller.js');

const router = express.Router();

router.post('/', clientesController.createCliente);
router.put('/', clientesController.updateCliente);
router.delete('/:id', clientesController.deleteCliente);
router.get('/', clientesController.getClientes);
router.get('/:id', clientesController.getCliente);

module.exports = router;