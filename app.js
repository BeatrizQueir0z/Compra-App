const express = require("express");

//IMPORTAR MÓDULO EXPRESS-HANDLEBARS
const {engine} = require('express-handlebars');

//IMPORTAR MÓDULO MYSQL
const mysql = require('mysql2');

//APP
const app = express();

//ADICIONAR BOOTSTRAP
app.use('/bootstrap', express.static('./node_modules/bootstrap/dist'));

//CONFIGURAÇÁO EXPRESS-HANDLEBARS
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

//CONFIGURAÇÃO DE CONEXAO
const conexao = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'projeto'
});

//TESTE CONEXAO
conexao.connect(function(erro){
if(erro) throw erro;
console.log('CONEXAO EFETUADA COM SUCESSO!!');
});


//ROTA PRINCIPAL
app.get('/', function(req, res){
res.render('formulario');
});


//SERVIDOR
app.listen(8080);