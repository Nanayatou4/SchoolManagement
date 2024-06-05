db = require('../Models/sequelize');
module.exports= examenController= {

    add_exam_page: function (req, res) {
        res.render("./add_exam_page.ejs");
    }
    ,

    edit_exam_page: function (req, res) {
        const id=req.params.id;
        res.render("./edit_exam_page.ejs",{id});
    }
    ,
    edit_exam: function (req, res) {
        const id = req.params.id;
        db.Examen.findOne({where : { id: id} }).then(result=>{
            res.render('', {result});
        }).catch(err => {
            res.status(500).send({ error: 'Something went wrong' });
        });
    }
    ,
    add_exam: function (req, res) {
        res.render("./edit_exam_page.ejs");
    },
    delete_exam: function (req, res) {
        const id = req.params.id;
    }
    ,
    exam_Page(req, res) {
        db.Examen.findAll().then(exams =>{
            res.render("./views_exam/exam_page.ejs", {exams});
        });
    },


};
