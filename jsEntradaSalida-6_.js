/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
var numeroUno;
var numeroDos;
var suma;


numeroUno = (isNaN(parseInt(document.getElementById('numeroUno').value)));
numeroDos = (isNaN(parseInt(document.getElementById('numeroDos').value)));

//numeroUno= parseInt(numeroUno); 
//numeroDos= parseInt(numeroDos);
suma=document.getElementById('sumar').value;

suma= numeroUno+numeroDos;


alert("La suma de los numeros es: " +suma);



//prompt();

 /*var n1 = parseInt(document.getElementById('txtN1').value);
 var n2 = parseInt(document.getElementById('txtN2').value);
 var suma = n1 + n2;
 alert("La suma es: "+suma);
*/
}
