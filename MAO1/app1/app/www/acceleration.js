// Wait for device API libraries to load
//
document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
//
function onDeviceReady() {
    function onDeviceReady() {
        $("#acceleration").on('click',function(){

            var onSuccess = function(acceleration) {
                $("#XX").val(acceleration.XX);
                $("#YY").val(acceleration.YY);
                $("#XX").val(acceleration.ZZ);
                $("#Timestamp").val(acceleration.timestamp)
                //     console.log(#lat)
            };
            navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);



        });
    } 
}