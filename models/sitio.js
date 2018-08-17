module.exports =(sequelize, type) => {
    return sequelize.define('sitio', {  //nombre tabla
    
        id_sitio: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nit: {
            type: type.INTEGER
        },
        nombre: {
            type: type.STRING
        },
        telefono: {
            type: type.STRING
        }
    });
    module.exports = sitio;
}