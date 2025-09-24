//Criação do framework express, que facilita criar um servido HTTP no Node.js
const express = require("express");

//Importa o cors que irá nos possibilitar que o front-end (react) possa se comunicar com o back-end sem bloqueios
const cors = require("cors");

//Cria a aplicação express, que será o nosso servidor
const app = express();
