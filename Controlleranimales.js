var Item = require('./Animales');
module.exports = class _Animal{
    constructor( ) { // porque el profe quiso dejarlo asi xddxddxdxdxdxdx  (vacio)

    }
//     Este método dentro de la clase, recibe como ya adelantamos dos parámetros, uno
// que corresponde a los datos que se reciben como petición, y el segundo a los datos
// que se envían tras la petición
    Guardar(req,res){
        Item.create(
            {
            NOMBRE: req.body.NOMBRE,
            TIPO: req.body.TIPO,
            EDADAPROX: req.body.EDADAPROX,
            ESTADO:req.body.ESTADO,
            DESCRIPCION:req.body.DESCRIPCION,
            FOTO:req.body.FOTO,
            ADOPTANTE:req.body.ADOPTANTE
            },
            function(err,item){
                if(err){
                  res.send(err);  
                }else{
                    Item.find(function(err,item){
                        if(err)
                            res.send(err)
                        res.json(item);
                        
                    });
                }
            }
        )
        
    }

    Modificar(req,res){
        Item.update({_id:req.body.id},
                {$set:
            {
            NOMBRE: req.body.NOMBRE,
            TIPO: req.body.DESCRIPCION,
            EDADAPROX: req.body.EDADAPROX,
            ESTADO:req.body.ESTADO,
            DESCRIPCION:req.body.DESCRIPCION,
            FOTO:req.body.FOTO,
            ADOPTANTE:req.body.ADOPTANTE
            }},
            function(err,item){
                if(err){
                  res.send(err);  
                }else{
                    Item.find(function(err,item){
                        if(err)
                            res.send(err)
                        res.json(item);
                        
                    });
                }
            }
        )
    }

    Eliminar(req,res){
        Item.remove({_id:req.body._id},
            function(err,item) {
                if(err){
                    res.send(err);
                }
                else{
                    Item.find(function(err,item){
                        if(err)
                            res.send(err)
                        res.json(item);
                    });
                }
            });
        }
    

    Seleccionartodos(req,res){
        Item.find(
            function(err,item) {
                if(err){
                    res.send(err);
                }
                else{
                    res.json(item);
                }
            }
        );
    }

    Seleccionarporid(req,res){
        Item.find({_id:req.body._id},function(err,item){
            if(err){
                res.send(err)
            }
            else{
                res.json(item);
            }
        });
    }
    Seleccionarporestado(req,res){
        Item.find({ESTADO:1},function(err,item){
            if(err){
                res.send(err)
            }
            else{
                res.json(item);
            }
        });
    }

}