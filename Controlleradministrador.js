var Item = require('./Administrador');
let admininstanciado=new Item();
module.exports = class _Administrador{
    constructor( ) { // porque el profe quiso dejarlo asi xddxddxdxdxdxdx  (vacio)

    }
//     Este método dentro de la clase, recibe como ya adelantamos dos parámetros, uno
// que corresponde a los datos que se reciben como petición, y el segundo a los datos
// que se envían tras la petición
    Guardar(req,res){
        console.log(req);
        var claveysaltlocal=admininstanciado.setPassword(req.body.CLAVE);
        console.log(claveysaltlocal[0]);
        console.log(req.body.CLAVE);
        Item.create(
            {
                NOMBRE: req.body.NOMBRE,
                CLAVE:claveysaltlocal[0],
                EMAIL:req.body.EMAIL,
                ESTADO:req.body.ESTADO,
                FOTO:req.body.FOTO,
                SALT:claveysaltlocal[1]
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
                CLAVE:claveysaltlocal[0],
                EMAIL:req.body.EMAIL,
                ESTADO:req.body.ESTADO,
                FOTO:req.body.FOTO,
                SALT:claveysaltlocal[1]
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
        Item.remove({_id:req.body.id},
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
    Login(req,res){
        console.log(req.body);
        Item.find({EMAIL:req.body.EMAIL},function(err,item){
            console.log("entro");
            if(err){
                res.send(err)
            }
            else{
                if(item.length==0){
                    console.log("Email no existente");
                    res.status(400).send({
                        message:"Datos incorrectos"
                    });
                }
                else{
                    console.log(item[0].CLAVE);
                    if(admininstanciado.validPassword(req.body.CLAVE,item[0].CLAVE,item[0].SALT)){
                        item[0].SALT="NO INTENTE HAKIAR LA NASA";
                        res.json(item);
                    }
                    else{
                        res.status(400).send({
                        message:"Datos incorrectos"
                    });
                }
            }
        }});
    }
    

    

}