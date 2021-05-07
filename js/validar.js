function validacion(){
    var formvalido = true;

    var nombre = document.getElementById("nombre").value;
    var apellidoPaterno = document.getElementById("apellidoPaterno").value;
    var apellidoMaterno= document.getElementById("apellidoMaterno").value;
    var correo = document.getElementById("correo").value;
    var telefono = document.getElementById("telefono").value;
    var direccion = document.getElementById("direccion").value;
   

    if(nombre == null || nombre.length == 0){
        alert("elnombre no puede estar vacio ");
        formvalido = false;
    }
    if(apellidoPaterno == null || apellidoPaterno.length == 0){
        alert("el apellido no puede estar vacio ");
        formvalido = false;
    }
    if(apellidoMaterno == null || apellidoMaterno.length == 0){
        alert("el apellido Materno no puede estar vacio ");
        formvalido = false;
    }
    if(correo == null || correo.length == 0){
        alert("el correo no puede estar vacio ");
        formvalido = false;
    }
    if(telefono == null || telefono.length == 0){
        alert("el telefono no puede estar vacio ");
        formvalido = false;
    }
    if(direccion == null || direccion.length == 0){
        alert("la direccion no puede estar vacio ");
        formvalido = false;
    }
  

    return formvalido;
}





