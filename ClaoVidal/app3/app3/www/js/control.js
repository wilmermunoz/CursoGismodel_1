//creando funciones

var i=100;
while(i<=1000){
    
        //$("#height").append("<button class='h' tipo='h' tamanio='"+i+"'>"+i+"</button>");
        //$("#width").append("<button class='w' tipo='w' tamanio='"+i+"'>"+i+"</button>");
     $("#height").append("<button onclick='cambiartamanio("+i+",\"h\")'>"+i+"</button>");
     $("#width").append("<button onclick='cambiartamanio("+i+",\"w\")'>"+i+"</button>");

          i=i+50;
};


/*$(".btn").on("click",function(){
    if($(this).attr('tipo')=='h'){
       console.log('h')
       }
    else{
        console.log('w')
    }*/



             /*   $(".h").on('click',function(){
                    var tm=$(this).attr("tamanio");
                    console.log(tm);
                });

                $(".w").on('click',function(){
                    var tm=$(this).attr("tamanio");
                    console.log(tm);
                });*/

function cambiartamanio(par1,par2){
    if(par2=='h'){
       $("#img1").attr("height",par1);
    }
    else if(par2=='w'){
        $("#img1").attr("width",par1);
    }
}

