//incluindo o express
const express = require('express');

const app = express();

//permitir express a trabalhar com json
app.use(express.json());

//Criando rotas
app.get("/", (req, res) => {
    return res.json({titulo: "Como criar API"});
});


//Criando servidor
app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080");
});