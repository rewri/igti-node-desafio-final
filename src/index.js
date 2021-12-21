const express = require('express');
const cors = require('cors');
const winston = require('winston');
const clientesRouter = require('./routes/clientes.router.js');
const autoresRouter = require('./routes/autores.router.js');
const livrosRouter = require('./routes/livros.router.js');
const vendasRouter = require('./routes/vendas.router.js');

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} ${label} ${level} ${message}`
});
global.logger = winston.createLogger({
    level: 'silly',
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: 'livraria-api.log' }),
    ],
    format: combine(
        label({ label: 'livraria-api' }),
        timestamp(),
        myFormat
    )
});

const app = express();
app.use(express.json());
app.use(cors());

app.use('/cliente', clientesRouter);
app.use('/autor', autoresRouter);
app.use('/livro', livrosRouter);
app.use('/venda', vendasRouter);

app.use((err, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} - ${req.message}`);
    res.status(400).send({ error: err.message });
})

app.listen(3000, () => console.log('API started at 3000'))