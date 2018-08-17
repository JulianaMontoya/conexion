const Sequelize = require('sequelize'); //se crea la variable sequelize
const modeloAlcaldia = require('./models/alcaldia');
const modeloMunicipio = require('./models/municipio');
const modeloTurista = require('./models/turista');
const modeloEventos = require('./models/eventos');
const modeloSitio = require('./models/sitio');

const sequelize = new Sequelize('proyecto2', 'postgres', 'admin', {
    dialect: 'postgres',
});

var alcaldia = modeloAlcaldia(sequelize, Sequelize); //se mandan los parametros
var municipio = modeloMunicipio(sequelize, Sequelize);
var turista = modeloTurista(sequelize, Sequelize);
var sitio = modeloSitio(sequelize, Sequelize);
var eventos = modeloEventos(sequelize, Sequelize);

const sitios_turista = sequelize.define('sitios_turista',  //nombre tabla
    {
        nombreEvento: { //Nueva llave primaria 
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fk_sitio: {
            type: Sequelize.INTEGER,
            references: {
                // Esto es una referencia a otro modelo
                model: sitio,
                // Este es el nombre de columna del modelo al que se hace referencia
                key: 'id_sitio',
                // Esto declara cuándo verificar la restricción de clave externa. PostgreSQL solamente.
                //deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        },
        fk_turista: {
            type: Sequelize.INTEGER,
            references: {
                // Esto es una referencia a otro modelo
                model: turista,
                // Este es el nombre de columna del modelo al que se hace referencia
                key: 'cedula',
                // Esto declara cuándo verificar la restricción de clave externa. PostgreSQL solamente.
                //deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        },
    },
    {
        tableName: 'sitios_turista',
    }

);
sequelize.sync({ force: false }) //sincronizacion de base de datos
    .then(() => {
        console.log('Database & tables created!')
    })
module.exports = {
    alcaldia,
    eventos,
    municipio,
    sitio,
    turista
}
