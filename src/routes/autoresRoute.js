const express = require('express');
const router = express.Router();
const AutorController = require('../controllers/AutorController.js');

router.post('/autores', (req, res) => AutorController.criarAutor(req, res));
router.get('/autores', (req, res) => AutorController.listarAutores(req, res));
router.get('/autores/:id', (req, res) => AutorController.listarAutorPorId(req, res));
router.put('/autores/:id', (req, res) => AutorController.atualizarAutorPorId(req, res));
router.delete('/autores/:id', (req, res) => AutorController.deletarLivroPorId(req, res));

module.exports = router;
