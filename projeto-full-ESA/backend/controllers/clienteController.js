//Importa a lista de clientes da model
let clientes = require("../models/clienteModel");

const listarClientes = (req,res) => {
    //Responde com a lista completa de clientes no formato JSON
    res.json(clientes);
    
};

const adicionarCliente = (req,res) => {
    //Extrai os dados vindos do front-end
    const {nome, email, empresa} = req.body;

    //Cria um novo cliente com id automático
    const novoCliente = {id:clientes.length+1,nome,email,empresa};

    //Adiciona o novo cliente ao "Banco de dados" (que é o nosso array)
    clientes.push(novoCliente);

    //Responde para o front-end confirmando que o novo cliente for criado
    res.status(201).json(novoCliente);
};

//Exportamos as funções para serem utilizadas em outras partes do meu sistema
module.exports = {listarClientes, adicionarCliente};