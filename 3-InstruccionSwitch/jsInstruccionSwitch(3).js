function mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value;

//alert (mesDelAño);
	
switch(mes){
    case "Enero":
    alert("Este mes tiene 30 o más días");
    break;
    case "Febrero":
    alert(". Este mes no tiene más de 29 días");
    break;
    case"Marzo":
    case"Abril":
    case "Mayo":
    case "Junio":
    case"Julio":
    case"Agosto":
    case "Septiembre":
    case "Octubre":
    case"Noviembre":
    case"Diciembre":
    alert("Este mes tiene 30 o más días");
    break;
}

 /*if(mes == "Febrero"){
     alert(" Este mes no tiene más de 29 días");
 }
 else {
 alert("Este mes tiene 30 o más días");
 }
}
//FIN DE LA FUNCIÓN