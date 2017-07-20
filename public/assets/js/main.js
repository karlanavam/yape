var cargarPagina = function(){
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    
    $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
  });
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
                    localStorage.setItem("phone", response.data.phone);
                    localStorage.setItem("terms", response.data.terms);
                    localStorage.setItem("code", response.data.code);
                    alerta()
                      }).catch(function(error) {
                        console.log(error);
    });
};

function alerta(){
    alert("Tu código de validación es: " + localStorage.getItem("code"));
}

$(document).ready(cargarPagina);