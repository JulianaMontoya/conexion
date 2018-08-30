$(document).ready(function () {

    $("#agregarUsuario").click(function (e) {
        e.preventDefault();
        let cedula = $('#cedula').val();
        let nombre = $('#nombre').val();
        let apellido = $('#apellido').val();
        let edad = $('#edad').val();

        alert("hola");

        $.ajax({
            type: "POST",
            url: "http://localhost:3000/registro",
            data: {
                Cedula: cedula,
                Nombre: nombre,
                Apellido: apellido,
                Edada: edad

            },
        }).done(function (data) {
            verUsuarios();
            // respuesta del servidor cuando es afirmativa
        }).fail(function () {
            // ingresa cuando la peticion genero un error

        });
    });

}); 