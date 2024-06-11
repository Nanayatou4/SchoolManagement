module.exports = (sequelize, DataTypes) => {
    const Filiere = sequelize.define('Filiere', {
            Code: {
                type: DataTypes.STRING,
                allowNull: false,
                primaryKey: true,
            },
            generic_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            freezeTableName: true,
            timestamps: false,
        });
    return Filiere;
};