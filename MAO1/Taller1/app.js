
$("#id_1").text(' Manuel y papa ');
$(".Clase1").text(' mi nueva clase  ');

$(".Clase2").css("color", "red");
$(".Clase2").css("font-size", "50px");

$("#boton1").on('click', function(){
    var valor2 =$(this).attr("midato")
    var valor1 = $("#boton1").attr('data');
    alert(valor1);
    alert(valor2);
    alert('HHOOLLAAA');

});

function boton2(variable1, variable2){
    alert('BOTON 2');

}

$(".boton3").on('click', function(){
    alert('HHOOLLAAAAAAAAAAAA');});


$(".boton4").on('click', function(){
    alert('HHOOLLAAAAAAAAA BOTON4');});



for(var i=1; i<50; i++){

//    var mi_html ="<input type='button' value='boton_"+i+"'>";
 //   console.log(html);
       var mi_html ="<input onclick='function_botones("+i+")' type='button' value='boton_"+i+"'>";

    $(".misbotones").append(mi_html);


    function function_botones(valor){
        console.log(valor)
    }
}

$(".misbotones").append(mi_html);


for(var i=1; i<50; i++){

      var mi_html ="<input class='botonciclo'  midato= '"+i+"' type='button' value='boton_"+i+"'>";

    $(".misbotones").append(mi_html);

}
$(".botonciclo").on('click', function(){
    console.log(midato);

})
