db = require('../Models/sequelize');

module.exports ={
    edit_note_page:function (req,res) {
        const id=req.params.id;
        db.Etudiant.findOne({include:{ model : db.Note }},{where :{id: id}}).then(row=>{

            res.render('./views_note/edit_note.ejs',{row,id});
        }).catch(error=>{
           res.send("error");
        });

    },
    add_note_page:function (req, res) {
        const id=req.params.id;
        db.Etudiant.findByPk(id).then(student=>{
            db.Examen.findAll().then(exams=>{
                res.render('./views_note/add_note.ejs',{student,exams});
            })

        })

    },
    confirm_delete_note:function (req, res) {
        const id=req.params.id;
        res.render('./confirmPage.ejs',{id});
    },
    note_page : function (req, res) {
    db.Note.findAll({include:db.Etudiant}).then(Notes=>{
        res.render('./student_views/students_view_note.ejs',{Notes});
    })

    }
}