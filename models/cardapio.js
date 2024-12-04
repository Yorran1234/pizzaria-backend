const connection = require('../config/db');

const Cardapio = {
  create: (nome_cardapio, descricao, data_criacao, callback) => {
    const sql = `INSERT INTO Cardapio (nome_cardapio, descricao, data_criacao) VALUES (?, ?, ?)`;
    connection.query(sql, [nome_cardapio, descricao, data_criacao], callback);
  },

  update: (id_cardapio, nome_cardapio, descricao, callback) => {
    const sql = `UPDATE Cardapio SET nome_cardapio = ?, descricao = ? WHERE id_cardapio = ?`;
    connection.query(sql, [nome_cardapio, descricao, id_cardapio], callback);
  },

  delete: (id_cardapio, callback) => {
    const sql = `DELETE FROM Cardapio WHERE id_cardapio = ?`;
    connection.query(sql, [id_cardapio], callback);
  },

  findAll: (callback) => {
    const sql = `SELECT * FROM Cardapio`;
    connection.query(sql, callback);
  },
};

module.exports = Cardapio;
