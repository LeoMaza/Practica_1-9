const   USUARIO_REGISTRADO ="Leo";
const   CONTRASENIA_REGISTRADA = "123";


let usuarioIngresado = "Usuario por defecto";
let contraseniaIngresada = "Contraseña por defecto";


function verificacion() {
    usuarioIngresado = document.querySelector('#usuario_ingresado').value;
    contraseniaIngresada= document.querySelector('#contrasenia_ingresada').value;

    if (usuarioIngresado == USUARIO_REGISTRADO && contraseniaIngresada == CONTRASENIA_REGISTRADA)  {
        document.querySelector('#mensaje_resultado').innerHTML =
        `<h1> Usuario ${usuarioIngresado} bienvenido`;
    }
    else{
        document.querySelector('#mensaje_resultado').innerHTML=
        `    <h1> Contraseña Incorrecta!!  </h1>   `

    }

     
}

