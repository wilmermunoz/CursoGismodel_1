

for(var i=9; i>=0; i--){
    var mi_html='<button id="num_'+i+'" class="numerico" valor="'+i+'">'+i+'</button>';

    //console.log(mi_html);

    if(i%3 ==0){
        $("#cajanumeros").append("<br>");
    }

    $("#cajanumeros").append(mi_html);

}

var estado=0;

$(".numerico").on('click', function(){
    $(".numerico").css('color','black');
    $(this).css('color','rgb(56, 131, 56)');

    //var valor = $(this).attr('valor');
    var valor = $(this).text();
    if(estado==0){
        var entrada1=$("#entrada1").val()+''+valor;
        $("#entrada1").val(entrada1);
    }else{
        var entrada2=$("#entrada2").val()+''+valor;
        $("#entrada2").val(entrada2);

    }



});

var operador;
$(".operador").on('click', function(){
    operador= $(this).text();
    estado=1;
});

$("#igual").on('click',function(){
    var ent1 = Number($("#entrada1").val());
    var ent2 = Number($("#entrada2").val());
    var result;
    if(operador=='+'){
        result=ent1+ent2;
    }
    else if(operador=='-'){
        result=ent1-ent2;
    }
    else if(operador=='x'){
        result=ent1*ent2;
    }
    else if(operador=='/'){
        result=ent1/ent2;
    }
    $("#resultado").text(":"+result);
    estado=0;
    $("#entrada1").val("");
    $("#entrada2").val("");
})

var mi_obj={
    0:{
        1:['true','false'],
        2:[],
        3:[]
    }
};
console.log(mi_obj);

