/*AL ELEMENTO P SE LE ASIGNA UNA VARIABLE, CON EL QUERYSELECTOR SE SELECCIONAL LA ETIQUETA QUE VAMOS A USAR
let parrafo = document.querySelector('p');
USANDO LA VARIABLE Y CON EL INNERHTML SE LE ASIGNA UN TEXTO O VALOR A LA VARIABLE
parrafo.innerHTML = 'Indica un número del 1 al 10';*/

let numeroSecreto = generarNumeroSecreto();

//CREAR FUNCIONES
function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
}

function validarIntento(){
    let numeroIngresado = parseInt(document.getElementById('valorIngresado').value);
    //console.log(typeof(numeroIngresado));//IDENTIFICA EL TIPO DE DATO
    console.log(numeroIngresado);
    console.log (numeroSecreto); //VALIDAMOS QUE EL NUMERO SECRETO FUNCIONE
    //console.log(typeof(numeroSecreto));
    console.log(numeroIngresado == numeroSecreto);

    
}

function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
    
}

//LLAMAR LAS FUNCIONES
asignarTextoElemento('h1', 'Juego del número secreto');
asignarTextoElemento('p', 'Indica un número del 1 al 10');