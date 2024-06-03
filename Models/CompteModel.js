const { Administrateur } = require("./sequelize");

module.exports = (sequelize, DataTypes)=>

{
    const Compte = sequelize.define('Compte', {
        id:{
            type: DataTypes.INTEGER ,
            autoIncrement: true,
            primaryKey: true,
        },
        username:{
            type: DataTypes.STRING ,
            allowNull: false,
        },
        password:{
            type: DataTypes.STRING ,
            allowNull: false,
        },
        proprietaire:{
            type: DataTypes.STRING ,
            allowNull: false,
        }
        
    },
    {
        freezeTableName: true,
        timestamps: false,
    });
    return Compte;
};