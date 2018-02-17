/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	
var numeroUno;
var numeroDos;
var suma;

numeroUno= document.getElementById('numeroUno').value;
numeroDos = document.getElementById('numeroDos').value;

suma = parseInt(numeroUno) + parseInt(numeroDos);
alert("la suma es: "+suma)


}

function restar()
{
var numeroUno;
var numeroDos;
var restar;

numeroUno= document.getElementById('numeroUno').value;
numeroDos = document.getElementById('numeroDos').value;

restar = parseInt(numeroUno) - parseInt(numeroDos);
alert("la restar es: " +restar)

}

function multiplicar()
{ 
var numeroUno;
var numeroDos;
var multiplicar;

numeroUno= document.getElementById('numeroUno').value;
numeroDos = document.getElementById('numeroDos').value;

multiplicar =parseInt(numeroUno) * parseInt(numeroDos);
alert("la multiplicacion es: "+multiplicar)
}

function dividir()
{
var numeroUno;
var numeroDos;
var dividir;

numeroUno= document.getElementById('numeroUno').value;
numeroDos = document.getElementById('numeroDos').value;

dividir = parseInt(numeroUno) / parseInt(numeroDos);
alert("la divicion es: "+dividir)

}

