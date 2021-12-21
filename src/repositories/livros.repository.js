const LivroModel = require('../models/livros.model.js');

async function createLivro(livro) {
    try {
        return await LivroModel.create(livro)
    } catch (error) {
        throw error;
    }
}

async function getLivros() {
    try {
        return await LivroModel.findAll()
    } catch (error) {
        throw error;
    }
}

async function getLivro(id) {
    try {
        return await LivroModel.findByPk(id)
    } catch (error) {
        throw error;
    }
}

async function deleteLivro(id) {
    try {
        return await LivroModel.destroy({
            where: {
                livro_id: id
            }
        })
    } catch (error) {
        throw error;
    }
}

async function updateLivro(livro) {
    try {
        await LivroModel.update(livro, {
            where: {
                livro_id: livro.livro_id
            }
        });
        return await getLivro(livro.livro_id);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createLivro,
    getLivros,
    getLivro,
    updateLivro,
    deleteLivro
}