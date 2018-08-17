const { alcaldia, conexion, municipio, turismo } = require('../conexion');

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
}