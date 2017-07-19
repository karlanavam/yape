var cargarPagina = function(){
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    $("#stay_current_portrait").keyup(validarTelefonoPagDos);
    $("#filled-in-box").change(validarTelefonoPagDos);
}

var validarTelefonoPagDos = function () {
    var $inputTelPagDos = $("#stay_current_portrait").val();
    var longitud = $inputTelPagDos.length;
    console.log(longitud);
    var $checkBoxPagDos = $("#filled-in-box");
    var $btnContinuarPagDos = $("#btn-continuar-pagDos");

    if ( longitud == 10 && $checkBoxPagDos.prop("checked")) {
        $btnContinuarPagDos.removeClass("disabled");
    } else {
        $btnContinuarPagDos.addClass("disabled");
    }
}

function getJSON(url){
    return new Promise(function(resolve, reject){
        var ajax = new XMLHttpRequest();
        ajax.open("POST", url);
        ajax.send();
        ajax.onreadystatechange = function(data) {
                if (ajax.readyState == 4) {
                resolve(JSON.parse(ajax.responseText));
            } 
        }
    })
}

getJSON("http://localhost:3000/api/registerNumber")
.then(function(datos){console.log(datos)});


$(document).ready(cargarPagina);
