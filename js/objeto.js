var registroForm = [];

function AgregarDatos(){
    var personaRegistrada = new Object();
    var nombre = document.getElementById('nombre').value;
    var apellidoMaterno = document.getElementById('apellidoMaterno').value;
    var apellidoPaterno = document.getElementById('apellidoPaterno').value;
    var correo = document.getElementById('correo').value;
    var telefono = document.getElementById('telefono').value;
    var direccion = document.getElementById('direccion').value;

    personaRegistrada['Nombre'] = nombre;
    personaRegistrada['Apellido Paterno'] = apellidoPaterno;
    personaRegistrada['Apellido Materno'] = apellidoMaterno;
    personaRegistrada['Correo'] = correo;
    personaRegistrada['Telefono'] = telefono;
    personaRegistrada['Direccion'] = direccion;
    

    registroForm.push(personaRegistrada);

    console.log(registroForm);
   

}