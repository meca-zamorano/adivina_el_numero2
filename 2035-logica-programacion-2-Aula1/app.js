/*AL ELEMENTO P SE LE ASIGNA UNA VARIABLE, CON EL QUERYSELECTOR SE SELECCIONAL LA ETIQUETA QUE VAMOS A USAR
let parrafo = document.querySelector('p');
USANDO LA VARIABLE Y CON EL INNERHTML SE LE ASIGNA UN TEXTO O VALOR A LA VARIABLE
parrafo.innerHTML = 'Indica un número del 1 al 10';*/

let numeroSecreto = 0;
let contadorIntentos = 0;


//CREAR FUNCIONES
function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
}

function validarIntento(){
    let numeroIngresado = parseInt(document.getElementById('valorIngresado').value);
    //console.log(typeof(numeroIngresado));//IDENTIFICA EL TIPO DE DATO

    if(numeroSecreto === numeroIngresado){
        asignarTextoElemento('p',`Acertaste el número en ${contadorIntentos} ${(contadorIntentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        if (numeroIngresado>numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        contadorIntentos++;
        limpiar();
    }
    
}

function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
    
}

function limpiar(){
    let limpiarInput = document.querySelector('#valorIngresado').value = '';//ME PERMITE TOMAR EL VALOR DEL INPUT
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', 'Indica un número del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    //console.log(numeroSecreto);
    contadorIntentos = 1;
}
function reiniciarJuego(){
    //LIMPIAR EL INPUT
    limpiar();
    //INDICAR MENSAJE DE INTERVALO DE NUMEROS
    //GENERAR EL NUMERO ALEATORIO
    //INICIALIZAR EL NUMERO DE INTENTOS
    condicionesIniciales();
    
    //DESHABILITAR EL BOTON DE NUEVO JUEGO
    document.querySelector('#reiniciar').setAttribute('disabled ','true');

}

//LLAMAR LAS FUNCIONES
condicionesIniciales();