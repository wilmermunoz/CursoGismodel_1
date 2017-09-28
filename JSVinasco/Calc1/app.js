/*
var estado=0;
var resultado=0;

for(var i=9;i>=0;i--){
    var mi_html= '<button id="num_'+i+'"class="numerico" valor="'+i+'">'+i+'</button>';
  //  console.log(mi_html);

    if(i%3 == 0){
       $("#cajanumeros").append("<br>");
    }

    $("#cajanumeros").append(mi_html);

    console.log(i%3);

}

//Evento de click

var entrada1="";

$(".numerico").on('click', function(){
    //estilos con CSS
    //poner todos los colores negros
    //luego poner el seleccionado en rojo
     $(".numerico").css('color','black');
     $(this).css('color','#1e642b');

     var valor = $(this).text();
    // entrada1= $("#entrada1").val()+''+valor;
     //$("#entrada1").val(entrada1);

    //var valor = $(this).attr('valor')
    //Almacenar el valor del click
      //var valor = $(this).text();
      //console.log(valor)
//Enviar valores a el cajon de entrada1
      //$("entrada1").val(valor);


//Evento de


    if(estado==0){
    var entrada1=$("#entrada1").val()+''+valor;
    $("#entrada1").val(entrada1);
}
else{
    var entrada2=$("#entrada2").val()+''+valor;
    $("#entrada2").val(entrada2);
}

} );


//Evento de click operador

var operador;
$(".operador").on('click', function(){
       operador= $(this).text();
       console.log(operador) ;
       estado=1;
});


$("#igual").on('click'),function(){

    var ent1 = Number($("#entrada1").val());
    var ent2 = Number($("#entrada2").val());
    var result;
    if(operador== '+'){
        result=ent1+ent2
    }
    else if(operador== '+'){
        result=ent1+ent2
    }
    else if(operador== '-'){
        result=ent1-ent2
    }
    else if(operador== '*'){
        result=ent1*ent2
    }
    else if(operador== '÷'){
        result=ent1/ent2
    }

   $("#resultado").text(":"+result)  ;

}
*/

var mi_obj = {0:[1,2,3], 1:[4,5,6]};
console.log(mi_obj);



//Evento de igual


//if (operador == +){

  //  entrada1+entrada2
    //console.log(resultado)
//}
//if (operador == -){

  //  entrada1-entrada2
    //console.log(resultado)
//}

//if (operador == *){

  //  entrada1*entrada2
//    console.log(resultado)
//}
//if (operador == ÷){

  //  entrada1/entrada2
  //  console.log(resultado)

//}





//Otra manera de hacer lo mismo
//var contac_html = "";
//for(var i=9;i>=0;i--){
//    var mi_html= '<button id="num_'+i+'"class="numerico">'+i+'</button>';
//    console.log(mi_html);
//    contac_html=mi_html;
//}
