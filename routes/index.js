const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    return res.send({message: 'Rota raiz'});
});


router.post('/',(req,res)=>{
    return res.send({message: 'Rota raiz Post'});
});


router.post('/create', (req,res) =>{
    return res.send({message: 'User criado'})
});

module.exports = router;