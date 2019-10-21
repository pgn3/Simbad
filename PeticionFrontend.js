class Peticion{
    constructor(idPeticion,
        NOMBRE,
        APELLIDO,
        CEDULA,
        EMAIL,
        PAQUETE,
        ANIMAL

    ){
        this.idPeticion=idPeticion;
        this.NOMBRE=NOMBRE;
        this.APELLIDO=APELLIDO;
        this.CEDULA=CEDULA;
        this.EMAIL=EMAIL;
        this.PAQUETE=PAQUETE;
        this.ANIMAL=ANIMAL;
    }
    Guardar(){
        var objetoaenviar=this;
        //Retorno una nueva promesa
        return new Promise(function(resolve,reject){
            try {
                var xhr= new XMLHttpRequest();
            xhr.open('POST','http://localhost:8080/api/Nuevapeticion');
            xhr.setRequestHeader('Content-Type','application/json');
            xhr.onload= function(){
                if(xhr.status===200){
                    resolve(JSON.parse(xhr.responseText));
                }
                else{
                    reject(xhr);
                }
            };
            xhr.send(JSON.stringify(objetoaenviar));
                
            } catch (err) {
                reject(err.message);
            }
        });
    }
    Modificar(){
        var objetoaenviar=this;
        //Retorno una nueva promesa
        return new Promise(function(resolve,reject){
            try {
                var xhr= new XMLHttpRequest();
            xhr.open('POST','http://localhost:8080/api/Modificarpeticion');
            xhr.setRequestHeader('Content-Type','application/json');
            xhr.onload= function(){
                if(xhr.status===200){
                    resolve(JSON.parse(xhr.responseText));
                }
                else{
                    reject(xhr);
                }
            };
            xhr.send(JSON.stringify(objetoaenviar));
                
            } catch (err) {
                reject(err.message);
            }
        });
    }
    Eliminar(){
        var objetoaenviar=this;
        //Retorno una nueva promesa
        return new Promise(function(resolve,reject){
            try {
                var xhr= new XMLHttpRequest();
            xhr.open('POST','http://localhost:8080/api/eliminarpeticion');
            xhr.setRequestHeader('Content-Type','application/json');
            xhr.onload= function(){
                if(xhr.status===200){
                    resolve(JSON.parse(xhr.responseText));
                }
                else{
                    reject(xhr);
                }
            };
            xhr.send(JSON.stringify(objetoaenviar));
                
            } catch (err) {
                reject(err.message);
            }
        });
    }
    Seleccionartodos(){
        var objetoaenviar=this;
        //Retorno una nueva promesa
        return new Promise(function(resolve,reject){
            try {
                var xhr= new XMLHttpRequest();
            xhr.open('POST','http://localhost:8080/api/Seleccionarpeticion');
            xhr.setRequestHeader('Content-Type','application/json');
            xhr.onload= function(){
                if(xhr.status===200){
                    resolve(JSON.parse(xhr.responseText));
                }
                else{
                    reject(xhr);
                }
            };
            xhr.send(JSON.stringify(objetoaenviar));
                
            } catch (err) {
                reject(err.message);
            }
        });
    }
    Seleccionarporid(){
    
        var objetoaenviar=this;
        //Retorno una nueva promesa
        return new Promise(function(resolve,reject){
            try {
                var xhr= new XMLHttpRequest();
            xhr.open('POST','http://localhost:8080/api/seleccionpeticionporid');
            xhr.setRequestHeader('Content-Type','application/json');
            xhr.onload= function(){
                if(xhr.status===200){
                    resolve(JSON.parse(xhr.responseText));
                }
                else{
                    reject(xhr);
                }
            };
            xhr.send(JSON.stringify(objetoaenviar));
                
            } catch (err) {
                reject(err.message);
            }
        });
    }
    Mandarcorreo(){
        var objetoaenviar=this;
        //Retorno una nueva promesa
        return new Promise(function(resolve,reject){
            try {
                var xhr= new XMLHttpRequest();
            xhr.open('POST','http://localhost:8080/api/Mandarcorreo');
            xhr.setRequestHeader('Content-Type','application/json');
            xhr.onload= function(){
                if(xhr.status===200){
                    resolve(JSON.parse(xhr.responseText));
                }
                else{
                    reject(xhr);
                }
            };
            xhr.send(JSON.stringify(objetoaenviar));
                
            } catch (err) {
                reject(err.message);
            }
        });
    }
    }
    
