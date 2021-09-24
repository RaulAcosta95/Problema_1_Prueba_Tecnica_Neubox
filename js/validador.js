//Formateado para su facil comprensión
let inputArchivo = document.getElementById('archivo.txt');

inputArchivo.addEventListener('change', validadorDeArchivo, false);

function validadorDeArchivo(e){
    let rutaYNombreArchivo = inputArchivo.value;

    if(!/(.txt)$/i.test(rutaYNombreArchivo)){

        console.log('No Acepta el archivo');
        alert('Por favor, sube un archivo con la extensión .txt');
        console.log('Borra el archivo');
        inputArchivo.value = '';
        let divValidación = document.getElementById('validación');
        divValidación.innerHTML="";
        return false;

    }else{
        if(inputArchivo.files && inputArchivo.files[0]) {

            //Extraer contenido de txt
            let archivo = e.target.files[0];
            let lector = new FileReader();
            
            lector.onload = function(e) {
              let contenido = e.target.result;
              leerArchivo(contenido)
            };

            lector.readAsText(archivo);

        }
    }
}


function leerArchivo(contenido) {

    let líneasContenido = contenido.split('\n');
    let númerosContenido = líneasContenido[0].split(' ');
    let cantidadPrimeraInstrucción = númerosContenido[0];
    let cantidadSegundaInstrucción = númerosContenido[1];
    let cantidadMensaje = númerosContenido[2];
    let primeraInstrucción = líneasContenido[1];
    let segundaInstrucción = líneasContenido[2];
    let mensajeEncriptado = líneasContenido[3];

    if(cantidadPrimeraInstrucción == undefined || cantidadSegundaInstrucción == undefined || cantidadMensaje == undefined){
        console.log('Cantidades undefined');
        return;
    } else if(primeraInstrucción == undefined || segundaInstrucción == undefined){
        console.log('Instrucciónes undefined');
        return;
    } else if(mensajeEncriptado == undefined){
        console.log('Mensaje undefined');
        return;
    }

    console.log('Cantidad Primera Instrucción: ' + cantidadPrimeraInstrucción);
    console.log('Cantidad Segunda Instrucción: ' + cantidadSegundaInstrucción);
    console.log('Cantidad Mensaje: ' + cantidadMensaje);
    console.log('Primera Instrucción: ' + primeraInstrucción);
    console.log('Segunda Instrucción: ' + segundaInstrucción);
    console.log('Mensaje Encriptado: ' + mensajeEncriptado);

    identificaSiHayInstrucción(primeraInstrucción, segundaInstrucción, mensajeEncriptado);
}

function identificaSiHayInstrucción(primeraInstrucción, segundaInstrucción, mensajeEncriptado){

    let letrasPrimeraInstrucción = Array.from(primeraInstrucción);
    let letrasSegundaInstrucción = Array.from(segundaInstrucción);
    let letrasMensajeEncriptado = Array.from(mensajeEncriptado);

    letrasPrimeraInstrucción.pop();
    letrasSegundaInstrucción.pop();
    letrasMensajeEncriptado.pop();

    let hayInstrucciónEncriptada = false;
    let hayInstrucciónEncriptada2 = false;

    //No veo necesidad de hacer una función aparte para estos for
    //Recorre Mensaje Encriptado
    for (let iEncript = 0; iEncript < letrasMensajeEncriptado.length; iEncript++) {

        //Recorre Primera Instrucción
        for (let iPrimInst = 0; iPrimInst < letrasPrimeraInstrucción.length; iPrimInst++) {

            //Previene que si hay muchas letras al principio, no lo tome como malo
            //por motivo que solo puede repetirse 3 veces
            if(iPrimInst==0){
                while(letrasMensajeEncriptado[iEncript] == letrasPrimeraInstrucción[iPrimInst]){
                    if(letrasMensajeEncriptado[iEncript] == letrasMensajeEncriptado[iEncript+1]){
                        iEncript++;
                    }
                    else{
                        break;
                    }
                }
            }

            if(letrasMensajeEncriptado[iEncript+1] == letrasMensajeEncriptado[iEncript]){
                //Segunda letra repetida
                iEncript++;
            }
            if(letrasMensajeEncriptado[iEncript+1] == letrasMensajeEncriptado[iEncript]){
                //Tercera letra repetida
                iEncript++;
            }

            if(letrasMensajeEncriptado[iEncript] == letrasPrimeraInstrucción[iPrimInst]){
                iEncript++;
                if(iPrimInst == letrasPrimeraInstrucción.length-1){
                    hayInstrucciónEncriptada = true;
                }
            } else{
                break;
            }

        }
        
    }

    //Recorre Mensaje Encriptado
    for (let iEncript = 0; iEncript < letrasMensajeEncriptado.length; iEncript++) {

        //Recorre Primera Instrucción
        for (let iSegInst = 0; iSegInst < letrasSegundaInstrucción.length; iSegInst++) {

            //Previene que si hay muchas letras al principio, no lo tome como malo
            //por motivo que solo puede repetirse 3 veces
            if(iSegInst==0){
                while(letrasMensajeEncriptado[iEncript] == letrasSegundaInstrucción[iSegInst]){
                    if(letrasMensajeEncriptado[iEncript] == letrasMensajeEncriptado[iEncript+1]){
                        iEncript++;
                    }
                    else{
                        break;
                    }
                }
            }

            if(letrasMensajeEncriptado[iEncript+1] == letrasMensajeEncriptado[iEncript]){
                //Segunda letra repetida
                iEncript++;
            }
            if(letrasMensajeEncriptado[iEncript+1] == letrasMensajeEncriptado[iEncript]){
                //Tercera letra repetida
                iEncript++;
            }

            if(letrasMensajeEncriptado[iEncript] == letrasSegundaInstrucción[iSegInst]){
                iEncript++;
                if(iSegInst == letrasSegundaInstrucción.length-1){
                    hayInstrucciónEncriptada2 = true;
                }
            } else{
                break;
            }

        }
        
    }



    if(hayInstrucciónEncriptada){
        console.log('SI');
        muestraEnPantallaValidación('SI');
    } else{
        console.log('NO');
        muestraEnPantallaValidación('NO');
    }
    if(hayInstrucciónEncriptada2){
        console.log('SI');
        muestraEnPantallaValidación2('SI');
    } else{
        console.log('NO');
        muestraEnPantallaValidación2('NO');
    }
}

function muestraEnPantallaValidación(mensaje){
    let divValidación = document.getElementById('validación');
    divValidación.innerHTML=`<p>${mensaje}</p>`
}

function muestraEnPantallaValidación2(mensaje){
    let divValidación = document.getElementById('validación2');
    divValidación.innerHTML=`<p>${mensaje}</p>`
}