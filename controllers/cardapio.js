const Cardapio = require('../models/cardapio');

const cardapioController = {
  create: (req, res) => {
    const { nome_cardapio, descricao, data_criacao } = req.body;

    if (!nome_cardapio || !data_criacao) {
      return res.status(400).send('Nome e data de criação são obrigatórios.');
    }

    Cardapio.create(nome_cardapio, descricao, data_criacao, (err) => {
      if (err) {
        console.error('Erro ao criar cardápio:', err);
        res.status(500).send('Erro ao criar cardápio.');
      } else {
        res.status(201).send('Cardápio criado com sucesso.');
      }
    });
  },

  update: (req, res) => {
    const { id_cardapio } = req.params;
    const { nome_cardapio, descricao } = req.body;

    if (!nome_cardapio) {
      return res.status(400).send('Nome do cardápio é obrigatório.');
    }

    Cardapio.update(id_cardapio, nome_cardapio, descricao, (err) => {
      if (err) {
        console.error('Erro ao atualizar cardápio:', err);
        res.status(500).send('Erro ao atualizar cardápio.');
      } else {
        res.send('Cardápio atualizado com sucesso.');
      }
    });
  },

  delete: (req, res) => {
    const { id_cardapio } = req.params;

    Cardapio.delete(id_cardapio, (err) => {
      if (err) {
        console.error('Erro ao excluir cardápio:', err);
        res.status(500).send('Erro ao excluir cardápio.');
      } else {
        res.send('Cardápio excluído com sucesso.');
      }
    });
  },

  findAll: (req, res) => {
    Cardapio.findAll((err, results) => {
      if (err) {
        console.error('Erro ao listar cardápios:', err);
        res.status(500).send('Erro ao listar cardápios.');
      } else {
        res.json(results);
      }
    });
  },
};

module.exports = cardapioController;
