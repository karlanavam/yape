var cargarPagina = function(){
    pasarAPagina();
    
};

// Pasa splash a pagina siguiente
var pasarAPagina = function() {

    setInterval(function(){generarCodigo();}, 21000);
};

$(document).ready(cargarPagina);
