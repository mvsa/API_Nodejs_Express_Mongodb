const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
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


router.post('/auth', (req,res)=>{
    const{email, password} = req.body;

    if(!email || !password) return res.send({error:'Missing parameter'});

    Users.findOne({email}, (err, data)=>{
        if (err) return res.send({error: 'Erro ao buscar'});
        if (!data) return res.send({error:'User not found'});

        bcrypt.compare(password, data.password, (err, same)=>{
            if(!same) return res.send({error: 'Error while trying to authenticate'});

            data.password = undefined;
            return res.send(data);
        })
    }).select('+password');
})

module.exports = router;