const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {type: String, required:true, unique:true, lowercase:true},
    password:{type:String, required:true, select:false}, // campo não vai ser retornado em uma busca no banco
    created: {type: Date, default:Date.now}
});


module.exports = mongoose.model('User', UserSchema);