var cargarPaginaCinco = function() {
   setInterval(cambiarPagina, 3000); 
};

var cambiarPagina = function(){
    console.log("hi");
    location.href = 'pantalla-seis.html';
};

$(document).ready(cargarPaginaCinco);