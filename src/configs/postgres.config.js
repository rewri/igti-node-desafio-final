const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    process.env.POSTGRES_URL,
    {
        dialect: "postgres",
        define: {
            timestamps: false
        }
    }
)

module.exports = sequelize;
