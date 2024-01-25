let numeroSecreto = 0;
let numeroSorteados = [];
let intentos = 0;
let numeroMaximo = 10;
let numeroMaximoDeJuegos = 4;
let numeroDeJuegos = 0;

function generarNumeroSecreto() {
    return Math.floor(Math.random() * numeroMaximo) + 1;
}

function asignarTextoElemento(elemento, texto) {
    // Selecciona la etiqueta "elemento: h1, p, etc"
    let elementoHTML = document.querySelector(elemento);
    // Modifica el contenido de la etiqueta "elemento: h1, p, etc"
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${intentos === 1 ? "vez" : "veces"}`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // El usuario no acerto
        if(numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número es menor")
        } else {         
            asignarTextoElemento("p", "El número es mayor")
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = "";
}

function agregarNumeroSecreto() {
    if(numeroSorteados.length === numeroMaximo) {
        //numeroSorteados = [];
        asignarTextoElemento('p', 'No hay más números para sortear');
    } else if (numeroDeJuegos === numeroMaximoDeJuegos) {
        asignarTextoElemento('p', 'No hay más juegos');
        numeroDeJuegos = 0;
    } else {
        while(true){
            numeroSecreto = generarNumeroSecreto();
            if(numeroSorteados.indexOf(numeroSecreto) === -1) {
                numeroSorteados.push(numeroSecreto);
                break;
            }
        }
        console.log(numeroSorteados);
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 y ${numeroMaximo}`);
    agregarNumeroSecreto();
    intentos = 1;
    numeroDeJuegos++;
}

function reiniciarJuego() {
    // Limpiar caja
    limpiarCaja();
    // Indicar mensaje de intervalo de números
    // Generar el número aleatorio
    // Inicializar los intentos
    condicionesIniciales();
    // Deshabilitar el botón de reiniciar
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();