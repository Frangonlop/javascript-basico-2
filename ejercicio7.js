var cadena = prompt("Dame una frase");
var i;
for (i=0; i<cadena.length; i++){
    if(i == cadena.length-1){
        document.write(cadena.charAt(i));
    }
    else{
        document.write(cadena.charAt(i)+"-");
    }
}