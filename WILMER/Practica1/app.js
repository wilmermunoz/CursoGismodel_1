
$("#id_1").text(999999999);

$(".clase1").text('mi nueva clase');

$(".clasejs").css("color", "red").css("font-size", "50px");

$("#boton1").on('click', function(){

    var entrada1 = $('.entrada1').val();
    alert(entrada1);

});

function boton2(variable1, variable2){
    alert(variable1);
    alert(variable2);
}

for(var i=1; i<=50; i++){
    var mi_html = "<input class='botonciclo' midato='"+i+"' type='button' value='boton_"+i+"'> ";
    //console.log(mi_html);
    $(".misbotones").append(mi_html);
}


$(".botonciclo").on('click', function(){
    console.log('hola');
});

