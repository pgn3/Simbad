class Animal{
    constructor(_id,
        NOMBRE,
        TIPO,
        EDADAPROX,
        ESTADO,
        DESCRIPCION,
        FOTO,
        ADOPTANTE

    ){
        this._id=_id;
        this.NOMBRE=NOMBRE;
        this.TIPO=TIPO;
        this.EDADAPROX=EDADAPROX;
        this.ESTADO=ESTADO;
        this.DESCRIPCION=DESCRIPCION;
        this.FOTO=FOTO;
        this.ADOPTANTE=ADOPTANTE;
    }
    Guardar(){
        var objetoaenviar=this;
        //Retorno una nueva promesa
        return new Promise(function(resolve,reject){
            try {
                var xhr= new XMLHttpRequest();
            xhr.open('POST','http://localhost:8080/api/Nuevoanimal');
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
            xhr.open('POST','http://localhost:8080/api/Modificar');
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
            xhr.open('POST','http://localhost:8080/api/eliminaanimal');
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
            xhr.open('POST','http://localhost:8080/api/Seleccionaranimales');
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
            xhr.open('POST','http://localhost:8080/api/seleccioneanimalporid');
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
    Seleccionarporestado(){
        var objetoaenviar=this;
        //Retorno una nueva promesa
        return new Promise(function(resolve,reject){
            try {
                var xhr= new XMLHttpRequest();
            xhr.open('POST','http://localhost:8080/api/seleccioneanimalporestado');
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