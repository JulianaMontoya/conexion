$(function () {

	$("#contact").click(function(e){
		let nombre = $('#txtNombre').val();
        let correo =$('#txtCorreo').val();
        let tema =$('#txtTema').val();
        let mensaje =$('#txtMensaje').val();

		

		$.ajax({
            type: "POST",
            url: "http://localhost:8080/contact",
            data: {
                Nombre: nombre,
                Correo: correo,
                Tema: tema,
                Mensaje: mensaje

            },
           }).done(function (data) {
           		alert(data.id + " " + data.name);
           		verUsuarios();
               // respuesta del servidor cuando es afirmativa
        }).fail(function () {
            // ingresa cuando la peticion genero un error

        });
	})
    alert ("Mensaje enviado");
/*
	$("#VerUsuarios").click(function(e){
		//alert ("su cedula:"+ cedula+ " su nombre:"+ nombre);
		verUsuarios();
		
	});

	function verUsuarios(){
		$.ajax({
            type: "GET",
            url: "http://localhost:3000/users",
           }).done(function (data) {
           		$("#cuerpo").html(data[0]);
           		$("#selUsuarios").html(data[1]);

               // respuesta del servidor cuando es afirmativa
        }).fail(function () {
            // ingresa cuando la peticion genero un error

        });
	}*/

});