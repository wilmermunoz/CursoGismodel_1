document.addEventListener("deviceready", onDeviceReady, false); // detecta si es un telefono
 
// Cordova is ready 
function onDeviceReady() {
  var db = window.sqlitePlugin.openDatabase({name: "mi_bd.db", androidDatabaseImplementation: 2, androidLockWorkaround: 1}); //crea la base de datos

      db.transaction(function(tx) {
        //tx.executeSql('DROP TABLE IF EXISTS tabla1');
        tx.executeSql('CREATE TABLE IF NOT EXISTS tabla1 (id integer, fecha text, fecha_num integer)');
          

        var fecha= new Date();
        var fecha_n = fecha.getTime();
        var fecha_text = fecha.getFullYear()+'-'+(fecha.getMonth()+1)+'-'+fecha.getDate()+' '+fecha.getHours()+':'+fecha.getMinutes()+':'+fecha.getSeconds();


       tx.executeSql("INSERT INTO tabla1 (id,fecha,fecha_num) VALUES (?,?,?)", [fecha_n,fecha_text,fecha_n], function(tx, res) {
        }, function(e) {
          console.log("ERROR: " + e.message);
        });
          
     });

    db.transaction(function(tx) {
            tx.executeSql("select id, fecha, fecha_num from tabla1;", [], function(tx, res) {
                
                //alert(res.rows.length);
                for(var i=0; i< res.rows.length; i++){
                    var fila = res.rows.item(i).id+"@"+res.rows.item(i).fecha+"@"+res.rows.item(i).fecha_num;
                    $(".consola").append(fila);
                    $(".consola").append("<br>");
                }
                
            //console.log("res.rows.length: " + res.rows.length + " -- should be 1");
           // console.log("res.rows.item(0).id: " + res.rows.item(0).cnt + " -- should be 1");
                
    });
        
  });
    
}
