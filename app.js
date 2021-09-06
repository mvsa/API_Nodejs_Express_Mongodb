const express = require('express');
const app = express();

const indexRoute = require('./routes/index');
const usersRoute = require('./routes/users');

app.use('/', indexRoute);
app.use('/users',usersRoute);

app.get('/', (req,res)=>{
    let obj = req.query;
    return res.send({message:`${obj.nome}`});
})


app.post('/', (req,res)=>{
    return res.send({message:'Post'})
})


app.listen(3000, ()=>{
    console.log('Running on port 3000')
});

module.exports = app;