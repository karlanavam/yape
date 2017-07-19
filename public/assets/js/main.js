$('.carousel.carousel-slider').carousel({fullWidth: true});

$btnContinuarPagDos = $('#btn-continuar-pagDos').attr("disabled","disabled");
$btnCrearCuentaPagDCuatro = $('#btn-crearCuenta').attr("disabled","disabled");

$btnContinuarPagDos.click(function() {
    $inputTelefonoPagDos = $('#telefono-pagDos');
    
    if($inputTelefonoPagDos.value == ""){
        alert("noooo");
       }
});

$checkBtn = $('#check-btn');
$checkBtn.prop("checked", false);
console.log($checkBtn);


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
