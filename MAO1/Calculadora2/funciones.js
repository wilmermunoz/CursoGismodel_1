function limpiar(){
    document.getElementById('miFormulario').reset();
}

function sumar() {
    var x = paseInt(document.getElementById('valor1').value);
    var y = paseInt(document.getElementById('valor2').value);
    document.getElementById('el-resultado').innerHTML = x+y;

}

function restar() {
    var x = paseInt(document.getElementById('valor1').value);
    var y = paseInt(document.getElementById('valor2').value);
    document.getElementById('el-resultado').innerHTML = x-y;

}

function multiplicar() {
    var x = paseInt(document.getElementById('valor1').value);
    var y = paseInt(document.getElementById('valor2').value);
    document.getElementById('el-resultado').innerHTML = x*y;

}

function dividir() {
    var x = paseInt(document.getElementById('valor1').value);
    var y = paseInt(document.getElementById('valor2').value);
    document.getElementById('el-resultado').innerHTML = x/y;

}





