/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el numeroDividendo y el numeroDivisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	

var numeroDividendo;
var numeroDivisor;
var SacarResto;


numeroDividendo= document.getElementById('numeroDividendo').value;
numeroDivisor= document.getElementById('numeroDivisor').value;
//alert("el numeroDividendo es: " +numeroDividendo)
//alert("el numeroDivisor es: " +numeroDivisor)

numeroDividendo = parseInt(numeroDividendo);
numeroDivisor = parseInt(numeroDivisor);

SacarResto = numeroDividendo %  numeroDivisor;
alert("el resto es: " +SacarResto)

}
