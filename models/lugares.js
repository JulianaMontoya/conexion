module.exports = (sequelize, type) => {
    return sequelize.define('lugaresEmblematicos', {  //nombre tabla
        nombre: {
            type: type.STRING,
            primaryKey: true
        },
        imagen: {
            type: type.STRING
        },
        descripcion: {
            type: type.STRING
        } 
    },
        {
            tableName: 'lugares',
            createdAt: false,
            updatedAt: false
        }
    );

}