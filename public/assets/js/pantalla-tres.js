var pedirApi = function() {
    $('#espacioCodigo').html(localStorage.getItem("phone"));
    console.log(localStorage.getItem("code"));
}



$(document).ready(pedirApi);
