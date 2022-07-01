let numero1 = parseInt( prompt("Ingrese un numero"));

if(numero1 % 2 === 0 || numero1 % 3 === 0 || numero1 % 5 === 0 || numero1 % 7 === 0){
    if (numero1 % 2 === 0){
        document.write ("Es divisible por 2. ")
    }
    if (numero1 % 3 === 0){
        document.write ("Es divisible por 3. ")
    }
    if (numero1 % 5 === 0){
        document.write ("Es divisible por 5. ")
    }
    if (numero1 % 7 === 0){
        document.write ("Es divisible por 7. ")
    }else{
        document.write("No es divisible por 2, 3, 5 ni 7")
    }
}
   