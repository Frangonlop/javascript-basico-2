var i, num;
for (i=1; i<=14; i++){
    num = Math.floor(Math.random()*3);
    if (num == 0){
        num = "X";
    }
    document.write("Resultado "+i+" : "+num+"<br>");
}