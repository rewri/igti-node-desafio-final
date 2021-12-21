const Sequelize = require('sequelize');
const db = require('../configs/postgres.config.js');

const Autor = db.define('autores', {
    autor_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, { underscored: true });

module.exports = Autor;