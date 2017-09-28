

for(var i=9; i>=0; i--){
    var mi_html='<button id="num_'+i+'" class="numerico" valor="'+i+'">'+i+'</button>';

    //console.log(mi_html);

    if(i%3 ==0){
       $("#cajanumeros").append("<br>");
       }

    $("#cajanumeros").append(mi_html);

}

var entrada1='';
$(".numerico").on('click', function(){
    $(".numerico").css('color','black');
    $(this).css('color','rgb(56, 131, 56)');




    //var valor = $(this).attr('valor');
    var valor = $(this).text();
    entrada1=$("#entrada1").val()+''+valor;
    $("#entrada1").val(entrada1);

    //$("#entrada1").val(valor);

});

