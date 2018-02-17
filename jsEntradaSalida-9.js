/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

var numero;
var aumento;

numero= document.getElementById('sueldo').value;
aumento = document.getElementById('resultado').value;

numero = parseInt(numero);

aumento = numero + (numero * 0.1 );

alert("El total es: " +aumento)
//prompt(aumento)


}
