//Importa o servidor
const express = require("express");

//Cria um "mini servidor" de rotas
const router = express.Router();

const {listarClientes,adicionarCliente} = require("../controllers/clienteController");