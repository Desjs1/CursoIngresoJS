function mostrar()
{
	//declarar contadores y variables 
	var acumuladorpositivos= 0;
	var acumuladornegativos= 0;
	var contadorpositvo= 0;
	var contadornegativo= 0;
	var contadorceros= 0 ;
	var contadorpares= 0;
	var promediopositivos= 0;
	var promedionegativos= 0;
	var diferencia= 0;
	var respuesta="si";
	var flag=0;

	do{
		numero=parseInt(prompt("ingrese un numero: "));

		while(isNaN(numero)){

			numero=parseInt(prompt("Ese no es numero. ingrese un numero: "));

		}
		if(numero >=0){
			//positivo



		}

		seguir= prompt("¿quieres seguir poniendo otro numero?");
		
		
	
	}while(respuesta!="no")
	
	document.write("cantidad de suma entre positivos:" + acumuladorpositivos + "</br>");
	document.write("cantidad de suma entre negativos:" + acumuladornegativos + "</br>");
	document.write("contador de positivos:" + contadorpositivos + "</br>");
	document.write("cantidad de negativos:" + contadornegativos + "</br>");
	document.write("cantidad de ceros:" + contadorceros + "</br>");
	document.write("cantidad de pares:" + contadorpares + "</br>");
	document.write("promedio de positivos:" + promediopositivos + "</br>");
	document.write("promedio de negativos:" + promedionegativos + "</br>");
	document.write("diferencia entre negativos y positivos:" + diferencia + "</br>");
	

}//FIN DE LA FUNCIÓN