document.addEventListener("deviceready", onDeviceReady, false); //funcion para leer el telefono

function onDeviceReady() {
         
    $("#iniciar").on('click',function(){
            
        setInterval(function () {    
            function onSuccess(acceleration) {
            $("#x").val(acceleration.x);
            $("#y").val(acceleration.y);
            $("#z").val(acceleration.z);
            
            
           // $(".respuesta_gps").append(position.coords.accuracy);

            };


            function onError() {
                alert('onError!');
            };

            navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
        }, 1000);

    });
    
    
};



