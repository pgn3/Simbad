var Item = require('./Peticion');
module.exports = class _Peticion{
    constructor( ) { // No es de mucha importancia, pero es necesario para crear los metodos  (vacio)

    }
//     Este método dentro de la clase, recibe como ya adelantamos dos parámetros, uno
// que corresponde a los datos que se reciben como petición, y el segundo a los datos
// que se envían tras la petición
    Guardar(req,res){//metodo que envia los datos a la base de datos 
        Item.create(
            {
            NOMBRE: req.body.NOMBRE,
            APELLIDO: req.body.APELLIDO,
            CEDULA: req.body.CEDULA,
            EMAIL:req.body.EMAIL,
            PAQUETE:req.body.PAQUETE,
            ANIMAL:req.body.ANIMAL
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

    Modificar(req,res){//Modifica los elementos ya guardados
        Item.update({_id:req.body.id},
                {$set:
            {
                NOMBRE: req.body.NOMBRE,
                APELLIDO: req.body.APELLIDO,
                CEDULA: req.body.CEDULA,
                EMAIL:req.body.EMAIL,
                PAQUETE:req.body.PAQUETE,
                ANIMAL:req.body.ANIMAL
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
        Item.remove({idPeticion:req.body.idPeticion},
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
        Item.find({idPeticion:req.body.idPeticion},function(err,item){
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
    Mandarcorreo(req,res){
        console.log(req.body);
        Item.find({idPeticion:req.body.idPeticion},function(err,item){
            if(err){
                res.send(err);
            }else{
                var nodemailer = require('nodemailer');
                //var NOMBRE=item.NOMBRE;
                //var APELLIDO=APELLIDO;
                //var CEDULA= CEDULA;
                //var EMAIL=item.EMAIL;
                //var PAQUETE= PAQUETE;
                const output = `
                <p>Petición de adopción</p>
                <h3>Petición para adoptar un:animal</h3>
                <ul>  
                <li>Nombre: ${req.body.NOMBRE}</li>
                <li>Apellido: ${req.body.APELLIDO}</li>
                <li>Cedula: ${req.body.CEDULA}</li>
                <li>Paquete elegido: ${req.body.PAQUETE}</li>
                </ul>
                <h3>Su petición ha sido aceptada por los administradores</h3>
                <p>Nos estaremos contactando con usted para mayor información,responda este correo si sigue interesado en adoptar al animal</p>`;
                // create reusable transporter object using the default SMTP transport
                let transporter = nodemailer.createTransport({
                    service:'outlook',
                    host: 'jose.ariaz@hotmail.com',
                    port: 587,
                    secure: false, // true for 465, false for other ports
                    auth: {
                        user: 'jose.ariaz@hotmail.com', // generated ethereal user
                        pass: 'szjd2002'  // generated ethereal password
                    },
                    tls:{
                        rejectUnauthorized:false            
                    }
                });
                let mailOptions = {
                    from: '"TEAMSIMBAD" jose.ariaz@hotmail.com', // sender address
                    to: req.body.EMAIL, // list of receivers
                    subject: 'Solicitud adoptar', // Subject line
                    text: 'Su solicitud ha sido aceptada,pongase en contacto con los administradores', // plain text body
                    html: output // html body
                };

                transporter.sendMail(mailOptions, (err, info) => {
                    if (err) {
                        res.send(err);
                    }else{
                    console.log('Message sent: %s', info.messageId);   
                    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                    res.json(item);
                    res.render('contact', {msg:'Email has been sent'});
                    }
                    
              
                    
                });
            }
        });
    }

}