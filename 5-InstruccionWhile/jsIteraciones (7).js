function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

	do{
		numero=parseInt(prompt("Ingrese un numero:"));

		while(isNaN(numero)){
			
			numero=parseInt(prompt("Ese no es un numero. Ingrese un numero"));
		}

		acumulador= acumulador + numero;

		seguir= prompt("¿quieres seguir poniendo otro numero?");

		contador++;

	}while(seguir == "si");
	promedio= acumulador / contador


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN