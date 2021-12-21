const VendaModel = require('../models/vendas.model.js');

async function createVenda(venda) {
    try {
        return await VendaModel.create(venda)
    } catch (error) {
        throw error;
    }
}

async function getVendas() {
    try {
        return await VendaModel.findAll()
    } catch (error) {
        throw error;
    }
}

async function getVenda(id) {
    try {
        return await VendaModel.findByPk(id)
    } catch (error) {
        throw error;
    }
}

async function deleteVenda(id) {
    try {
        return await VendaModel.destroy({
            where: {
                venda_id: id
            }
        })
    } catch (error) {
        throw error;
    }
}

async function updateVenda(venda) {
    try {
        await VendaModel.update(venda, {
            where: {
                venda_id: venda.venda_id
            }
        });
        return await getVenda(venda.venda_id);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createVenda,
    getVendas,
    getVenda,
    updateVenda,
    deleteVenda
}