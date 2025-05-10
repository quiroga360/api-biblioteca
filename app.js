const express = require('express');
const connectToDatabase = require('./src/config/database.js');
const routes = require('./src/routes');
const app = express();

routes(app);

app.listen(3000, () => {
    console.log('Servidor online.');
});

connectToDatabase();