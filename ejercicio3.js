num1 = Math.floor(Math.random()*99)+1;
num2 = Math.floor(Math.random()*99)+1;
num3 = Math.floor(Math.random()*99)+1;
while (num2 == num1 || num2 == num3 || num3 == num1){
    num2 = Math.floor(Math.random()*99+1);
    num3 = Math.floor(Math.random()*99+1);
}
document.write("Los números aleatorios son:\n")
document.write(num1 +"\n"+ num2+"\n"+num3);