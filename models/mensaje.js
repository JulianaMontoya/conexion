module.exports =(sequelize, type) => {
    return sequelize.define('mensaje', {  //nombre tabla
    
        nombre: {
            type: type.STRING,
            primaryKey: true,
        },
        correo: {
            type: type.STRING
        },
        tema: {
            type: type.STRING
        },
        mensaje: {
            type: type.STRING
        }        
    });
    //module.exports = mensaje;
}