function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;
	var maximo=10;
	var minimo=0;

	numero= Math.floor(Math.random()*((maximo + 1) - minimo) + minimo);

	if(numero >=9){
		alert("nota excelente: "+ numero);

		
	}else if(numero < 4){
		alert("Vamos la proxima se puede: "+ numero);

	}else{
		alert("aprobó: " + numero);
	}
		
}//FIN DE LA FUNCIÓN