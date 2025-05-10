require('dotenv').config();
const mongoose = require('mongoose');

async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING);
        console.log(`Conectado ao banco de dados.`);
    } catch (error) {
        console.log(`Falha ao tentar conectar com o banco de dados.`);
    }
};

module.exports = connectToDatabase;