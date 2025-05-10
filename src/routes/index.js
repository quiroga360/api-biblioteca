const express = require('express');
const autores = require('./autoresRoute.js');

const routes = (app) => {

    app.use(
        express.json(),
        autores
    );

};




module.exports = routes;