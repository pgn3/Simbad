var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const AutoIncrementFactory = require('mongoose-sequence');
var connection = mongoose.createConnection("mongodb://localhost:27017/Animales");
const AutoIncrement = AutoIncrementFactory(connection);

var animal = new Schema({
    _id:Number,
    NOMBRE: String,
    TIPO: String,
    EDADAPROX:String,
    ESTADO:Number,
    DESCRIPCION:String,
    FOTO:String,
    ADOPTANTE:{
        NOMBRE:String,
        APELLIDO:String,
        CEDULA:String,
        EMAIL:String
    }
});

animal.plugin(AutoIncrement, {inc_field: '_id'});
module.exports= mongoose.model('Animal',animal);
