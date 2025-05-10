const mongoose = require('mongoose');
const { Schema } = mongoose;

const autorSchema = new Schema({
    nome: {
        type: String,
        required: true
    }
}, { versionKey: false });

const Autor = mongoose.model('autores', autorSchema);

module.exports = Autor;