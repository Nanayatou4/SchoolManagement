db = require('../Models/sequelize');
module.exports = {

    exam_add: function (req, res) {
       const {heure_fin,heure_debut,date,typeExam,subjectId} = req.body;
       const data={
           typeExam:typeExam,
           heureDebut:heure_debut,
           heureFin:heure_fin,
           date:date,
           ProfesseurId:req.session.profData.id,
           MatiereId:subjectId
       }
       db.Examen.create(data).then(()=>{
           res.redirect('/exam');
       }).catch(()=>{
            res.send('error')
       });
    }
    ,

    add_note: function (req, res) {
        const studentID = req.params.id;
        const {lastname,firstname,id_exam,desc,value}=req.body;

        const data={
            prenom:lastname,
            nom: firstname,
            appreciation: desc,
            valeur:value,
            ExamenId: id_exam,
            EtudiantId: studentID
        }
        db.Note.create(data).then(()=>{
            res.redirect('/note-page');
        }).catch(()=>{
            res.send('error');
        });
    }
    ,
    edit_note: function (req, res) {
        const idNote = req.params.id;
        const value = req.body.value;
        const data = {
            value: value
        }
        db.Note.findByPk(idNote).then(note => {
            note.update(data);
            res.redirect('/note-page');
        }).catch(err => {
            res.redirect('/note-page', {message: " Une erreur s'est produit "})
        })
    }
    ,
    delete_note: function (req, res) {
        const studentID = req.params.id;
        db.Note.findByPk(studentID).then(note => {
            note.destroy();
            res.redirect('/note-page');
        });

    },
    prof_page: function (req, res) {
        res.render('./prof_views/profPage.ejs');
    },
    students_notes: function (req, res) {
        db.Etudiant.findAll().then(students => {

            res.render('./prof_views/students_pages_prof.ejs', {students});

        }).catch(err => {
            console.log("error");
        });

    }
}
