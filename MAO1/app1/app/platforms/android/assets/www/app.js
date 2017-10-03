    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        
        
        
           var onSuccess = function(position) {
               $(".respuestagps").append(position.coords.latitude);
               $(".respuestagps").append(position.coords.longitude);
               $(".respuestagps").append(position.coords.altitude);
               
        
               
    };
 
    // onError Callback receives a PositionError object 
    // 
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
 
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }