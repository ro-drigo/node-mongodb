const mongoose = require('mongoose');

const Artigo = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    conteudo: {
        type: String,
        required: true
    }
}, 
{
    timestamps: true,
});

//Exportando model
mongoose.model('artigo', Artigo);