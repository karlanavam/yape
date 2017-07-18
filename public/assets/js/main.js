$('.carousel.carousel-slider').carousel({fullWidth: true});
/*var cargarPagina = function() {
    yapeDatos();
    console.log("hola");
};

var yapeDatos = function() {
  var url ='http://localhost:3000/registerNumber';
  $.getJSON(url, function(response){
    console.log(response.results)
  });
};*/

/*$(document).ready(cargarPagina);*/

/*function getJSON(url){
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

getJSON("http://localhost:3000/registerNumber")
.then(function(mensaje){ console.log(mensaje)});*/
