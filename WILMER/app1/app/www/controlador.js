document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    $("#ObtGPS").on('click', function(){
        var onSuccess = function(position) {
            $("#lat").val(position.coords.latitude );
            $("#lng").val(position.coords.longitude);
            $("#alt").val(position.coords.altitude );
        };
        function onError(error) {
            alert('code: '    + error.code    + '\n' +
                  'message: ' + error.message + '\n');
        }
        
        navigator.geolocation.getCurrentPosition(onSuccess, onError);

    });



}
