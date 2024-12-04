const connection = require('../config/db');

const Produto = {
  create: (nome, preco, descricao, id_cardapio, callback) => {
    const sql = `INSERT INTO Produto (nome, preco, descricao, id_cardapio) VALUES (?, ?, ?, ?)`;
    connection.query(sql, [nome, preco, descricao, id_cardapio], callback);
  },

  update: (id_produto, nome, preco, descricao, callback) => {
    const sql = `UPDATE Produto SET nome = ?, preco = ?, descricao = ? WHERE id_produto = ?`;
    connection.query(sql, [nome, preco, descricao, id_produto], callback);
  },

  delete: (id_produto, callback) => {
    const sql = `DELETE FROM Produto WHERE id_produto = ?`;
    connection.query(sql, [id_produto], callback);
  },

  findAll: (callback) => {
    const sql = `SELECT p.*, c.nome_cardapio 
                 FROM Produto p
                 JOIN Cardapio c ON p.id_cardapio = c.id_cardapio`;
    connection.query(sql, callback);
  },
};

module.exports = Produto;
