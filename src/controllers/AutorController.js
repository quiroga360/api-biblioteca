const Autor = require('../models/Autor.js');

class AutorController {

    static async criarAutor(req, res) {
        try {
            const novoAutor = await Autor.create(req.body);
            res.status(201).json({ 
                message: `Autor criado com sucesso.`,
                autor: novoAutor 
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async listarAutores(_, res) {
        try {
            const listaDeAutores = await Autor.find({});
            res.status(200).json(listaDeAutores);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async listarAutorPorId(req, res) {
        try {
            const id = req.params.id;
            const autorEncontrado = await Autor.findById(id);
            res.status(200).json(autorEncontrado);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async atualizarAutorPorId(req, res) {
        try {
            const id = req.params.id;
            await Autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: `Autor atualizado com sucesso.` });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async deletarLivroPorId(req, res) {
        try {
            const id = req.params.id;
            await Autor.findByIdAndDelete(id);
            res.status(200).json({ message: `Autor deletado com sucesso.` });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

}

module.exports = AutorController;