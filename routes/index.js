const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

router.get('/', auth, (req,res)=>{
    console.log(res.locals.auth_data);
    return res.send({message: 'Rota raiz'});
});


router.post('/',(req,res)=>{
    return res.send({message: 'Rota raiz Post'});
});


router.post('/create', (req,res) =>{
    return res.send({message: 'User criado'})
});

module.exports = router;