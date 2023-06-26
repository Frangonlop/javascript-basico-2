var cadena = prompt("Dame una frase y contaré el número de vocales");
var i, j;
var cont = 0;
var vocales = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
for (i = 0; i < cadena.length; i++) {
    for (j = 0; j < vocales.length; j++) {
        if (cadena.charAt(i) == vocales[j]) {
            cont = cont + 1;
        }
    }
}
document.write("La frase presenta un total de " + cont + " vocales")  