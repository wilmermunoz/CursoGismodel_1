//var concac_html="";
//var my_obj={};

for (var i=0; i<=9; i++) {
    var mi_html='<button id="num_'+i+'"class="numerico" valor="'+i+'">'+i+'</button>'
 //   console.log(mi_html)

    if(i%3 ==0){
        $("#cajaNumeros").append("<br>");
    }

    $("#cajaNumeros").append(mi_html);

 //   concac_html+=mi_html;
}

// $("#cajaNumeros").append(concac_html);
var estado=0;
var entrada1='';
$(".numerico").on('click', function(){
    $(".numerico").css('color','black');
    $(this).css('color','red');

    var valor=$(this).attr('valor');
  //  var valor=$(this).text('valor');


    if(estado==0){
   var entrada1=$("#entrada1").val()+''+valor;
    $("#entrada1").val(entrada1);
    }else{
         var entrada2=$("#entrada2").val()+''+valor;
    $("#entrada2").val(entrada2);
    }


   // var valor=$(this).text('valor');
   // console.log(valor);

 //   $("#entrada1").val(valor);

});


var operador;
$(".operador").on('click', function(){
      operador=$(this).text();
  //  console.log(operador);
    estado=1;
});

$("#igual").on('click',function(){
    var ent1 = Number($("#entrada1").val());
    var ent2 = Number($("#entrada2").val());
    var result;
    if(operador=="+"){
    result=ent1+ent2;
    }
    else if(operador=='-'){
        result=ent1-ent2;
    }
     else if(operador=='*'){
        result=ent1*ent2;
    } else if(operador=='/'){
        result=ent1/ent2;
    }

$("#resultado").text(" :  "+result);
    estado=0;
    $("#entrada1").val("");
    $("#entrada2").val("");

});



