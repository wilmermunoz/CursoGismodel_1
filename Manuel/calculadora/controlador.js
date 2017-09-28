
for(var i=0; i<=9; i++){
    var mi_html='<button id="num_'+i+'" class="numerico" valor="'+i+'">'+i+'</button>';


    //console.log(mi_html);  //mirar en la consola que aparesca el mensaje y asi verificar que si funciona
    if((i-1)%3  ==0){
        $("#cajanumeros").append("<br>");
    }


    $("#cajanumeros").append(mi_html);



    console.log(i%3);
}

var estado=0;
var entrada1='';
 $(".numerico").on('click', function(){
     $(".numerico").css('color','black');
     $(this).css('color','#00d8ff');

     var valor=$(this).attr('valor');

     if(estado==0){
         var entrada1=$("#entrada1").val()+''+valor;
     $("#entrada1").val(entrada1);
     }else{
         var entrada2=$("#entrada2").val()+''+valor;
     $("#entrada2").val(entrada2);
     }


     //var valor=$(this).attr('valor');
     console.log(valor);
     //$("#entrada1").val(valor);
     //console.log('SI FUNCIONA');
 });

var operador;
$(".operador").on('click'),function(){
    operador= $(this).text();
    console.log(operador);
    estado=1;
}

$("#igual").on('click', function(){
    var entrada1=($("#entrada1").val());
    var entrada2=($("#entrada2").val());
    var result;

    if(operador=='+'){
    result=entrada1+entrada2;
}
    else if(operador=='-'){
    result=entrada1-entrada2;
}
      else if(operador=='*'){
    result=entrada1*entrada2;
}
      else if(operador=='/'){
    result=entrada1/entrada2;
}
    $("#resultado") .text(":"+result);
    estado=0;
    $("#entrada1").val("");
    $("#entrada2").val("");



    //console.log(entrada1+entrada2)
})

var mi_obj={
    0:{
        1
        2
        3


console.log(mi-obj)







































