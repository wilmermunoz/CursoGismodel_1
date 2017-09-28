
//CREANDO CALCULADORA

var my_obj={};
for(var i=0;i<=9;i++){
    var mi_html='<button id="num_'+i+'" class="numerico" valor="'+i+'">'+i+'</button>';
    //console.log(mi_html);
    
    if((i-1)%3==0){
        my_obj.push
        $("#cajanumeros").append("<br>");
    }
    
    $("#cajanumeros").append(mi_html); //La función de append es agregar 
    
    //console.log(i%3);
}

var estado= 0;

$(".numerico").on('click', function(){
    $(".numerico").css('color','black');
    $(this).css('color','red');
    
    if(estado==0){
        var valor= $(this).text();
        //var valor= $(this).attr("valor");
         var entrada1=$("#entrada1").val()+''+valor;
        $("#entrada1").val(entrada1);
    }else{
        var valor= $(this).text();
        //var valor= $(this).attr("valor");
        var entrada2=$("#entrada2").val()+''+valor;
        $("#entrada2").val(entrada2);
    }
    
    //console.log(valor);
    //$("#entrada1").val(valor);
});


var signo;
$(".operador").on('click',function(){
    signo= $(this).text();
    estado=1;
    console.log(signo);    
});


$("#igual").on('click',function(){
    console.log(signo);
    var contenido1= Number($("#entrada1").val());
    var contenido2= Number($("#entrada2").val());

    var result;
    if(signo=='+'){
        result=contenido1+contenido2;
    }
    else if (signo=='-'){
        result=contenido1-contenido2;   
    }
    else if (signo=='X'){
        result=contenido1*contenido2;   
    }
    else if (signo=='/'){
        result=contenido1/contenido2;   
    }
    
    console.log(contenido1);
    console.log(contenido2);
    $("#resultado").text(":"+ result);
});


//jugando con objetos

/*var mi_obj={
    0:{
        1:[
            'claudia', 'Kty'
        ],
        2:[],
        3:[]
    }
};
console.log(mi_obj);*/

