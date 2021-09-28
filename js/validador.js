// Raúl Acosta 27-09-2021 https://github.com/RaulAcosta95/Problema_1_Prueba_Tecnica_Neubox
//Formateado para su facil comprensión
let inputArchivo = document.getElementById('archivo.txt');

let divValidación = document.getElementById('validación');
let divValidación2 = document.getElementById('validación2');

inputArchivo.addEventListener('change', validadorDeArchivo, false);

function validadorDeArchivo(e){
    let rutaYNombreArchivo = inputArchivo.value;

    if(!/(.txt)$/i.test(rutaYNombreArchivo)){

        console.log('No Acepta el archivo');
        alert('Por favor, sube un archivo con la extensión .txt');
        console.log('Borra el archivo');
        inputArchivo.value = '';
        divValidación.innerHTML="";
        divValidación2.innerHTML="";
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
    let cantidadPrimeraInstrucción = Number(númerosContenido[0]);
    let cantidadSegundaInstrucción = Number(númerosContenido[1]);
    let cantidadMensaje = Number(númerosContenido[2]);
    let primeraInstrucción = líneasContenido[1];
    let segundaInstrucción = líneasContenido[2];
    let mensajeEncriptado = líneasContenido[3];

    //Valida que no falte nada
    if(cantidadPrimeraInstrucción == undefined || cantidadSegundaInstrucción == undefined || cantidadMensaje == undefined){
       
        console.log('Cantidades undefined');
        alert('Cantidades undefined');
        divValidación.innerHTML="";
        divValidación2.innerHTML="";
        return false;

    } else if(primeraInstrucción == undefined || segundaInstrucción == undefined){

        console.log('Instrucciónes undefined');
        alert('Instrucciónes undefined');
        divValidación.innerHTML="";
        divValidación2.innerHTML="";
        return false;

    } else if(mensajeEncriptado == undefined){

        console.log('Mensaje undefined');
        alert('Mensaje undefined');
        divValidación.innerHTML="";
        divValidación2.innerHTML="";
        return false;

    }

    console.log(typeof cantidadPrimeraInstrucción);

    //Valida que sean datos correctos
    console.log("Cantidades: " + cantidadPrimeraInstrucción +"  " + cantidadSegundaInstrucción + "  " + cantidadMensaje);
    
    if(cantidadPrimeraInstrucción <2 || cantidadPrimeraInstrucción > 50 || isNaN(cantidadSegundaInstrucción)){

        console.log('Cantidad de la primer instrucción no aceptada');
        alert('Cantidad de la primer instrucción no aceptada');

        divValidación.innerHTML="";
        divValidación2.innerHTML="";
        return false;

    } else if(cantidadSegundaInstrucción <2 || cantidadSegundaInstrucción > 50 || isNaN(cantidadSegundaInstrucción)){

        console.log('Cantidad de la segunda instrucción no aceptada');
        alert('Cantidad de la segunda instrucción no aceptada');
        
        divValidación.innerHTML="";
        divValidación2.innerHTML="";
        return false;

    } else if(cantidadMensaje <3 || cantidadMensaje > 5000 || isNaN(cantidadSegundaInstrucción)){

        console.log('Cantidad del mensaje no aceptada');
        alert('Cantidad del mensaje no aceptada');

        divValidación.innerHTML="";
        divValidación2.innerHTML="";
        return false;
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


    let text = "";
    if(hayInstrucciónEncriptada){

        console.log('SI');
        muestraEnPantallaValidación('SI');

        text +='SI\n';
    } else{

        console.log('NO');
        muestraEnPantallaValidación('NO');

        text +='NO\n';
    }
    if(hayInstrucciónEncriptada2){

        console.log('SI');
        muestraEnPantallaValidación2('SI');

        text +='SI';
    } else{

        console.log('NO');
        muestraEnPantallaValidación2('NO');

        text +='NO';
    }
    
    generaBotonDescarga(text);
}

function muestraEnPantallaValidación(mensaje){
    divValidación.innerHTML=`<p>${mensaje}</p>`
}

function muestraEnPantallaValidación2(mensaje){
    divValidación2.innerHTML=`<p>${mensaje}</p>`
}

function generaBotonDescarga(text){

    let divDescarga = document.getElementById('divDescarga');
    divDescarga.innerHTML = `<input type="button" id="dwn-btn" value="Descargar archivo"/>`;

    // Start file download.
    document.getElementById("dwn-btn").addEventListener("click", function(){
        // Generate download of hello.txt file with some content
        let filename = "resultado.txt";
        download(filename, text);
    }, false);
}

function download(filename, text) {

    let element = document.createElement('a');

    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));

    element.setAttribute('download', filename);

    element.style.display = 'none';

    document.body.appendChild(element);

    element.click();
    
    document.body.removeChild(element);

}