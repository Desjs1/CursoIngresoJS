function mostrar()
{

	var contador=0;
	var acumulador=0;
	var promedio;

	while(contador < 5);{
		numero=parseInt(prompt("ingrese un numero: "));
		acumulador = acumulador + numero;

		contador++;
	}

	acumulador= parseInt(acumulador);

	promedio= acumulador / 5



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN