$("#id_1").text("PRIMER APP");

$(".js").css("color","red");

$("#boton1").on("click", function(){

    var valor1 = $("#input1").val();
    var valor2 = $(this).attr("name");
    alert(valor1);
    alert(valor2);
});

$(".boton3").on("click", function(){
    alert(" Es el boton 3");

});

$(".boton4").on("click", function(){
    alert(" Es el boton 4");
});

function boton2(){
    alert("Este es el boton 2")
};

for(var i=1; i<50;i++){
    var html= "<input type='button' dato='"+i+"' class='gg' value='boton_"+i+"' >";
    $(".misBotones").append(html);
   // console.log(html);
}

//MODO FUNCION
//function botones(valor){
   // console.log(valor)
//}


// MODO CLASE
$(".gg").on("click", function(){
   var rr = $(this).attr("dato");
    alert(rr);

    // console.log($(this).attr("dato"));
    //var valor = $(".gg").attr("value");
    //alert(valor);
});



