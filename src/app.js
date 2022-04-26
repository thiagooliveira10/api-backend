const express = require('express');
const env = require('dotenv/config')
const alunoRouter = require('./alunosRouter');

const database = require('./db');

const app = express();
app.use(express.json());

app.use('/alunos', alunoRouter);


app.listen(process.env.PORT, async () => {
    const resultDb = await database.sync({force: true});
    console.log('server started');
})