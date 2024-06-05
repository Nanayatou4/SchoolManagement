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

tables.Administrateur.hasOne(tables.Compte,{foreignKey:'AdministrateurId'});
tables.Compte.belongsTo(tables.Administrateur,{foreignKey:'AdministrateurId'});

tables.Professeur.hasOne(tables.Compte,{foreignKey:'ProfesseurId'});
tables.Compte.belongsTo(tables.Professeur,{foreignKey:'ProfesseurId'});

tables.Etudiant.hasOne(tables.Compte,{foreignKey:'EtudiantId'});
tables.Compte.belongsTo(tables.Etudiant,{foreignKey:'EtudiantId'});

tables.Etudiant.belongsTo(tables.Filiere,{foreignKey:'FiliereId'});
tables.Filiere.hasMany(tables.Etudiant,{foreignKey:'FiliereId'});

tables.Professeur.hasMany(tables.Examen,{foreignKey:'ProfesseurId'});
tables.Examen.belongsTo(tables.Professeur,{foreignKey:'ProfesseurId'});

tables.Professeur.hasMany(tables.Matiere,{foreignKey:'ProfesseurId'});
tables.Matiere.belongsTo(tables.Professeur,{foreignKey:'ProfesseurId'});

tables.Etudiant.hasMany(tables.Note,{foreignKey:'EtudiantId'});
tables.Note.belongsTo(tables.Etudiant,{foreignKey:'EtudiantId'});

tables.Examen.hasMany(tables.Note,{foreignKey:'ExamenId'});
tables.Note.belongsTo(tables.Examen,{foreignKey:'ExamenId'});

tables.Etudiant.hasMany(tables.Matiere);
tables.Matiere.hasMany(tables.Etudiant);

tables.Examen.belongsTo(tables.Matiere,{foreignKey:'MatiereId'});
tables.Matiere.hasMany(tables.Examen,{foreignKey:'MatiereId'});

module.exports = tables;


