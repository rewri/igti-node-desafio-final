const AutorModel = require('../models/autores.model.js');

async function createAutor(autor) {
    try {
        return await AutorModel.create(autor)
    } catch (error) {
        throw error;
    }
}

async function getAutores() {
    try {
        return await AutorModel.findAll()
    } catch (error) {
        throw error;
    }
}

async function getAutor(id) {
    try {
        return await AutorModel.findByPk(id)
    } catch (error) {
        throw error;
    }
}

async function deleteAutor(id) {
    try {
        return await AutorModel.destroy({
            where: {
                autor_id: id
            }
        })
    } catch (error) {
        throw error;
    }
}

async function updateAutor(autor) {
    try {
        await AutorModel.update(autor, {
            where: {
                autor_id: autor.autor_id
            }
        });
        return await getAutor(autor.autor_id);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createAutor,
    getAutores,
    getAutor,
    updateAutor,
    deleteAutor
}