const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('Films', 'gorgui', 'gof781543477', {
    host: 'localhost',
    dialect: 'mysql',
});

const tables = {};
tables.Sequelize = Sequelize;
tables.sequelize = sequelize;

tables.Administrateur = require('./AdminModel')(sequelize, Sequelize);
tables.Professeur = require('./ProfModel')(sequelize, Sequelize);
tables.Etudiant = require('./EtudiantModel')(sequelize, Sequelize);
tables.Note = require('./NoteModel')(sequelize, Sequelize);
tables.Examen = require('./ExamenModel')(sequelize, Sequelize);
tables.Compte = require('./CompteModel')(sequelize, Sequelize);
tables.Filiere = require('./filiereModel')(sequelize, Sequelize);
tables.Matiere = require('./MatiereModel')(sequelize, Sequelize);

tables.Administrateur.hasOne(tables.Compte);
tables.Compte.belongsTo(tables.Administrateur);

tables.Professeur.hasOne(tables.Compte);
tables.Compte.belongsTo(tables.Professeur);

tables.Etudiant.hasOne(tables.Compte);
tables.Compte.belongsTo(tables.Etudiant);

tables.Etudiant.belongsTo(tables.Filiere);
tables.Filiere.hasMany(tables.Etudiant);

tables.Professeur.hasMany(tables.Examen);
tables.Examen.belongsTo(tables.Professeur);

tables.Professeur.hasMany(tables.Matiere);
tables.Matiere.belongsTo(tables.Professeur);

tables.Etudiant.hasMany(tables.Note);
tables.Note.belongsTo(tables.Etudiant);

tables.Examen.hasMany(tables.Note);
tables.Note.belongsTo(tables.Examen);

tables.Etudiant.hasMany(tables.Matiere);

tables.Examen.belongsTo(tables.Matiere);
tables.Matiere.hasMany(tables.Examen);

module.exports = tables;


