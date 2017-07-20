var cargarPagina = function(){
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    $("#stay_current_portrait").keyup(validarPagDos);
    $("#filled-in-box").change(validarPagDos);
    $('#btn-continuar-pagDos').click(usarApi);
}

var endPoints = {
    urlNumber: 'http://localhost:3000/api/registerNumber',
    urlCode: 'http://localhost:3000/api/resendCode',
    urlUser: 'http://localhost:3000/api/createUser'
};

var validarPagDos = function () {
    const $inputTelPagDos = $("#stay_current_portrait").val();
    const longitud = $inputTelPagDos.length;
    const $checkBoxPagDos = $("#filled-in-box");
    const $btnContinuarPagDos = $("#btn-continuar-pagDos");

    if ( longitud == 10 && $checkBoxPagDos.prop("checked")) {
        $btnContinuarPagDos.removeClass("disabled");
    } else {
        $btnContinuarPagDos.addClass("disabled");
    }
};

var usarApi = function () {
    $.post(endPoints.urlNumber, {
        "phone": $("#stay_current_portrait").val(),
        "terms": true
    }).then(function(response) {
                    console.log(response)
                    console.log("Tu código de validación es: " + response.data.code)
                      }).catch(function(error) {
                        console.log(error);
    });
};




$(document).ready(cargarPagina);
