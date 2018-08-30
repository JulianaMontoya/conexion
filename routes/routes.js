const { alcaldia, conexion, municipio, turismo, lugares, registro } = require('../conexion');

module.exports = function (app) {

    app.get("/", (req, res) => {
        municipio.findAll({
            where: {
                id_municipio: 1
            }
        }).then(function (mun) {
            console.log(mun);
            res.render("index");
        });

    });
    app.get('/index', (req, res) => {
        res.render("index");
    });
    app.get('/services', (req, res) => {
        res.render("services");
    });
    app.get('/contact', (req, res) => {
        res.render("contact");
    });
    app.get('/blog', (req, res) => {
        res.render("blog");
    });


    app.post('/lugarEmblematico', (req, res) => {
        var Nombre = req.body.Nombre;
        var Imagen = req.body.Imagen;
        var Descripción = req.body.Descripción;

        lugares.create({
            nombre: Nombre,
            imagen: Imagen,
            descripción: Descripción,
        }).then(function () {
            console.log("lugar creado");
        }).catch(function (err) {
            console.log("Se registro un error: " + err)
        })


    });

    app.get('/lugarEmblematico', (req, res) => {
        let mensajeA = [];
        let caja = '';
        lugar.findAll({
            attributes: ['nombre', 'imagen', 'descripcion']
        }).then(function (val) {
            for (var i = 0; i < val.length; i++) {
                caja = caja + '<div class="row"><div class="co-md-1"><li id= "bordehoteles"><h3>' + val[i].nombre + '</h3><a><img src=' + val[i].imagen + '></a><div>' + val[i].descripcion + '</div></li></div></div>'
            }
            mensajeA[0] = caja;
            res.send(mensajeA);
        });
    });
    //-----------

    app.post('/registro', (req, res) => {
        var Cedula = req.body.Cedula;
        var Nombre = req.body.Nombre;
        var Apellido = req.body.Apellido;
        var Edad = req.body.Edad;

        registro.create({
            cedula: Cedula,
            nombre: Nombre,
            apellido: Apellido,
            edad: Edad,
        }).then(function (response) {

            if(response){
                console.log("registro creado");

               

            }

            res.json(response);
           
        }).catch(function (err) {
            console.log("Se registro un error: " + err)
        })


    });

    app.get('/registro', (req, res) => {
        let mensajeA = [];
        let caja = '';
        registro.findAll({
            attributes: ['cedula', 'nombre', 'apellido', 'edad']
        }).then(function (val) {
            for (var i = 0; i < val.length; i++) {
                caja = caja + '<div class="row"><div class="co-md-1"><li id= "borderegistro"><h3>' + val[i].cedula + '</h3><a><img src=' + val[i].nombre + '></a><div>' + val[i].apellido + '</div><div>' + val[i].edad + '</div></li></div></div>'
            }
            mensajeA[0] = caja;
            res.send(mensajeA);
        });
    });
}

