const Gerente = require('../models/gerente');

const gerenteController = {
  // Cria um novo gerente
  create: (req, res) => {
    const { nome, cpf, telefone } = req.body;

    if (!nome || !cpf) {
      return res.status(400).send('Nome e CPF são obrigatórios.');
    }

    Gerente.create(nome, cpf, telefone, (err, results) => {
      if (err) {
        console.error('Erro ao criar gerente:', err);
        res.status(500).send('Erro ao criar gerente.');
      } else {
        res.status(201).send('Gerente criado com sucesso.');
      }
    });
  },

  // Lista todos os gerentes
  findAll: (req, res) => {
    Gerente.findAll((err, results) => {
      if (err) {
        console.error('Erro ao listar gerentes:', err);
        res.status(500).send('Erro ao listar gerentes.');
      } else {
        res.json(results);
      }
    });
  },

  // Encontra um gerente pelo ID
  findById: (req, res) => {
    const { id_gerente } = req.params;

    Gerente.findById(id_gerente, (err, results) => {
      if (err) {
        console.error('Erro ao buscar gerente:', err);
        res.status(500).send('Erro ao buscar gerente.');
      } else if (results.length === 0) {
        res.status(404).send('Gerente não encontrado.');
      } else {
        res.json(results[0]);
      }
    });
  },

  // Atualiza um gerente
  update: (req, res) => {
    const { id_gerente } = req.params;
    const { nome, cpf, telefone } = req.body;

    if (!nome || !cpf) {
      return res.status(400).send('Nome e CPF são obrigatórios.');
    }

    Gerente.update(id_gerente, nome, cpf, telefone, (err) => {
      if (err) {
        console.error('Erro ao atualizar gerente:', err);
        res.status(500).send('Erro ao atualizar gerente.');
      } else {
        res.send('Gerente atualizado com sucesso.');
      }
    });
  },

  // Exclui um gerente
  delete: (req, res) => {
    const { id_gerente } = req.params;

    Gerente.delete(id_gerente, (err) => {
      if (err) {
        console.error('Erro ao excluir gerente:', err);
        res.status(500).send('Erro ao excluir gerente.');
      } else {
        res.send('Gerente excluído com sucesso.');
      }
    });
  },
};

module.exports = gerenteController;
