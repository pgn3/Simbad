var express = require('express');
var app = express();//Utilizamos express
var nodemailer = require('nodemailer');
var mongoose=require('mongoose');//utilizamos mongoose para mongodb
var port= process.env.PORT || 8080;//Declaramos que vamos a utilizar el puerto 8080
//mongoose.connect('mongodb://localhost:27017/Animales');//Hacemos la conexion a la base de datos con mongoose
//mongoose.connect('mongodb+srv://pgn3:12345@taquilla-uhegy.gcp.mongodb.net/test?retryWrites=true&w=majority');
mongoose.connect('mongodb://todos:todos123@ds017165.mlab.com:17165/cedesprimerproyecto');
var db=mongoose.connection;
db.on('error',console.error.bind(console,'MongoDB connection error:'));

app.configure(function(){
	app.use(express.static(__dirname + '/'));
	app.use(express.logger('dev'));//Activamos el log en modo dev
	app.use(express.methodOverride());



});
var bodyParser=require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb',extended:true}));
//cargamos los endpoints
require('./routes.js')(app);
app.listen(port);
console.log("APP por el puerto"+port);