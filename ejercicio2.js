/*
Con el math random sacamos un número aleatorio entre 0 y 1
Debido a esto lo multiplicamos por 99 y nos saldrían números entre 1 y 99 pero con muchos decimales
Por eso redondeamos hacia abajo con el math floor quedandonos números entre 0 y 98 explicando esto el porque le sumamos 1, para que nos salgan números entre 1 y 99
*/

document.write(Math.floor(Math.random()*99)+1)