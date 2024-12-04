const Pedido = require('../models/pedido');

const pedidoController = {
  // Cria um novo pedido
  create: (req, res) => {
    const { data_pedido, id_usuario, valor_total } = req.body;

    if (!data_pedido || !id_usuario || !valor_total) {
      return res.status(400).send('Todos os campos são obrigatórios.');
    }

    Pedido.create(data_pedido, id_usuario, valor_total, (err, results) => {
      if (err) {
        console.error('Erro ao criar pedido:', err);
        res.status(500).send('Erro ao criar pedido.');
      } else {
        res.status(201).send('Pedido criado com sucesso.');
      }
    });
  },

  // Lista todos os pedidos
  findAll: (req, res) => {
    Pedido.findAll((err, results) => {
      if (err) {
        console.error('Erro ao listar pedidos:', err);
        res.status(500).send('Erro ao listar pedidos.');
      } else {
        res.json(results);
      }
    });
  },

  // Encontra um pedido pelo ID
  findById: (req, res) => {
    const { id_pedido } = req.params;

    Pedido.findById(id_pedido, (err, results) => {
      if (err) {
        console.error('Erro ao buscar pedido:', err);
        res.status(500).send('Erro ao buscar pedido.');
      } else if (results.length === 0) {
        res.status(404).send('Pedido não encontrado.');
      } else {
        res.json(results[0]);
      }
    });
  },

  // Atualiza um pedido
  update: (req, res) => {
    const { id_pedido } = req.params;
    const { data_pedido, id_usuario, valor_total } = req.body;

    if (!data_pedido || !id_usuario || !valor_total) {
      return res.status(400).send('Todos os campos são obrigatórios.');
    }

    Pedido.update(id_pedido, data_pedido, id_usuario, valor_total, (err) => {
      if (err) {
        console.error('Erro ao atualizar pedido:', err);
        res.status(500).send('Erro ao atualizar pedido.');
      } else {
        res.send('Pedido atualizado com sucesso.');
      }
    });
  },

  // Exclui um pedido
  delete: (req, res) => {
    const { id_pedido } = req.params;

    Pedido.delete(id_pedido, (err) => {
      if (err) {
        console.error('Erro ao excluir pedido:', err);
        res.status(500).send('Erro ao excluir pedido.');
      } else {
        res.send('Pedido excluído com sucesso.');
      }
    });
  },
};

module.exports = pedidoController;
