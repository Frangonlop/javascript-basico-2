var cadena = prompt("Introduce una frase que tenga paréntesis:");
var i, car;
var salida = "";
var copiar = false;

for (i=0; i<cadena.length; i++) {
    car = cadena.charAt(i);
    if (car == ")") {
        copiar = false;
    }
    if (copiar == true) {
        salida = salida + car;
    }   
    if (car == "(") {
        copiar = true;
    }
}
document.write(salida);