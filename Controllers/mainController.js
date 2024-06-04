db = require('../Models/sequelize');

const mainController={
    save: function (req, res){
        const data={
            status : req.body.status,
            nom:req.body.nom,
            prenom:req.body.prenom,
            email:req.body.email,
        }

        if (data.status==='teacher'){
            db.Professeur.create(data);
            const id= db.Professeur.findOne({'id':'DESC'});

        }else if (data.status==='administrator'){
            db.Administrateur.create(data);
            const id= db.Administrateur.findOne({'id':'DESC'});

        }else if (data.status==='student'){
            db.Etudiant.create(data);
            const id= db.Etudiant.findOne({'id':'DESC'});
        }


        res.redirect('/');
    },
    login: (req,res)=>{
           res.render('./login-views/login.ejs');
    },
    pwd : (req,res)=>{
         res.render('./forgotPassword.ejs');
    }
};

module.exports=mainController;