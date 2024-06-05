db = require('../Models/sequelize');

module.exports ={
    edit_note_page:function (req,res) {
        const id=req.params.id;
        const row=db.Etudiant.findAll({include:{ model : db.Note }},{where :{'id': id}});
        res.render('./views_note/edit_note.ejs',{row});
    },
    add_note_page:function (req, res) {
        const id=req.params.id;
        res.render('./views_note/add_note.ejs',{id});
    },
    confirm_delete_note:function (req, res) {
        const id=req.params.id;
        res.render('./confirmPage.ejs',{id});
    },
    note_page : function (req, res) {
        res.render('./notePage.ejs');
    }
}