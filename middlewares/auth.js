const jwt = require('jsonwebtoken');
const config = require('../config/config');

const auth =  (req, res, next) =>{
    const token_header = req.headers.auth;

    if (!token_header) return res.status(401).send({error: 'Missing Token'});

    jwt.verify(token_header, config.jwt_pass, (err, decoded)=>{
        if(err) return res.status(401).send({error: 'Invalid Token'});
        res.locals.auth_data = decoded; //* referencia ao usuário estará
        //setada nessa variavel
        return next();
    })
}

module.exports = auth;



//**  An object that contains response local variables scoped to the request, and therefore available only to the view(s) rendered during that request / response cycle (if any). 
//Otherwise, this property is identical to app.locals.
//This property is useful for exposing request-level information such as the request 
//path name, authenticated user, user settings, and so on.*/