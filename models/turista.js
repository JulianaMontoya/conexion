module.exports = (sequelize, type) => {
    return sequelize.define('turista', {  //nombre tabla
        cedula: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: type.STRING
        },
        telefono: {
            type: type.INTEGER
        }
    });
    module.exports = turista;
}
