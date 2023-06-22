var i, num;
for (i=1; i<=14; i++){
    num = Math.floor(Math.random()*100+1);
    if (num <= 60){
        document.write("Resultado "+i+" : 1 <br>");
    }
    else if(num > 60 && num <= 90){
        document.write("Resultado "+i+" : X <br>");
    }
    else{
        document.write("Resultado "+i+" : 2 <br>")
    }
}