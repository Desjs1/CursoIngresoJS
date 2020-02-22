function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var flag= 0;
	var respuesta='si';
	do{
		numero=parseInt(prompt("Ingrese un numero:"));

		while(isNaN(numero)){
			
			numero=parseInt(prompt("Ese no es un numero. Ingrese un numero"));
		}
		if(numero >= 0){
			
			positivo= positivo + numero; 
		} else {
			negativo= negativo * numero;
			flag = 1;
			//contador++;

		}

		seguir= prompt("¿quieres seguir poniendo otro numero?");


	}while(seguir == "si");
	//if(contador ==0 ){
		if(flag == 0){
			negativo=0
		}
			

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN