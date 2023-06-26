var cadena = prompt("Dame una cadena de texto y le daré la vuelta");
var i;
for(i = cadena.length-1; i>=0 ; i--){
    document.write(cadena.charAt(i));
}