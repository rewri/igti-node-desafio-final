const autoresRepository = require('../repositories/autores.repository.js');

async function autorData(id) {
    return await autoresRepository.getAutor(id);
}

async function createAutor(req, res, next) {
    try {
        let autor = req.body;
        const { nome, email, telefone } = autor;
        if (!nome || !email || !telefone) {
            throw new Error('nome, email, telefone are required');
        }
        autor = await autoresRepository.createAutor(autor);
        res.status(201).send(autor);
        logger.info(`POST /Autor - ${JSON.stringify(autor)}`)
    } catch (error) {
        next(error);
    }
}

async function getAutores(req, res, next) {
    try {
        const autor = await autoresRepository.getAutores();
        res.send(autor);
        logger.info(`GET /autor`)
    } catch (error) {
        next(error);
    }
}

async function getAutor(req, res, next) {
    try {
        const id = req.params.id;
        res.send(await autorData(id));
        logger.info(`GET /autor/${id}`)
    } catch (error) {
        next(error);
    }
}

async function updateAutor(req, res, next) {
    try {
        let autor = req.body;
        const { nome, email, telefone, autor_id } = autor;
        if (!nome || !email || !telefone || !autor_id) {
            throw new Error('nome, email, telefone and autor_id are required');
        }
        autor = await autoresRepository.updateAutor(autor);
        res.send(autor);
        logger.info(`PUT /autor - ${JSON.stringify(autor)}`)
    } catch (error) {
        next(error);
    }
}

async function deleteAutor(req, res, next) {
    try {
        const id = req.params.id;
        let autor = await autorData(id);
        await autoresRepository.deleteAutor(id);
        res.send(autor);
        logger.info(`DELETE /autor`)
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createAutor,
    getAutores,
    getAutor,
    updateAutor,
    deleteAutor,
}