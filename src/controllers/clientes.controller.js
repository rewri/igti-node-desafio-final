const clientesRepository = require('../repositories/clientes.repository.js');

async function clienteData(id) {
    return await clientesRepository.getCliente(id);
}

async function createCliente(req, res, next) {
    try {
        let cliente = req.body;
        const { nome, email, senha, telefone, endereco } = cliente;
        if (!nome || !email || !senha || !telefone || !endereco) {
            throw new Error('nome, email, senha, telefone, endereco are required');
        }
        cliente = await clientesRepository.createCliente(cliente);
        res.status(201).send(cliente);
        logger.info(`POST /Cliente - ${JSON.stringify(cliente)}`)
    } catch (error) {
        next(error);
    }
}

async function getClientes(req, res, next) {
    try {
        const cliente = await clientesRepository.getClientes();
        res.send(cliente);
        logger.info(`GET /cliente`)
    } catch (error) {
        next(error);
    }
}

async function getCliente(req, res, next) {
    try {
        const id = req.params.id;
        res.send(await clienteData(id));
        logger.info(`GET /cliente/${id}`)
    } catch (error) {
        next(error);
    }
}

async function updateCliente(req, res, next) {
    try {
        let cliente = req.body;
        const { nome, email, senha, telefone, endereco, cliente_id } = cliente;
        if (!nome || !email || !senha || !telefone || !endereco || !cliente_id) {
            throw new Error('nome, email, senha, telefone, endereco and cliente_id are required');
        }
        cliente = await clientesRepository.updateCliente(cliente);
        res.send(cliente);
        logger.info(`PUT /cliente - ${JSON.stringify(cliente)}`)
    } catch (error) {
        next(error);
    }
}

async function deleteCliente(req, res, next) {
    try {
        const id = req.params.id;
        let cliente = await clienteData(id);
        await clientesRepository.deleteCliente(id);
        res.send(cliente);
        logger.info(`DELETE /cliente`)
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createCliente,
    getClientes,
    getCliente,
    updateCliente,
    deleteCliente,
}