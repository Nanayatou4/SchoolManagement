module.exports = (sequelize, DataTypes)=>
{
    const Administrateur = sequelize.define('Administrateur', {
        id:{
            type: DataTypes.INTEGER ,
            autoIncrement: true,
            primaryKey: true,
        },
        nom:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        prenom:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        username :{
            type: DataTypes.STRING,
            allowNull: false,
        },
        password :{
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
        timestamps: false
    });
    return Administrateur;
};