module.exports = (sequelize, DataTypes)=>

{
    const Compte = sequelize.define('Compte', {
        login:{
            type: DataTypes.STRING ,
            primaryKey: true,
            allowNull: false,
        },
        motdepasse:{
            type: DataTypes.STRING ,
            allowNull: false,
        },

                ProfesseurId:{
                    type: DataTypes.STRING ,
                    allowNull: true,
                },

                EtudiantId:{
                            type: DataTypes.STRING ,
                            allowNull: true,
                        },

                                AdministrateurId:{
                                    type: DataTypes.STRING ,
                                    allowNull: true,
                                }
    },
    {
        freezeTableName: true,
        timestamps: false,
    });
    return Compte;
};