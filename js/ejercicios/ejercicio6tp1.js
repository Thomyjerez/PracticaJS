// Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
let numero1 = parseInt(prompt("Ingrese el primer numero"));
let numero2 = parseInt(prompt("Ingrese el segundo numero"));

console.log(numero1);
console.log(numero2);

if(numero1 > numero2 ){
document.write ("numero1 es mayor que numero2 " + numero1 )
}else{
    document.write("numero2 es mayor que numero1 " + numero2 )
}