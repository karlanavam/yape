var cargarPagina = function(){
    pedirApi();
    
};

// Escribe el teléfono en el HTML
var pedirApi = function() {
    $('#espacioCodigo').html(localStorage.getItem("phone"));
    // Llama a la función de generar código cada 21 segundos
    setInterval(function(){generarCodigo();}, 21000);
};

$(document).ready(cargarPagina);
