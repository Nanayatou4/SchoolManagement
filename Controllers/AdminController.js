module.exports = {
    //Subject management
    //start
    subjectManage_page: (req, res) => {
        db.Matiere.findAll().then((subjects) => {
            res.render('./admin_views/subjectManage.ejs', {subjects});
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
            res.redirect('/subjectManage');
        } catch (error) {
            console.log('Erreur lors de la mise a jour de la Matiere');
        }
    },
    delete_subject: function (req, res) {
        try {
            const id = req.body.id;
            db.
            db.Matiere.destroy({where: {id}});
            console.log('Matiere supprime avec succes');
            res.redirect('/subjectManage');
        } catch (error) {
            console.log('Erreur lors de la suppression de la matiere');
        }
    },
    add_subject: function (req, res) {



    },



    //Student management
    //start
    studentManage: (req, res) => {

        db.Etudiant.findAll().then(students => {
            res.render('./admin_views/studentManage.ejs', {students});
        }).catch(error => {
            res.send('error!!');
        })

    },
    edit_student: function (req, res) {
        const {id} = req.params;
        const {nom, prenom, email,filiereId} = req.body;
        const data={
            nom:nom,
            prenom:prenom,
            email: email,
        }
        db.Etudiant.findByPk(id).then(student=>{
            student.update();
            db.EtudiantMatiere.findOne({EtudiantId:EtudiantId}).then(

            )
        })

        try {

            update({nom, prenom, email, status, FiliereId}, {where: {id}});
            console.log('Etudiant modifie avec succes');
            res.redirect('/studentManage');
        } catch (error) {
            console.log('Erreur lors de la mise a jour de l\'etudiant');
        }
    },
    add_student: function (req, res) {
        try {
            const {nom, prenom, email, status, FiliereId} = req.body;
            const newStudent = db.Etudiant.create({nom, prenom, email, status, FiliereId});
            console.log('Etudiant ajoute avec succes');
            res.redirect('/studentManage');
        } catch (error) {
            console.log('Erreur lors de l\'ajout de l\'etudiant');
        }
    },
    delete_student: function (req, res) {
        try {
            const {id} = req.params;
            db.Etudiant.destroy({where: {id}});
            console.log('Etudiant supprime avec succes');
            res.redirect('/studentManage');
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
        const {Code_Acronyme, generic_name} = req.body;
        const data={
            Code:Code_Acronyme,
            generic_name :generic_name
        }
        db.Filiere.create(data).then(()=>{
            console.log('Matiere ajoute avec succes');
            res.redirect('/sectorManage');
        }).catch(err=>{
            res.send('error');
        });
    },
    edit_sector: function (req, res) {
        const {Code_Acronyme, generic_name} = req.body;
        const data={
            Code:Code_Acronyme,
            generic_name :generic_name
        }

        db.Filiere.findByPk(data.Code).then(sector=>{
            if (sector){
                sector.update(data);
                console.log('Filiere modifie avec succes');
                res.redirect('/sectorManage');
            }else {
                res.send('sector not find');
            }

        }).catch(err=>{
            res.send('error');
        });
    },
    delete_sector: function (req, res) {
        const code =req.body.Code;

        db.Filiere.findByPk(code).then(sector=>{
            if (sector){
                sector.destroy();
                console.log('Filiere supprime avec succes');
                res.redirect('/sectorManage');
            }

        }).catch(err=>{
            res.send('error');
        })
    },



    //Teacher management
    //start
    teacherManage: (req, res) => {
        db.Professeur.findAll().then(teachers => {
            res.render('./admin_views/teacherManage.ejs', {teachers});
        }).catch(error => {
            res.send('error!!');
        })

    },
    delete_teacher: function (req, res) {
        const id = req.body.id;
        db.Professeur.findByPk(id).then(prof=>{
            if (prof){
                prof.destroy();
                console.log('Professeur supprime avec succes');
                res.redirect('/teacherManage');
            }
        }).catch (error=> {
            console.log('Erreur lors de la suppression du Professeur');
        });
    },
    edit_teacher: function (req, res) {
        const id=req.params.id;
        const {nom,prenom,email,matiere}=req.body;

        db.Professeur.findByPk(id).then(prof=>{
            if (prof){
                prof.update(data);
                console.log('Professeur modifie avec succes');
                res.redirect('/teacherManage');
            }
        })
        try {
            const {id} = req.params;
            const {nom, prenom, email, status} = req.body;
            update({nom, prenom, email, status}, {where: {id}});

        } catch (error) {
            console.log('Erreur lors de la mise a jour du Professeur');
        }
    },
    add_teacher: function (req, res) {
        try {
            const {nom, prenom, email, status} = req.body;
            const newTeacher = db.Professeur.create({nom, prenom, email, status});
            console.log('Professeur ajoute avec succes');
            res.redirect('/teacherManage');
        } catch (error) {
            console.log('Erreur lors de l\'ajout du Professeur');
        }
    },
    add_teacher_page: (req,res)=>{
        res.render('./admin_views/ajoutProf.ejs');
    },
    edit_teacher_page: (req,res)=>{
        res.render('./admin_views/modifierProf.ejs');
    }


};