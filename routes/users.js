const express = require('express');
const router = express.Router();
const Users = require('../model/user');

router.get('/',(req,res)=>{
    Users.find({},(err,data)=>{
        if(err) return res.send({error:'Erro na consulta de users'});
        return res.send(data);
    });
});


router.post('/create',(req,res)=>{
    const {email, password} = req.body;

    if(!email || !password) return res.send({error:'Missing parameter'});

    Users.findOne({email}, (err, data)=>{
        if (err) return res.send({error: 'Erro ao buscar'});
        if (data) return res.send({error: 'User already exists'});

        Users.create({email, password}, (err,data) =>{
            if(err) return res.send({error: 'Error while creating user'});
            
            data.password = undefined;
            return res.send(data);
        });
    });



    
});


module.exports = router;