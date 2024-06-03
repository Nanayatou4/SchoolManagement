module.exports = (sequelize, DataTypes)=>

{
    const Filiere = sequelize.define('Filiere', {
        id:{
            type: DataTypes.INTEGER ,
            autoIncrement: true,
            primaryKey: true,
        },
        nom:{
            type: DataTypes.STRING ,
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    });
    return Filiere;
};