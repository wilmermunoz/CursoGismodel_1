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
    }

    // onSuccess: Get a snapshot of the current acceleration
    //
    function onSuccess(acceleration) {
        alert('Acceleration X: ' + acceleration.XX + '\n' +
              'Acceleration Y: ' + acceleration.YY + '\n' +
              'Acceleration Z: ' + acceleration.ZZ + '\n' +
              'Timestamp: '      + acceleration.timestamp + '\n');
    }

    // onError: Failed to get the acceleration
    //
    function onError() {
       alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

});
    }