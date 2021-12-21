const Sequelize = require('sequelize');
const db = require('../configs/postgres.config.js');

const Livro = db.define('livros', {
    livro_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    valor: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    estoque: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    autor_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, { underscored: true });

module.exports = Livro;