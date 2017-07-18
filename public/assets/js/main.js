$('.carousel.carousel-slider').carousel({fullWidth: true});

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
