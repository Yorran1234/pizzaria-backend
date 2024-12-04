const connection = require('../config/db');

const Usuario = {
  create: (nome, email, senha, callback) => {
    const sql = 'INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)';
    connection.query(sql, [nome, email, senha], callback);
  },

  update: (id, nome, email, senha, callback) => {
    const sql = 'UPDATE usuario SET nome = ?, email = ?, senha = ? WHERE id_usuario = ?';
    connection.query(sql, [nome, email, senha, id], callback);
  },

  delete: (id, callback) => {
    const sql = 'DELETE FROM usuario WHERE id_usuario = ?';
    connection.query(sql, [id], callback);
  },

  findAll: (callback) => {
    const sql = 'SELECT * FROM usuario';
    connection.query(sql, callback);
  },
};

module.exports = Usuario;
