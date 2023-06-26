var cadena = prompt("Dame una cadena de texto y comprobaré si es palindromo:");
var i;
var cad=cadena.replace(/\s/g, "");
var cadena_reves = "";
for(i=cad.length-1; i>=0 ; i--){
    cadena_reves = cadena_reves + cad.charAt(i);
}
if (cad == cadena_reves){
    document.write("Si es palindromo");
}
else{
    document.write("No es palindromo")
}