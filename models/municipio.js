module.exports =(sequelize, type) => {
    return sequelize.define('municipio', {  //nombre tabla
    
        id_municipio: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: type.STRING
        },
        superficie: {
            type: type.STRING
        },
        altitud: {
            type: type.STRING
        }
    
    });
    module.exports = municipio;
}
