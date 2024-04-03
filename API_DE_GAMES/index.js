const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var DB ={
    GAMES:[
        {
            id:20,
            title:'Call of duty',
            year:2019,
            price:60
        },
        {
            id:21,
            title:'Sea of thieves',
            year:2018,
            price:50
        },
        {
            id:22,
            title:'Minecraft',
            year:2018,
            price:50
        }

    ]
}

//rota de listagem geral
app.get("/games",(req,res)=>{

    res.statusCode = 200; //retornado o status da requisição
    res.json(DB.GAMES); //retornando o banco de dados em json
    
});



app.listen(8080,()=>{
    console.log("Api Rodando");
})