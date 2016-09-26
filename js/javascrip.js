function multiplicar()
{
	var num1=Number(document.getElementById('n1').value);
	var num2=Number(document.getElementById('n2').value);
	var res=num1*num2;
	/*alert(res);*/
	document.getElementById('res').value=res;
}
function aleatorio()
{
	var inferior=1;
	var superir=100;
	numPosibilidades=superir-inferior;
	aleat=Math.random()*numPosibilidades;
	aleat=Math.round(aleat);
	alert(aleat);
}
document.getElementById("color").onchange = function(event){
    var valor = event.target.value;
    var nuevoColor = "linear-gradient("+valor+", #fff)";
    document.getElementsByTagName("body")[0].style.background = nuevoColor;
}
document.getElementById("calcular").onclick = function(){
    var N = document.getElementById("numero").value;
    var lista = document.createElement("ul");
    for(var i=1;i<=N;i++){
        var item = document.createElement("li");
        item.innerHTML = parseInt(Math.random()*100)+1;
        lista.appendChild(item);
    }
    document.getElementsByTagName("body")[0].appendChild(lista);
    return false;
}
function eliminar(event){
    var padre = document.getElementsByTagName(".formulario2.ul")[0];
    padre.removeChild(event.target);
}