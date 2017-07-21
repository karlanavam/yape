var cargarPagina = function(){
    pedirApi();
    
};

var pedirApi = function() {
    $('#espacioCodigo').html(localStorage.getItem("phone"));
    console.log(localStorage.getItem("code"));
    setInterval(function(){generarCodigo();}, 10000);
};

$(document).ready(cargarPagina);
