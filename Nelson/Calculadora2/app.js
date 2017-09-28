
var contac_html="";
for(var i=0; i<=9; i++){
    var mi_html='<button id="num_'+i+'" class="numerico" valor="'+i+'">'+i+'</button>';
    //console.log(mi_html);
    //contac_html+=mi_html;

    if((i-1)%3 ==0){
        $("#cajanumeros").append("<br>");
    }

    $("#cajanumeros").append(mi_html);
}

//$("#cajanumeros").html(mi_html);

var entrada1="";
var entrada2="";
var estado=0;
var h='';

$(".numerico").on('click',function(){
    $(".numerico").css('color','black');
    $(this).css('color','red');
    //var valor = $(this).attr('valor');
    var valor = $(this).text();

    if (estado ==0){
        entrada1=$("#entrada1").val()+''+valor;
        $("#entrada1").val(entrada1);
    }
    else{
        entrada2=$("#entrada2").val()+''+valor;
        $("#entrada2").val(entrada2);
    }

    //$("#entrada1").val(valor);
});


$(".operador").on('click',function(){
    $(".operador").css('color','black');
    $(this).css('color','red');
    h= $(this).text();
    console.log(h);
    estado=1;
});

$(".igual").on('click',function(){
    $(".igual").css('color','black');
    $(this).css('color','red');

    var ent1 = Number($("#entrada1").val());
    var ent2 = Number($("#entrada2").val());
    var result;
    if(h=='+'){
        result=ent1+ent2;
    }
    if(h=='-'){
        result=ent1-ent2;
    }
    if(h=='/'){
        result=ent1/ent2;
    }
    if(h=='*'){
        result=ent1*ent2;
    }

    $("#resultado").text(result);

    $("#entrada1").val('');
    $("#entrada2").val('');

    entrada1="";
    entrada2="";
    estado=0;
    h='';


});

var mi_obj={

};
console.log(mi_obj);
