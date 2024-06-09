module.exports = (Sequelize, DataTypes) => {
    const NoteMatiere = Sequelize.define('NoteMatiere', {
            noteId: {
                type: DataTypes.INTEGER,
                references: {
                    model: "Note",
                    id: 'id'
                },
                allowNull: null
            },
            matiereId: {
                type: DataTypes.INTEGER,
                references: {
                    model: "Matiere",
                    id: "id"
                },
                allowNull: null
            },
        },
        {
            freezeTableName: true,
            timestamps: false
        });
    return NoteMatiere
}
