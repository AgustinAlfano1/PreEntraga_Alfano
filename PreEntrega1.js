//Primero declaramos una variable del nombre del usuario para dirigirnos derirectamente a él. 
let nombreUsuario = prompt('Hola! Esperamos que te encuentres bien! \nIngresa tu nombre');
//Creamos un while para validar que el nombre no este vacio.
while (nombreUsuario == '') {
    alert('Nombre Invalido 🤨');
    nombreUsuario = prompt('Hola! Esperamos que te encuentres bien! \nIngresa tu nombre aquí');
}

//Declaramos un mensaje para poder posteriormente confeccionar un while segun la respuesta del msj.
let mensaje = parseInt(prompt('Bienvenido/a '+nombreUsuario+'\n¿Estas listo para elegir tu moto?'+'\n1 - Si\n2 - No'));

//Creamos un while para mostrar los diferentes productos y sus precios respectivos. 
while (mensaje == 1) {
    let moto = prompt('Por el momento podemos ofrecerte las siguientes opciones 🏍:\nA - Aprilia RS 125\nB - BMW G 310 R\nC - Ducati Scrambler Icon\nD - Honda CB125R\nE - Honda CMX 500 Rebel');

    // Generamos un swutch dentro del while para considerar las diferentes elecciones del usuario. 
    switch (moto.toUpperCase()) {
        case 'A':
            let respuestaA = prompt('¡Gran eleccion!\nElejiste la Aprilia RS 125 😉\n\nSu precio al contado es de $ 1500000\nDesea financiarlo?\nS-SI  N-NO');
            // Dentro de los case generamos un if else para considerar un precio u otro en base a si el usuario quiere su producto financiado o no.
            if (respuestaA.toUpperCase() == 'S') {
                financiar(1500000);
            }else{
                alert ('Tu precio final de compra es por $ 1500000');
            }
            break;
        case 'B':
            let respuestaB = prompt('¡Gran eleccion!\nElejiste la BMW G 310 R 😉\n\nSu precio al contado es de $ 2000000\nDesea financiarlo?\nS-SI  N-NO');
            if (respuestaB.toUpperCase() == 'S') {
                financiar(2000000);
            }else{
                alert ('Tu precio final de compra es por $ 2000000');
            }
            break;
        case 'C':
            let respuestaC = prompt('¡Gran eleccion!\nElejiste la Ducati Scrambler Icon 😉\n\nSu precio al contado es de $ 2500000\nDesea financiarlo?\nS-SI  N-NO');
            if (respuestaC.toUpperCase() == 'S') {
                financiar(2500000);
            }else{
                alert ('Tu precio final de compra es por $ 2500000');
            }
            break;
        case 'D':
            let respuestaD = prompt('¡Gran eleccion!\nElejiste la Honda CB125R 😉\n\nSu precio al contado es de $ 3000000\nDesea financiarlo?\nS-SI  N-NO');
            if (respuestaD.toUpperCase() == 'S') {
                financiar(3000000);
            }else{
                alert ('Tu precio final de compra es por $ 3000000');
            }
            break;
        case 'E':
            let respuestaE = prompt('¡Gran eleccion!\nElejiste la Honda CMX 500 Rebel 😉\n\nSu precio al contado es de $ 3500000\nDesea financiarlo?\nS-SI  N-NO');
            if (respuestaE.toUpperCase() == 'S') {
                financiar(3500000);
            }else{
                alert ('Tu precio final de compra es por $ 3500000');
            }
            break;
        default:
            false
            alert('Codigo inexistente 😢');
            break;
    }
    // Con esta opcion podriamos volver a cargar el while o salir del ciclo
    mensaje = parseFloat(prompt('Deseas continuar con esta eleccion o desea cambiarla?\n1 - Volver\n2 - Continuar'));
    // Creamos este if con el fin de arrojar un mensaje de contacto en caso de que el usuario escoja una de las opciones de compra. 
    if (mensaje != 1) {
        prompt('Ingresa un numero o mail para poder contactarte!');
    }
}

//Declaramos esta funcion para aplicar el interes y detallar las cuotas de los productos segun la eleccion del usuario. 
function financiar(precio) {
    precioTotalFinanciado = parseInt(precio * 1.35);
    let cuotas = precioTotalFinanciado / 6;
    alert ('Te damos la opcion de financiar tu compra a 6 cuotas de $ '+cuotas+'\n\nTu precio final de compra financiado es por $ '+precioTotalFinanciado);
}

alert('Muchas gracias '+nombreUsuario);