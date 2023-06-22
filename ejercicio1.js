var nombre1= prompt("Dame el nombre de la primera persona ");
var edad1 = prompt("Dame la edad de dicha persona ");
var nombre2 = prompt("Dame el nombre de la segunda persona ");
var edad2 = prompt("Dame la edad de la segunda persona ");
var nombre3 = prompt("Dame el nombre de la tercera persona ");
var edad3 = prompt("Dame la edad de la tercera persona ");

var maxedad = Math.max(edad1, edad2, edad3);
if (maxedad == edad1)
    document.write(nombre1+" es el mayor");
if (maxedad == edad2)
    document.write(nombre2+" es el mayor");
if (maxedad == edad3)
    document.write(nombre3+" es el mayor");