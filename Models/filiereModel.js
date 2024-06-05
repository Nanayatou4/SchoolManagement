module.exports = (sequelize, DataTypes)=>

{
    const Filiere = sequelize.define('Filiere', {
        Code:{
            type: DataTypes.STRING ,
            allowNull: false,
            primaryKey: true,
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    });
    return Filiere;
};