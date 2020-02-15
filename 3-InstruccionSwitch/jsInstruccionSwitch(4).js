function mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value;

//alert (mesDelAño);
	
switch(mes) {
    case "Enero":
    case"Marzo":
    case"Mayo":
    case"Julio":
    case"Agosto":
    case "Octubre":
    case"Diciembre":
    alert("tiene 31 días");
    break;
    case "Febrero":
    alert("tiene 28 días");
    break;
    default:
    alert("tiene 30 dias")

}





}//FIN DE LA FUNCIÓN