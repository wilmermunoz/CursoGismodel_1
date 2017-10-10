// Wait for device API libraries to load
//

document.addEventListener("deviceready", onDeviceReady, false);


function onDeviceReady() {


    function GCA(){

        var color1 = parseInt(Math.random() * (256 - 0) + 0);
        var color2 = parseInt(Math.random() * (256 - 0) + 0);
        var color3 = parseInt(Math.random() * (256 - 0) + 0);

        return "rgb("+color1+","+color2+","+color3+")";

    }

    $("#iniciar").on('click', function(){



        function onSuccess(acceleration) {
            $("#x").text("x: "+acceleration.x).css("background-color",GCA());
            $("#y").text("y: "+acceleration.y).css("background-color",GCA());
            $("#z").text("z: "+acceleration.z).css("background-color",GCA());
            $("#t").text("t: "+acceleration.timestamp).css("background-color",GCA());

        }


        function onError(error) {
            alert('onError!');
        }


        var options = { frequency: 1000 };  // Update every 3 seconds
        var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);


    });


}

