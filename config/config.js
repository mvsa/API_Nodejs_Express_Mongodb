//pode ser melhor gerenciado usando arquivos .env, ao invés dessa forma
const env = process.env.NODE_ENV || 'dev';

const config = () =>{
    switch(env){
        case 'dev':
            return{
                bd_string: 'key',
                jwt_pass: 'acesso',
                jwt_expires: '7d'
            }
        case 'hml':
            return{
                bd_string: 'key',
                jwt_pass: 'acesso',
                jwt_expires: '7d'
            }  
        case 'prod':
            return{
                bd_string: 'key',
                jwt_pass: 'acesso',
                jwt_expires: '7d'
            }      
    }
}

console.log(`Iniciando API em ambiente de ${env.toUpperCase()}`);

module.exports = config();