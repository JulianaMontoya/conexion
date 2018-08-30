module.exports = (sequelize, type) => {
    return sequelize.define('registro', {  //nombre tabla
        cedula: {
            type: type.INTEGER,
            primaryKey: true
        },
        nombre: {
            type: type.STRING
        },
        apellido: {
            type: type.STRING
        },
        edad: {
            type: type.DATE
        } 
    },
        {
            tableName: 'registro',
            createdAt: false,
            updatedAt: false
        }
    );

}