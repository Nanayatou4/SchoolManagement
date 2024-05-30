const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('SchoolManagement', 'root', 's2q4l27', {
    host: 'localhost',
    dialect: 'mysql',
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Administrateur = require('./AdminModel')(sequelize, Sequelize);
db.Professeur = require('./ProfModel')(sequelize, Sequelize);
db.Etudiant = require('./EtudiantModel')(sequelize, Sequelize);
db.Note = require('./NoteModel')(sequelize, Sequelize);
db.Examen = require('./ExamenModel')(sequelize, Sequelize);
db.Compte = require('./CompteModel')(sequelize, Sequelize);
db.Filiere = require('./filiereModel')(sequelize, Sequelize);
db.Matiere = require('./MatiereModel')(sequelize, Sequelize);

db.Administrateur.hasOne(db.Compte);
db.Compte.belongsTo(db.Administrateur);

db.Professeur.hasOne(db.Compte);
db.Compte.belongsTo(db.Professeur);

db.Etudiant.hasOne(db.Compte);
db.Compte.belongsTo(db.Etudiant);

db.Etudiant.belongsTo(db.Filiere);
db.Filiere.hasMany(db.Etudiant);

db.Professeur.hasMany(db.Examen);
db.Examen.belongsTo(db.Professeur);

db.Professeur.hasMany(db.Matiere);
db.Matiere.belongsTo(db.Professeur);

db.Etudiant.hasMany(db.Note);
db.Note.belongsTo(db.Etudiant);

db.Examen.hasMany(db.Note);
db.Note.belongsTo(db.Examen);

db.Etudiant.hasMany(db.Matiere);

db.Examen.belongsTo(db.Matiere);
db.Matiere.hasMany(db.Examen);

module.exports = db;


