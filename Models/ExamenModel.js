module.exports = (sequelize, DataTypes)=>
{
    const Examen = sequelize.define('Examen', {
        id:{
            type: DataTypes.INTEGER ,
            autoIncrement: true,
            primaryKey: true,
        },
        typeExam:{
            type: DataTypes.STRING ,
            allowNull: false,
        },
        date:{
            type: DataTypes.DATE ,
            allowNull: false,
        },
        heureDebut:{
            type: DataTypes.TIME,
            allowNull: false,
        },
        heureFin:{
            type: DataTypes.TIME,
            allowNull: false,
        },
        ProfesseurId:{
                                type: DataTypes.INTEGER,
                                allowNull: false,
                            },
                            MatiereId:{
                                                                     type: DataTypes.INTEGER,
                                                                     allowNull: false,
                                                                 }
    },
    {
        freezeTableName: true,
        timestamps: false,
    });
    return Examen;
};