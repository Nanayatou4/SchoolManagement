module.exports = (sequelize, DataTypes)=>

{
    const Note = sequelize.define('Note', {
        id:{
            type: DataTypes.INTEGER ,
            autoIncrement: true,
            primaryKey: true,
        },
        valeur:{
            type: DataTypes.FLOAT ,
            allowNull: false,
        },
        appreciation:{
            type: DataTypes.STRING ,
            allowNull: false,
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    });
    return Note;
};