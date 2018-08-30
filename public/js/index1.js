$(document).ready(function () {

    $("#agregarlugarEmblematico").click(function (e) {
        e.preventDefault();
        
        let nombre = $('#nombre').val();
        let imagen = $('#imagen').val();
        let descripcion = $('#descripcion').val();

        $.ajax({
            type: "POST",
            url: "http://localhost:8080/lugarEmblematico",
            data: {               
                Nombre: nombre,
                Imagen: imagen,
                Descripcion: descripcion
            },
        }).done(function (data) {
            //alert(data.id + " " + data.name);
            verlugares();
            // respuesta del servidor cuando es afirmativa
        }).fail(function () {
            // ingresa cuando la peticion genero un error
        });
    });
    $("#opcion").click(function (e) {
        verlugares();
    });


    function verlugares() {
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/lugares",
        }).done(function (data) {
            $("#cuadrito").html(data[0]);

            // respuesta del servidor cuando es afirmativa
        }).fail(function () {
            // ingresa cuando la peticion genero un error

        });
    }
}); 