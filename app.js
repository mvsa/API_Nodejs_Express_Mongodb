const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const url = 'mongodb+srv://mvsa:mvsa@clusterapi.kbv53.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const options = {};

//opções deprecated?
//const options = {reconnectTries:Number.MAX_VALUE, reconnectInterval:500, poolSize:5, useNewUrlParser:true};



mongoose.connect(url, options);
// mongoose.set('useCreateIndex', true);

mongoose.connection.on('error', (err)=>{
    console.log('Erro de conexão', err);
})

mongoose.connection.on('disconnected', ()=>{
    console.log('Aplicação desconectada');
})

mongoose.connection.on('connected', ()=>{
   console.log('Mongo running');   
})


//BodyParser | necessario? express.use(json)?
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


const indexRoute = require('./routes/index');
const usersRoute = require('./routes/users');

app.use('/', indexRoute);
app.use('/users',usersRoute);


app.listen(3000, ()=>{
    console.log('Running on port 3000')
});

module.exports = app;


