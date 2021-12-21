const vendasRepository = require('../repositories/vendas.repository.js');

async function vendaData(id) {
    return await vendasRepository.getVenda(id);
}

async function createVenda(req, res, next) {
    try {
        let venda = req.body;
        const { data, valor, cliente_id, livro_id } = venda;
        if (!data || !valor || !cliente_id || !livro_id) {
            throw new Error('data, valor, cliente_id, livro_id are required');
        }
        venda = await vendasRepository.createVenda(venda);
        res.status(201).send(venda);
        logger.info(`POST /Venda - ${JSON.stringify(venda)}`)
    } catch (error) {
        next(error);
    }
}

async function getVendas(req, res, next) {
    try {
        const venda = await vendasRepository.getVendas();
        res.send(venda);
        logger.info(`GET /venda`)
    } catch (error) {
        next(error);
    }
}

async function getVenda(req, res, next) {
    try {
        const id = req.params.id;
        res.send(await vendaData(id));
        logger.info(`GET /venda/${id}`)
    } catch (error) {
        next(error);
    }
}

async function updateVenda(req, res, next) {
    try {
        let venda = req.body;
        const { data, valor, cliente_id, livro_id, venda_id } = venda;
        if (!data || !valor || !cliente_id || !livro_id || !venda_id) {
            throw new Error('data, valor, cliente_id, livro_id and venda_id are required');
        }
        venda = await vendasRepository.updateVenda(venda);
        res.send(venda);
        logger.info(`PUT /venda - ${JSON.stringify(venda)}`)
    } catch (error) {
        next(error);
    }
}

async function deleteVenda(req, res, next) {
    try {
        const id = req.params.id;
        let venda = await vendaData(id);
        await vendasRepository.deleteVenda(id);
        res.send(venda);
        logger.info(`DELETE /venda`)
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createVenda,
    getVendas,
    getVenda,
    updateVenda,
    deleteVenda,
}