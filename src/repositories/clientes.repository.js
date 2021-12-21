const ClienteModel = require('../models/clientes.model.js');

async function createCliente(cliente) {
    try {
        return await ClienteModel.create(cliente)
    } catch (error) {
        throw error;
    }
}

async function getClientes() {
    try {
        return await ClienteModel.findAll()
    } catch (error) {
        throw error;
    }
}

async function getCliente(id) {
    try {
        return await ClienteModel.findByPk(id)
    } catch (error) {
        throw error;
    }
}

async function deleteCliente(id) {
    try {
        return await ClienteModel.destroy({
            where: {
                cliente_id: id
            }
        })
    } catch (error) {
        throw error;
    }
}

async function updateCliente(cliente) {
    try {
        await ClienteModel.update(cliente, {
            where: {
                cliente_id: cliente.cliente_id
            }
        });
        return await getCliente(cliente.cliente_id);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createCliente,
    getClientes,
    getCliente,
    updateCliente,
    deleteCliente
}