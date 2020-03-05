//IMPORTAÇÕES
const express = require("express");
const bodyParser = require("body-parser");
const router = require("./router");

//INSTÂNCIA DO FRAMEWORK EXPRESS
const app = express();

//CONFIGURANDO CAMADA DE VISÃO hbs
app.set("view engine", "html");
app.engine("html", require("hbs").__express);
app.set("views", __dirname + "../../../frontend/src/views");

//CONFIGURANDO CONTEÚDOS ESTÁTICOS
app.use(express.static(__dirname + "../../../frontend/src"));

//CONFIGURAR O REQUEST BODY
app.use(bodyParser.urlencoded({ extended: true }));

//ROTAS DA APLICAÇÃO
app.use(router);

//ESCUTANDO A PORTA 3MIL
app.listen(3000, () => console.log("OK: porta 3000"));
