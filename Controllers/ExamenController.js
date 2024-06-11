db = require('../Models/sequelize');
module.exports= examenController= {
 //recuperation des sectors pour qui puisse choisir la matiere
    add_exam_page: (req, res)=> {

        db.Matiere.findAll().then(subjects=>{

            res.render("./views_exam/add_exam_page.ejs",{subjects});

        }).catch(()=>{
            res.send('error');
        });
    },
    edit_exam_page: function (req, res) {

        //recuperer l'id de lexamen pour trouver ses info
        const id=req.params.id;
        db.Examen.findByPk(id).then(exam=>{
            res.render("./views_exam/edit_exam_page.ejs",{exam});
        }).catch(err=>{
            res.send('error');
        });
    },
    edit_exam: function (req, res) {
        const id = req.params.id;
        db.Examen.findOne({where : { id: id} }).then(result=>{
            res.render('', {result});
        }).catch(err => {
            res.status(500).send({ error: 'Something went wrong' });
        });
    }
    ,
    delete_exam: function (req, res) {
        const id = req.body.id;
    }
    ,
    exam_Page(req, res) {
        db.Examen.findAll().then(exams =>{
            res.render("./views_exam/exam_page.ejs", {exams});
        });
    }


};
