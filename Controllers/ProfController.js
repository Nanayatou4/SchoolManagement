db = require('../Models/sequelize');
module.exports = {

    exam_add: function (req, res) {

    }
    ,

    add_note: function (req, res) {

    }
    ,
    edit_note: function (req, res) {
        const studentID=req.params.id;

    }
    ,
    delete_note: function (req, res) {
        const studentID=req.params.id;
        db.Note.destroy({where:{id : studentID}});
        res.redirect('/note-page');
    }
}
