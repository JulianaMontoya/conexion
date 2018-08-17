module.exports =(sequelize, type) => {
    return sequelize.define('eventos', {  //nombre tabla
    
        id_evento: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fechaInicio: {
            type: type.DATE
        },
        fechaFin: {
            type: type.DATE
        },
    });
    module.exports = eventos;
}