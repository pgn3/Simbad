var controlleranimal = require ('./Controlleranimales.js');
var controlleradministrador = require ('./Controlleradministrador.js');
var controllerpeticion = require('./Controllerpeticion.js');
module.exports = function(app){

	var claseanimal= new controlleranimal() ;
	app.post('/api/nuevoanimal', claseanimal.Guardar);
	app.post('/api/Modificar',claseanimal.Modificar);
	app.post('/api/eliminaanimal',claseanimal.Eliminar);
	app.post('/api/seleccionaanimal',claseanimal.Seleccionartodos);
	app.post('/api/seleccioneanimalporid',claseanimal.Seleccionarporid);
	app.post('/api/seleccioneanimalporestado',claseanimal.Seleccionarporestado);

	var claseadministrador= new  controlleradministrador();
	app.post('/api/Guardaradministrador',claseadministrador.Guardar);
	app.post('/api/Modificaradministrador',claseadministrador.Modificar);
	app.post('/api/Eliminaradministrador',claseadministrador.Eliminar);
	app.post('/api/Loginadministrador',claseadministrador.Login);


	var clasepeticion = new controllerpeticion();
	app.post('/api/Nuevapeticion', clasepeticion.Guardar);
	app.post('/api/Modificarpeticion',clasepeticion.Modificar);
	app.post('/api/eliminarpeticion',clasepeticion.Eliminar);
	app.post('/api/Seleccionarpeticion',clasepeticion.Seleccionartodos);
	app.post('/api/seleccionpeticionporid',clasepeticion.Seleccionarporid);
	app.post('/api/Mandarcorreo',clasepeticion.Mandarcorreo);

	app.get('*',function(req,res ){
		//localhost
		res.sendfile('./index.html'); 
	});
};