
function validar__Texto(texto) {
    
    const regex = /^[a-z\s]+$/;
    return regex.test(texto);
}

function mostrar__Error(message) {
    document.getElementById("mensaje_Error").textContent = message;
}

function limpiar__Error() {
    document.getElementById("mensaje_Error").textContent = "";
}


function encriptar__Texto() {
    var texto = document.getElementById("ingreso_Texto").value;
    
    if (!validar__Texto(texto)) {
        mostrar__Error("El texto solo debe contener letras minúsculas y espacios...");
        return;
    }
    limpiar__Error();

    

    let output = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("salida_Texto").value = output;

}
  
function desencriptar__Texto() {
        
    
    let output = document.getElementById("salida_Texto").value
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("salida_Texto").value = output;

  }
  
function copiar__Texto() {
    var output = document.getElementById("salida_Texto");
    output.select();
    output.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    alert("Texto copiado: " + output.value);
  }   

   
    


