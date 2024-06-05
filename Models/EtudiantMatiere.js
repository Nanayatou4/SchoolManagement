module.exports = (sequelize, DataTypes)=>
{
    const EtudiantMatiere = sequelize.define('EtudiantMatiere', {
        EtudiantId: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'Matiere',
                    key: 'id'
                }
            },
            MatiereId: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'Etudiant',
                    key: 'id'
                }
            },

    },
    {
        freezeTableName: true,
        timestamps: false,
    });
    return EtudiantMatiere;
};