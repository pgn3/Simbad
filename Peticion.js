var mongoose = require('mongoose');
var crypto = require('crypto');
var Schema = mongoose.Schema;
const AutoIncrementFactory = require('mongoose-sequence');
var connection = mongoose.createConnection("mongodb://localhost:27017/Animales");
const AutoIncrement = AutoIncrementFactory(connection);

var peticion = new Schema({
    idPeticion:Number,
    NOMBRE: String,
    APELLIDO:String,
    CEDULA:String,
    EMAIL:String,
    PAQUETE:Number,
    ANIMAL:{
        ID:Number,
        NOMBRE:String,
        TIPO:String
    }
});

peticion.plugin(AutoIncrement, {inc_field: 'idPeticion'});
module.exports= mongoose.model('Peticion',peticion);
