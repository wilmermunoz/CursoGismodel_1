
document.addEventListener("deviceready", onDeviceReady, false);
 
// Cordova is ready 
function onDeviceReady() {
  var db = window.sqlitePlugin.openDatabase({name: "my.db"});
 
  db.transaction(function(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS tabla1 (id integer, fecha text)');
    var fecha = new Date();
    var fecha_n = fecha.getTime();
    var fecha_tex = fecha.getFullYear()+'-'+(fecha.getMonth()+1)+'-'+fecha.getDate()+' '+fecha.getHours()+':'+fecha.getMinutes()+':'+fecha.getSeconds();
    tx.executeSql("INSERT INTO tabla1 (id, fecha) VALUES (?,?)", [fecha_n, fecha_tex], function(tx, res) {
      

    }, function(e) {
      console.log("ERROR: " + e.message);
    });
  });

    db.transaction(function(tx) {
    tx.executeSql("select id, fecha from tabla1;", [], function(tx, res) {
        for(var i=0; i< res.rows.length; i++ ){

        var fila = res.rows.item(i).id + '@'+res.rows.item(i).fecha ; 
        $(".consola").append(fila);
         $(".consola").append("<br>");
      }

    });
  });
 



}