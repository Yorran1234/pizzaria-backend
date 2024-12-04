const connection = require('../config/db');

const Pedido = {
  // Cria um pedido
  create: (data_pedido, id_usuario, valor_total, callback) => {
    const sql = `
      INSERT INTO Pedido (data_pedido, id_usuario, valor_total)
      VALUES (?, ?, ?)
    `;
    connection.query(sql, [data_pedido, id_usuario, valor_total], callback);
  },

  // Lista todos os pedidos
  findAll: (callback) => {
    const sql = `
      SELECT p.id_pedido, p.data_pedido, p.valor_total, u.nome AS nome_usuario
      FROM Pedido p
      JOIN Usuario u ON p.id_usuario = u.id_usuario
    `;
    connection.query(sql, callback);
  },

  // Encontra um pedido pelo ID
  findById: (id_pedido, callback) => {
    const sql = `
      SELECT p.id_pedido, p.data_pedido, p.valor_total, u.nome AS nome_usuario
      FROM Pedido p
      JOIN Usuario u ON p.id_usuario = u.id_usuario
      WHERE p.id_pedido = ?
    `;
    connection.query(sql, [id_pedido], callback);
  },

  // Atualiza um pedido
  update: (id_pedido, data_pedido, id_usuario, valor_total, callback) => {
    const sql = `
      UPDATE Pedido
      SET data_pedido = ?, id_usuario = ?, valor_total = ?
      WHERE id_pedido = ?
    `;
    connection.query(sql, [data_pedido, id_usuario, valor_total, id_pedido], callback);
  },

  // Exclui um pedido
  delete: (id_pedido, callback) => {
    const sql = `DELETE FROM Pedido WHERE id_pedido = ?`;
    connection.query(sql, [id_pedido], callback);
  },
};

module.exports = Pedido;
