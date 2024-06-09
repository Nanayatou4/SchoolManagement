module.exports = (sequelize, DataTypes)=>
{
    const Professeur = sequelize.define('Professeur', {
        id:{
            type: DataTypes.INTEGER ,
            autoIncrement: true,
            primaryKey: true,
        },
        nom:{
            type: DataTypes.STRING ,
            allowNull: false,
        },
        prenom:{
            type: DataTypes.STRING ,
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        status:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        freezeTableName: true,
        timestamps: false,
    });
    return Professeur;
};