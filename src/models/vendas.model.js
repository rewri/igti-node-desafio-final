const Sequelize = require('sequelize');
const db = require('../configs/postgres.config.js');

const Venda = db.define('vendas', {
    venda_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    valor: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    data: {
        type: Sequelize.DATE,
        allowNull: false
    },
    cliente_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    livro_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, { underscored: true });

module.exports = Venda;