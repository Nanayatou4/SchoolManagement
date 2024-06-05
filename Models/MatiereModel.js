module.exports = (sequelize, DataTypes)=>
{
    const Matiere = sequelize.define('Matiere', {
        id:{
            type: DataTypes.INTEGER ,
            autoIncrement: true,
            primaryKey: true,
        },
        nom:{
            type: DataTypes.STRING ,
            allowNull: false,
        },
        ProfesseurId:{
                    type: DataTypes.TIME,
                    allowNull: false,
                }
    },
    {
        freezeTableName: true,
        timestamps: false,
    });
    return Matiere;
};