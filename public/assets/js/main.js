var cargarPagina = function(){
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    $("#stay_current_portrait").keyup(validarPagDos);
    $("#filled-in-box").change(validarPagDos);
    $('#btn-continuar-pagDos').click(usarApi);
    $('#codigo').keyup(validarCodigo);
    $('#first_name').keyup(validarPagCuatro);
    $('#email').keyup(validarPagCuatro);
    $('#contrasena').keyup(validarPagCuatro); $('#btnCinco').click(usarApiUser);
    $('#tarjeta-numero').keyup(validarPagSeis); 
}

// Declarar variables que jalan valores de localStorage 
var telefono = localStorage.getItem("phone");
var terminos = localStorage.getItem("terms");
var codigo = localStorage.getItem("code");

// Declarar objeto con urls para peticiones
var endPoints = {
    urlNumber: 'http://localhost:3000/api/registerNumber',
    urlCode: 'http://localhost:3000/api/resendCode',
    urlUser: 'http://localhost:3000/api/createUser',
    urlCard: 'http://localhost:3000/api/registerCard'
};

//Función que valida los inputs de formulario de la pantalla dos 
var validarPagDos = function () {
    const $inputTelPagDos = $("#stay_current_portrait").val();
    const longitud = $inputTelPagDos.length;
    const $checkBoxPagDos = $("#filled-in-box");
    const $btnContinuarPagDos = $("#btn-continuar-pagDos");

    // Si la longitud del input es igual a 10 y el check box está lleno - habilita botón
    if ( longitud == 10 && $checkBoxPagDos.prop("checked")) {
        $btnContinuarPagDos.removeClass("disabled");
    } else {
        $btnContinuarPagDos.addClass("disabled");
    }
};

// Api para postear el teléfono y decir que el checkbox es true
// envía los datos a localStorage
var usarApi = function () {
    $.post(endPoints.urlNumber, {
        "phone": $("#stay_current_portrait").val(),
        "terms": true
    }).then(function(response) {
                    localStorage.setItem("phone", response.data.phone);
                    localStorage.setItem("terms", response.data.terms);
                    localStorage.setItem("code", response.data.code);
                    alerta();
                      }).catch(function(error) {
                        console.log(error);
    });
};

// Alerta para decirle al usuario su código
function alerta(){
    alert("Tu código de validación es: " + localStorage.getItem("code"));
}


var validarCodigo = function() {
    var $valorCodigo = $('#codigo').val();
    var codigoGenerado = codigo.length;
    
    // si el código ingresado es igual en no. de carácteres al de localStorage pasa al siguiente if
    if ($valorCodigo.length == codigoGenerado){
        // si el código es igual en valor
            if ($valorCodigo == codigo){
                    location.href = "pantalla-cuatro.html";
                }  else {
            alert("error");
        };
    };
};

// Genera un código nuevo, accede a la URL del código, y sobreescribe el código pasado con el nuevo
var generarCodigo = function () {
    $.post(endPoints.urlCode, {
        "phone": localStorage.getItem("phone"),
    }).then(function(response) {
                    localStorage.setItem('code', response.data);
                    console.log(response.data);
                    alert(response.data);
                    }).catch(function(error) {
                        console.log(error);
    });
};

// Validar inputs de pantalla-cuatro.html
var validarPagCuatro = function () {
    const $inputNombre = $('#first_name').val();
    const $inputCorreo = $('#email').val();
    const $inputContraseña = $('#contrasena').val();
    const $btnPagCuatro = $('#btnCinco');
    
    if($inputNombre.length != 0 && $inputCorreo.length != 0 && $inputContraseña.length == 6) {
        $btnPagCuatro.removeClass("disabled");  
    } else {
        $btnPagCuatro.addClass("disabled");     
    }
};


// Request a API crear usuario
var usarApiUser = function () {
    
    var $inputNombre2 = $("#first_name").val();
    var $inputMail2 = $("#email").val();
    var $inputContrasena2 = $("#contrasena").val();
    console.log(localStorage.getItem("phone"));
    
    $.post(endPoints.urlUser, {
        "phone": telefono,
        "name": $inputNombre2,
        "email": $inputMail2,
        "password": $inputContrasena2
    }).then(function(response) {
                    console.log(response);
                      }).catch(function(error) {
                        console.log(error);
    });
};

// Validar input tareja 
var validarPagSeis = function(){
    var $numeroTarjeta = $('#tarjeta-numero').val();
    var $btnTarjeta = $('#btn-continuar-tarjeta');
    
    console.log("fuera");
    if($numeroTarjeta.length == 16) {
        $btnTarjeta.removeClass("disabled");
        console.log("entra");
    } else {
        $btnTarjeta.addClass("disabled");     
    }
};




$(document).ready(cargarPagina);