module.exports =(sequelize, type) => {
    return sequelize.define('alcaldia', {  //nombre tabla
    
        id_alcaldia: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nit: {
            type: type.BIGINT
        },
        telefono: {
            type: type.INTEGER
        },
        correo: {
            type: type.STRING
        }
    });
    module.exports = alcaldia;
}