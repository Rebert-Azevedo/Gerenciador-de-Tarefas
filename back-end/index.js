// Criando servidor local com 'express' // 

const express = require('express');

const app = express();

// Rota de teste para servidor //

app.get('/', function(req,res){
    res.send("Ok!")
});

// Define porta para servidor e mensagem de execução //

app.listen(8000, function(){
    console.log("Servidor Live! em: http://localhost:8000/")
});
