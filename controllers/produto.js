const Produto = require('../models/produto');

const produtoController = {
  create: (req, res) => {
    const { nome, preco, descricao, id_cardapio } = req.body;

    if (!nome || !preco || !id_cardapio) {
      return res.status(400).send('Nome, preço e id_cardapio são obrigatórios.');
    }

    Produto.create(nome, preco, descricao, id_cardapio, (err) => {
      if (err) {
        console.error('Erro ao criar produto:', err);
        res.status(500).send('Erro ao criar produto.');
      } else {
        res.status(201).send('Produto criado com sucesso.');
      }
    });
  },

  update: (req, res) => {
    const { id_produto } = req.params;
    const { nome, preco, descricao } = req.body;

    Produto.update(id_produto, nome, preco, descricao, (err) => {
      if (err) {
        console.error('Erro ao atualizar produto:', err);
        res.status(500).send('Erro ao atualizar produto.');
      } else {
        res.send('Produto atualizado com sucesso.');
      }
    });
  },

  delete: (req, res) => {
    const { id_produto } = req.params;

    Produto.delete(id_produto, (err) => {
      if (err) {
        console.error('Erro ao excluir produto:', err);
        res.status(500).send('Erro ao excluir produto.');
      } else {
        res.send('Produto excluído com sucesso.');
      }
    });
  },

  findAll: (req, res) => {
    Produto.findAll((err, results) => {
      if (err) {
        console.error('Erro ao listar produtos:', err);
        res.status(500).send('Erro ao listar produtos.');
      } else {
        res.json(results);
      }
    });
  },
};

module.exports = produtoController;
