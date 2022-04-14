const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('superadmin', {
        id: {
            type: DataTypes.UUID,
            default: DataTypes.UUIDV1,
            unique: true,
            primaryKey: true,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imagen:{
            type: DataTypes.STRING
        }
    })
}