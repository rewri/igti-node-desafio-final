const express = require('express');
const vendasController = require('../controllers/vendas.controller.js');

const router = express.Router();

router.post('/', vendasController.createVenda);
router.put('/', vendasController.updateVenda);
router.delete('/:id', vendasController.deleteVenda);
router.get('/', vendasController.getVendas);
router.get('/:id', vendasController.getVenda);

module.exports = router;