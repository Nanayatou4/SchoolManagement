db = require('../Models/sequelize');
module.exports = {

    exam_add: function (req, res) {

    }
    ,

    add_note: function (req, res) {
        const studentID=req.params.id;

    }
    ,
    edit_note: function (req, res) {
        const idNote=req.params.id;
        const data={

        }
        db.Note.update({where:{id:idNote}},data).then(r => {
            res.redirect('/note-page');
        }).catch(err=>{
            res.redirect('/note-page',{message: " Une erreur s'est produit "})
        })
    }
    ,
    delete_note: function (req, res) {
        const studentID=req.params.id;
        db.Note.destroy({where: {id: studentID}}).then(r => {
            res.redirect('/note-page');
        });

    },
    prof_page: function (req, res) {
        res.render('./prof-views/profPage.ejs');
    },
    students_notes:function (req, res) {
        const rows=db.Note.findAll({include: db.Etudiant});
        res.render('./student-views/students-view-notes.ejs',{datas:rows})
    }
}
