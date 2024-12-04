const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const gerenteRoutes = require('./routes/gerente');
const usuarioRoutes = require('./routes/usuario'); 
const cardapioRoutes = require('./routes/cardapio'); 
const produtoRoutes = require('./routes/produto'); 
const pedidoRoutes = require('./routes/pedido');


app.use('/gerente', gerenteRoutes);
app.use('/usuario', usuarioRoutes);
app.use('/cardapio', cardapioRoutes);
app.use('/produto', produtoRoutes);
app.use('/pedido', pedidoRoutes);

app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});
