//Esta estructura de JavaScript nos condiciona que todo este código se ejecutara solo si el documento fue cargado completamente
$(document).ready(function() {
    // Primero establecemos las funciones genericas que no requieren uso de alguna variable predefinida

    function encriptar(array) {
        // Se ubican en el array las vocales a cambiar y se reasignan en su lugar la encriptacion
        for (let position = 0; position < array.length; position++) {
            if (array[position] == 'a') {
                array[position] = 'ai';
            }
            if (array[position] == 'e') {
                array[position] = 'enter';
            }
            if (array[position] == 'i') {
                array[position] = 'imes';
            }
            if (array[position] == 'o') {
                array[position] = 'ober';
            }
            if (array[position] == 'u') {
                array[position] = 'ufat';
            }
        }
        return array;
    }

    function desencriptar(texto) {
        //Se pasa un string como parametro y utilizamos el metodo replaceAll para hallar las coincidencias y reemplazarlas para desencriptar
        return texto.replaceAll("ai","a").replaceAll("enter","e").replaceAll("imes","i").replaceAll("ober","o").replaceAll("ufat","u");
    }

    //Establecemos los patrametros del DOM que vamos a necesitar para la posterior manipulación
    let input = document.getElementById('encriptado');
    let respuesta = document.getElementById('respuesta');
    let btnEncriptar = document.getElementById("Encriptar");
    let btnDesencriptar = document.getElementById("Desencriptar");
    let btnCopy = document.getElementById("btnCopy");
    //Aqui ponemos las acciones que queremos que se ejecuten con alguna predeterminada acción
    input.focus();
    btnEncriptar.onclick = ingresar;
    btnDesencriptar.onclick = ingresoDesencriptar;
    btnCopy.onclick = copiar;

    // Ingreso los valores para encriptar
    function ingresar() {
        
        let letras = [];
        
        if (input.value.length > 0) {
            //Aqui separamos cada uno de los carateres dentro del "String" y lo almacenamos dentro del "Array"
            for (const iterador of input.value) {
                letras.push(iterador.toLowerCase());
            }

            letras = encriptar(letras);
            letras = letras.join("");
            input.value = "";
            respuesta.value = letras;
            letras = [];
        }
        else {
            alert('Para encriptar primero debes ingresar algun valor en el campo');
            input.focus();
        }
    }

    // Ingreso los valores para desencriptar
    function ingresoDesencriptar() {
        
        
        if (input.value.length > 0) {
            // Variable para almacenar el valor de la entrada
            let palabra = input.value; 
            palabra = desencriptar(palabra);
            input.value = "";
            respuesta.value = palabra;
        }
        else {
            alert('Para desencriptar primero debes ingresar algun valor en el campo');
            input.focus();
        }
    }
    
    function copiar() {
        respuesta.select();
        document.execCommand("copy");
        respuesta.value = "";
        input.focus();
    }
});