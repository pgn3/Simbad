class Administrador{
    constructor(id,
        NOMBRE,
        CLAVE,
        EMAIL,
        ESTADO,
        FOTO,

    ){
        this.id=id;
        this.NOMBRE=NOMBRE;
        this.CLAVE=CLAVE;
        this.EMAIL=EMAIL;
        this.ESTADO=ESTADO;
        this.FOTO=FOTO;
    }
    Guardar(){
        var objetoaenviar=this;
        //Retorno una nueva promesa
        return new Promise(function(resolve,reject){
            try {
                var xhr= new XMLHttpRequest();
            xhr.open('POST','http://localhost:8080/api/Guardaradministrador');
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
            xhr.open('POST','http://localhost:8080/api/Modificaradministrador');
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
            xhr.open('POST','http://localhost:8080/api/Eliminaradministrador');
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
    Login(){
        var objetoaenviar=this;
        //Retorno una nueva promesa
        return new Promise(function(resolve,reject){
            try {
                var xhr= new XMLHttpRequest();
            xhr.open('POST','/api/Loginadministrador');
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