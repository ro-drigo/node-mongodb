//incluindo o express
const express = require('express');
//incluindo mongoose
const mongoose = require('mongoose');
//incluindo o cors
const cors = require('cors');
//incluindo models
require("./models/Artigo");
const Artigo = mongoose.model('artigo');
//criando constante para usar o express
const app = express();

//permitir express a trabalhar com json
app.use(express.json());

//usando o cors
app.use((req, res, next) => {
    //o header serve para mostrar qual site pode fazer requisições
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    //o next deixa passar
    next();
});

//Conexão com o bd
mongoose.connect('mongodb://localhost/celke', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
    console.log("Conexão com MongoDB realizada com sucesso");
}).catch((erro) => {
    console.log("Conexão com MongoDB deu errado");
});


//Criando rotas
//listando dados do BD
app.get("/", (req, res) => {
    Artigo.find({}).then((artigo) => {
        return res.json(artigo);
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum artigo foi encontrado!"
        })
    })
});

//Visualizando artigo pelo ID
app.get("/artigo/:id", (req, res) => {
    //console.log(req.params.id);
    //Usamos o findOne para retornar um elemento do banco
    Artigo.findOne({_id:req.params.id}).then((artigo) => {
        return res.json(artigo);
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum artigo encontrado"
        })
    })

    //return res.json({id: req.params.id});
})

//registering on BD
app.post("/artigo", (req, res) => {
    //registrando no banco
    const artigo = Artigo.create(req.body, (err) =>{
        //verificando se registrou ou não
        if(err) return res.status(400).json({
            error: true,
            message: "Error: Artigo não foi cadastrado com sucesso"
        });

        return res.status(200).json({
            error: false,
            message: "Artigo foi cadastrado com sucesso"
        })
    })
});

//Editar artigo pelo ID
app.put("/artigo/:id", (req, res) => {
    //Usamos o updateOne para estar editando um elemento
    const artigo = Artigo.updateOne({_id: req.params.id}, req.body, (err) => {
        if(err) return res.status(400).json({
            error: true,
            message: "Erro na edição do arquivo"
        });

        return res.json({
            error: false,
            message: "Arquivo editado com sucesso"
        });
    });
});

//Deletar artigo pelo ID
app.delete("/artigo/:id", (req, res) => {
    const artigo = Artigo.deleteOne({_id: req.params.id}, (err) => {
        if(err) return res.status(400).json({
            error: true,
            message: "Erro ao deletar artigo"
        });

        return res.json({
            error: false,
            message: "Artigo deletado com sucesso"
        });
    });
});

//Criando servidor
app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080");
});