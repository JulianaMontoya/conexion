var express = require('express'), path = require('path'); // se crea express y el path
let app = express(); //se inicializa express
var bodyParser = require('body-parser');

app.set("view engine", "pug"); // se inia pug como view engine
app.set("views", path.join(__dirname, "views")); // se coloca la carpeta views como el directorio
app.use(express.static(path.join(__dirname, "/public")));
app.set('port', process.env.PORT || 8080); // se establece el puerto para la recepcion del servidor

// lineas del body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// fin lineas del body parser

var Server = require("./server");
Server.iniciar(app);
// se cargan las plantillas para cada url amigable


