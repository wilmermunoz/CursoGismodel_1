$("#id_1").text('Claudia');
$(".clase_1").text('mi nueva clase');
$(".claseJS").css('color', 'pink').css('font-size', '59px');

$("#boton1").on('click', function(){

    //var valor1 = $("#boton1").attr('data');
    //var valor2 = $(this).attr("midato");
    //alert(valor1);
    //alert(valor2);
   var entrada1 = $(".entrada1").val();
   alert(entrada1);
});

function boton2(variable1, variable2){
    alert(variable1);
    alert(variable2);
};


$(".boton3").on('click', function(){
    alert('Hola_3');
});


$(".boton4").on('click', function(){
    alert('Hola_3');
});


//for(var i =1; i<50; i ++){
    //console.log(i);
    //var html = "<input type='button' value='boton_"+i+"'>";
    //console.log(html);
    //$(".misbotones").append(html);
    //var html = "<input onclick = 'function_botones ("+i+") 'type='button' value='boton_"+i+"'>";
   // console.log(html);
    //$(".misbotones").append(html);
//};

//function function_botones(valor){
    //console.log(valor);
//}

for(var i =1; i<50; i ++){
    var html = "<input class = 'botonciclo' midato= '"+i+"' type='button' value='boton_"+i+"'>";
    console.log(html);
    $(".misbotones").append(html);
};

$(".botonciclo").on('click', function(){
    var agregar = $(this).attr("midato");
    console.log(agregar);
});
