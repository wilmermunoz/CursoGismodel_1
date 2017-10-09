document.addEventListener("deviceready", onDeviceReady, false); //funcion para leer el telefono

function onDeviceReady() {


        function GCA(){
                   var color1=parseInt(Math.random()*(256 - 0)+ 0);
                   var color2=parseInt(Math.random()*(256 - 0)+ 0);
                   var color3=parseInt(Math.random()*(256 - 0)+ 0);

                   return "rgb("+color1+","+color2+","+color3+")";

        }

    $("#iniciar").on('click',function(){

        function onSuccess(acceleration) {

                $("#x").text("X:"+ acceleration.x).css("background-color",GCA());
                $("#y").text("Y:"+ acceleration.y).css("background-color",GCA());
                $("#z").text("Z:"+ acceleration.z).css("background-color",GCA());
                $("#t").text("T:"+ acceleration.timestamp).css("background-color",GCA());


            }

            // onError Callback receives a PositionError object 
            // 
        function onError(error) {
            alert('code: '    + error.code    + '\n' +
                    'message: ' + error.message + '\n');
        }

            // Options: throws an error if no update is received every 30 seconds. 
            // 
        var options = { frequency: 500 };  // Update every 3 seconds
        var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);


    });

};
