

function cerrar(){
  localStorage.removeItem("userlog")
  location.href = "Index.html";
}
function seguridadadmin(){
  if(localStorage.getItem("userlog")!=null){
    seguridad();
  }else{
    location.href = "Index.html";
  }
}
function seguridad(){
  if(localStorage.getItem("userlog")!=null){
    document.getElementById("res1").innerHTML+="<a href='#' data-toggle='modal' class='play-icon' onclick='cerrar()'>"+"Cerrar Sesión"+"</a>"
    document.getElementById("res2").innerHTML+="<a href='#' class='dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>"+"Animales"+"<span class='caret'>"+"</span>"+"</a>"+
    "<ul class='dropdown-menu'>"+
      "<li>"+"<a href='agregaranimal.html' data-hover='Agregar animal'>"+"Agregar animal"+"</a>"+"</li>"+
      "<li>"+"<a href='Listapeticiones.html' data-hover='Lista de peticiones'>"+"Lista de peticiones"+"</a>"+"</li>"+
    "</ul>"

  }else{
    document.getElementById("res1").innerHTML+="<a href='#myModal2' data-toggle='modal' class='play-icon'>"+"Iniciar Sesión"+"</a>"
    document.getElementById("res2").innerHTML+="<a href='#' class='dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>"+"Animales"+"<span class='caret'>"+"</span>"+"</a>"+
    "<ul class='dropdown-menu'>"+
      "<li>"+"<a href='gallery.html' data-hover='Ver animal'>"+"Ver animal"+"</a>"+"</li>"+
    "</ul>"

  }
}
function login(){
  admininstanciado=new Administrador(0,"",document.getElementById("CLAVE").value,document.getElementById("EMAIL").value,0,"");
  admininstanciado.Login().then(function(response){
    //alert("Bienvenido");
    localStorage.setItem("userlog",JSON.stringify(response));
    location.href = "Index.html";
  }),function(error){
    alert(error);
  }
}

let imagenbase641 ="";
function convertirfoto(){
  

  $('#FOTO1').change(function(){
    readURL(this);
  });
  function readURL(input){
    if(input.files && input.files[0]){
      var reader = new FileReader();

      reader.onload=function(e){
        imagenbase641=e.target.result;
      }
      reader.readAsDataURL(input.files[0]);
    }
  }
  guardarinfodeladmin();
}

function guardarinfodeladmin(){ 
  var admininstanciado = new Administrador(0,
  document.getElementById("NOMBRE").value,
  document.getElementById("CLAVE1").value,
  document.getElementById("EMAIL1").value,
  1,
  imagenbase641
  );
  admininstanciado.Guardar().then(function(response){
      console.log("Success",response);
      alert("Guardado con exito");
  },function(error){
      console.log("Failed",error);
      alert("Error"+error);
  });
}