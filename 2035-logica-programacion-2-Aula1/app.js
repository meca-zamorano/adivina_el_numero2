//AL H1 SE LE ASIGNA UNA VARIABLE, CON EL QUERYSELECTOR SE SELECCIONAL LA ETIQUETA QUE VAMOS A USAR
let titulo = document.querySelector('h1');
let parrafo = document.querySelector('p');
//USANDO LA VARIABLE Y CON EL INNERHTML SE LE ASIGNA UN TEXTO O VALOR A LA VARIABLE
titulo.innerHTML = 'Juego del número secreto';
parrafo.innerHTML = 'Indica un número del 1 al 10';

