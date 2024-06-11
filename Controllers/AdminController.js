module.exports = {
    //Subject management
    //start
    subjectManage_page: (req, res) => {
        db.Matiere.findAll().then((subjects) => {
            res.render('./subjectManage.ejs', {subjects});
        }).catch(error => {
            res.send('error!!');
        })
    },
    edit_subject: function (req, res) {
        try {
            const {id} = req.params;
            const {nom, ProfesseurId, EtudiantId} = req.body;
            db.Matiere.update({nom, ProfesseurId, EtudiantId}, {where: {id}});
            console.log('Matiere modifie avec succes');
            res.redirect('./subjectManage.ejs');
        } catch (error) {
            console.log('Erreur lors de la mise a jour de la Matiere');
        }
    },
    delete_subject: function (req, res) {
        try {
            const {id} = req.params;
            db.Matiere.destroy({where: {id}});
            console.log('Matiere supprime avec succes');
            res.redirect('./subjectManage.ejs');
        } catch (error) {
            console.log('Erreur lors de la suppression de la matiere');
        }
    },
    add_subject: function (req, res) {
        try {
            const {nom, ProfesseurId, EtudiantId} = req.body;
            const newSubject = db.Matiere.create({nom, ProfesseurId, EtudiantId});
            console.log('Matiere ajoute avec succes');
            res.redirect('./subjectManage.ejs');
        } catch (error) {
            console.log('Erreur lors de l\'ajout de la Matiere');
        }
    },



    //Student management
    //start
    studentManage: (req, res) => {

        db.Etudiant.findAll().then(students => {
            res.render('./studentManage.ejs', {students});
        }).catch(error => {
            res.send('error!!');
        })

    },
    edit_student: function (req, res) {
        try {
            const {id} = req.params;
            const {nom, prenom, email, status, FiliereId} = req.body;
            db.Etudiant.update({nom, prenom, email, status, FiliereId}, {where: {id}});
            console.log('Etudiant modifie avec succes');
            res.redirect('./studentManage.ejs');
        } catch (error) {
            console.log('Erreur lors de la mise a jour de l\'etudiant');
        }
    },
    add_student: function (req, res) {
        try {
            const {nom, prenom, email, status, FiliereId} = req.body;
            const newStudent = db.Etudiant.create({nom, prenom, email, status, FiliereId});
            console.log('Etudiant ajoute avec succes');
            res.redirect('./studentManage.ejs');
        } catch (error) {
            console.log('Erreur lors de l\'ajout de l\'etudiant');
        }
    },
    delete_student: function (req, res) {
        try {
            const {id} = req.params;
            db.Etudiant.destroy({where: {id}});
            console.log('Etudiant supprime avec succes');
            res.redirect('./studentManage.ejs');
        } catch (error) {
            console.log('Erreur lors de la suppression de l\'etudiant');
        }
    },



    //Sector management
    //start

    sectorManage: (req, res) => {
        db.Filiere.findAll().then(sectors => {
            res.render('./admin_views/sectorManagement.ejs', {sectors});
        }).catch(error => {
            res.send('error!!');
        });
    },
    add_sector: function (req, res) {
        try {
            const {id} = req.params;
            const newSector = db.Filiere.create({nom});
            console.log('Filiere ajoute avec succes');
            res.redirect('/sectorManage');
        } catch (error) {
            console.log('Erreur lors de l\'ajout de la Filiere');
        }
    },
    edit_sector: function (req, res) {
        try {
            const {id} = req.params;
            const {nom} = req.body;
            db.Filiere.update({nom}, {where: {id}});
            console.log('Filiere modifie avec succes');
            res.redirect('./sectorManage.ejs');
        } catch (error) {
            console.log('Erreur lors de la mise a jour de la Filiere');
        }
    },
    delete_sector: function (req, res) {
        try {
            const {id} = req.params;
            db.Filiere.destroy({where: {id}});
            console.log('Filiere supprime avec succes');
            res.redirect('./sectorManage.ejs');
        } catch (error) {
            console.log('Erreur lors de la suppression de la Filiere');
        }
    },



    //Teacher management
    //start
    teacherManage: (req, res) => {
        db.Professeur.findAll().then(teachers => {
            res.render('./teacherManage.ejs', {teachers});
        }).catch(error => {
            res.send('error!!');
        })

    },
    delete_teacher: function (req, res) {
        try {
            const {id} = req.params;
            db.Professeur.destroy({where: {id}});
            console.log('Professeur supprime avec succes');
            res.redirect('./teacherManage.ejs');
        } catch (error) {
            console.log('Erreur lors de la suppression du Professeur');
        }
    },
    edit_teacher: function (req, res) {
        try {
            const {id} = req.params;
            const {nom, prenom, email, status} = req.body;
            db.Professeur.update({nom, prenom, email, status}, {where: {id}});
            console.log('Professeur modifie avec succes');
            res.redirect('./teacherManage.ejs');
        } catch (error) {
            console.log('Erreur lors de la mise a jour du Professeur');
        }
    },
    add_teacher: function (req, res) {
        try {
            const {nom, prenom, email, status} = req.body;
            const newTeacher = db.Professeur.create({nom, prenom, email, status});
            console.log('Professeur ajoute avec succes');
            res.redirect('./teacherManage.ejs');
        } catch (error) {
            console.log('Erreur lors de l\'ajout du Professeur');
        }
    }


};