require('../Infra/database');
const express = require('express');

const PostageController = require('./Controllers/PostageController');
const TagController = require('./Controllers/TagController');

const app = express();
const port = '3333';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use( '/postage', PostageController );
app.use( '/tag', TagController );

app.listen(port, function () {
    console.log('rodando na porta 3333!!');
});


