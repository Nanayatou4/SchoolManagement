module.exports = (sequelize, DataTypes)=>

{
    const Compte = sequelize.define('Compte', {
        id:{
            type: DataTypes.INTEGER ,
            autoIncrement: true,
            primaryKey: true,
        },
        login:{
            type: DataTypes.STRING ,
            allowNull: false,
        },
        motdepasse:{
            type: DataTypes.STRING ,
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    });
    return Compte;
};