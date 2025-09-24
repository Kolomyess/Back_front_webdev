//Criação do framework express, que facilita criar um servido HTTP no Node.js
const express = require("express");

//Importa o cors que irá nos possibilitar que o front-end (react) possa se comunicar com o back-end sem bloqueios
const cors = require("cors");

//Cria a aplicação express, que será o nosso servidor
const app = express();

//Habilita o cors que possibilita que o frontend acesse a API sem restrições de segurança 
app.use(cors());

//Importa as rotas do cliente que criamos em outro arquivo
const clienteRoutes = require("./routes/clienteRoutes");

//Toda vez que eu acessar /clientes, serei redirecionado para as rotas dos clientes
app.use("/clientes",clienteRoutes);

//Define a porta do servidor
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta para ${PORT}`);
});
