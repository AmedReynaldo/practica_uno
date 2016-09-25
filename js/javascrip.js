function multiplicar()
{
	var num1=Number(document.getElementById('n1').value);
	var num2=Number(document.getElementById('n2').value);
	var res=num1*num2;
	document.getElementById('res').value=res;
}
function aleatorio()
{
	var inferior=4;
	var superir=100;
	numPosibilidades=superir-inferior;
	aleat=Math.random()*numPosibilidades;
	aleat=Math.round(aleat);
	alert(aleat);
}