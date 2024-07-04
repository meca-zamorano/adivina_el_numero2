/*AL ELEMENTO P SE LE ASIGNA UNA VARIABLE, CON EL QUERYSELECTOR SE SELECCIONAL LA ETIQUETA QUE VAMOS A USAR
let parrafo = document.querySelector('p');
USANDO LA VARIABLE Y CON EL INNERHTML SE LE ASIGNA UN TEXTO O VALOR A LA VARIABLE
parrafo.innerHTML = 'Indica un número del 1 al 10';*/

//CREAR FUNCIONES
function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
}

function intentoDeUsuario(){
    
}

//LLAMAR LAS FUNCIONES
asignarTextoElemento('h1', 'Juego del número secreto');
asignarTextoElemento('p', 'Indica un número del 1 al 10')