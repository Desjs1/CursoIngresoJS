function mostrar()
{

	var contador=0;
	// declarar variables
	var numero=0;
	var maximo=0;
	var minimo=0;
	var respuesta='si';
	var flag=0;


	do{
		numero= parseInt(prompt("ingrese un numero: "));

		while(isNaN(numero)){
			
			numero=parseInt(prompt("Ese no es un numero. Ingrese un numero: "));
		}
		//if(contador == 0){

		//	maximo= numero;

		//	minimo= numero;

		//}
		 if(flag == 0 || numero > maximo) {

			maximo = numero;
		}
		 if(flag == 0 || numero < minimo){

			minimo = numero;

			flag = 1;
		}
		respuesta=prompt("¿quieres seguir proponiendo otro numero? ")

    }while(respuesta =='si')


document.getElementById('maximo').value=maximo;
document.getElementById('minimo').value=minimo;

}//FIN DE LA FUNCIÓN