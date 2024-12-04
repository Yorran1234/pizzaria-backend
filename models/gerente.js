const connection = require('../config/db');

const Gerente = {

  create: (nome, cpf, telefone, callback) => {
    const sql = `
      INSERT INTO Gerente (nome, cpf, telefone)
      VALUES (?, ?, ?)
    `;
    connection.query(sql, [nome, cpf, telefone], callback);
  },

  
  findAll: (callback) => {
    const sql = `
      SELECT * FROM Gerente
    `;
    connection.query(sql, callback);
  },

  
  findById: (id_gerente, callback) => {
    const sql = `
      SELECT * FROM Gerente WHERE id_gerente = ?
    `;
    connection.query(sql, [id_gerente], callback);
  },

  update: (id_gerente, nome, cpf, telefone, callback) => {
    const sql = `
      UPDATE Gerente
      SET nome = ?, cpf = ?, telefone = ?
      WHERE id_gerente = ?
    `;
    connection.query(sql, [nome, cpf, telefone, id_gerente], callback);
  },


  delete: (id_gerente, callback) => {
    const sql = `
      DELETE FROM Gerente WHERE id_gerente = ?
    `;
    connection.query(sql, [id_gerente], callback);
  },
};

module.exports = Gerente;
