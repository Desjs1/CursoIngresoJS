function mostrar()
{
    var numero;
    var contadornumerosdiv = 0;

    numero=parseInt(prompt("Ingrese un numero: "));

    while(isNaN(numero)){

        numero=parseInt(prompt("Reingrese un numero: "));
    }
    for(var i = 1; i <=numero; i++) {

        if(numero % i == 0) {
            console.log(i);
            contadornumerosdiv++;

        }
    }
    console.log("cantidad de numeros divisores: "+ contadornumerosdiv)




}//FIN DE LA FUNCIÓN