const express = require('express');
require('../Infra/database');

const app = express();
const port = '3333';

app.use(express.json());
app.listen(port, function () {
    console.log('rodando na porta 3333!!');
});


