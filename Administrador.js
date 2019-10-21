var mongoose = require('mongoose');
var crypto = require('crypto');
var Schema = mongoose.Schema;
const AutoIncrementFactory = require('mongoose-sequence');
var connection = mongoose.createConnection("mongodb://localhost:27017/Animales");
const AutoIncrement = AutoIncrementFactory(connection);

var administrador = new Schema({
    id:Number,
    NOMBRE: String,
    CLAVE:String,
    EMAIL:String,
    ESTADO:Number,
    FOTO:String,
    SALT:String
});
administrador.methods.setPassword=function(password){
    console.log(password);
    var salt= crypto.randomBytes(16).toString('hex');

    console.log(password);
    var claveysalt=[];

    claveysalt.push(crypto.pbkdf2Sync(password,salt,1000,64,'sha512').toString('hex'));
    claveysalt.push(salt);

    return claveysalt;
};
administrador.methods.validPassword=function(password,clavebuena,salt){
	console.log(this.CLAVE);
	console.log(password);
	console.log(clavebuena);

	var hash = crypto.pbkdf2Sync(password,salt,1000,64,'sha512').toString('hex');
	return clavebuena === hash;
};
administrador.plugin(AutoIncrement, {inc_field: 'id'});
module.exports= mongoose.model('Administrador',administrador);
