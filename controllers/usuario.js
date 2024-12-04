const Usuario = require('../models/usuario');

const usuarioController = {
  create: (req, res) => {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
      return res.status(400).send('Todos os campos são obrigatórios.');
    }

    Usuario.create(nome, email, senha, (err) => {
      if (err) {
        console.error('Erro ao criar usuário:', err);
        res.status(500).send('Erro ao criar usuário.');
      } else {
        res.status(201).send('Usuário criado com sucesso.');
      }
    });
  },

  update: (req, res) => {
    const { id } = req.params;
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
      return res.status(400).send('Todos os campos são obrigatórios.');
    }

    Usuario.update(id, nome, email, senha, (err) => {
      if (err) {
        console.error('Erro ao atualizar usuário:', err);
        res.status(500).send('Erro ao atualizar usuário.');
      } else {
        res.send('Usuário atualizado com sucesso.');
      }
    });
  },

  delete: (req, res) => {
    const { id } = req.params;

    Usuario.delete(id, (err) => {
      if (err) {
        console.error('Erro ao excluir usuário:', err);
        res.status(500).send('Erro ao excluir usuário.');
      } else {
        res.send('Usuário excluído com sucesso.');
      }
    });
  },

  findAll: (req, res) => {
    Usuario.findAll((err, results) => {
      if (err) {
        console.error('Erro ao listar usuários:', err);
        res.status(500).send('Erro ao listar usuários.');
      } else {
        res.json(results);
      }
    });
  },
};

module.exports = usuarioController;
