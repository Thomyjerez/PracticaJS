let numero1 = parseInt(prompt("Ingrese el primer numero"));

console.log(numero1)

if (numero1 % 2 === 0 || numero1 % 3 === 3 || numero1 % 5 === 5 || numero1 % 7 === 7 ) {
    document.write("Es divisible por 2, 3, 5 y 7");
}else{
    document.write ("No es divisible por 2, 3, 5 y 7");
}