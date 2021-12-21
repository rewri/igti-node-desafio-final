const livrosRepository = require('../repositories/livros.repository.js');

async function livroData(id) {
    return await livrosRepository.getLivro(id);
}

async function createLivro(req, res, next) {
    try {
        let livro = req.body;
        const { nome, valor, estoque, autor_id } = livro;
        if (!nome || !valor || !estoque || !autor_id) {
            throw new Error('nome, valor, estoque, autor_id are required');
        }
        livro = await livrosRepository.createLivro(livro);
        res.status(201).send(livro);
        logger.info(`POST /Livro - ${JSON.stringify(livro)}`)
    } catch (error) {
        next(error);
    }
}

async function getLivros(req, res, next) {
    try {
        const livro = await livrosRepository.getLivros();
        res.send(livro);
        logger.info(`GET /livro`)
    } catch (error) {
        next(error);
    }
}

async function getLivro(req, res, next) {
    try {
        const id = req.params.id;
        res.send(await livroData(id));
        logger.info(`GET /livro/${id}`)
    } catch (error) {
        next(error);
    }
}

async function updateLivro(req, res, next) {
    try {
        let livro = req.body;
        const { nome, valor, estoque, autor_id, livro_id } = livro;
        if (!nome || !valor || !estoque || !autor_id || !livro_id) {
            throw new Error('nome, valor, estoque, autor_id and livro_id are required');
        }
        livro = await livrosRepository.updateLivro(livro);
        res.send(livro);
        logger.info(`PUT /livro - ${JSON.stringify(livro)}`)
    } catch (error) {
        next(error);
    }
}

async function deleteLivro(req, res, next) {
    try {
        const id = req.params.id;
        let livro = await livroData(id);
        await livrosRepository.deleteLivro(id);
        res.send(livro);
        logger.info(`DELETE /livro`)
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createLivro,
    getLivros,
    getLivro,
    updateLivro,
    deleteLivro,
}