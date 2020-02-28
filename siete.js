function mostrar()
{
    var nota;
    var sexo;
    var sexobajo;
    var preomedio=0;
    var notabajas;
    var varonesconnotasmayor6;
    var flag=0;

    for(var i=1;i < 5; i++){
        nota= parseInt(prompt("Ingrese un nota entre 0 y 10: "));

        sexo = prompt("Ingrese sexo (f-m)");
        
        if( flag =0 || nota < notabajas ){
            notabajas= nota;
            sexobajo= sexo; 

        }
    }

}
