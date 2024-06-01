db = require('../Models/sequelize');

const mainController={
    save: function (req, res){
        const data={
            status : req.body.status,
            nom:req.body.nom,
            prenom:req.body.prenom,
            email:req.body.email,
        }
        db.Administrateur.create(data);
        res.redirect('/');
    },
    login: (req,res)=>{
           res.render('./login.ejs');
    },
    pwd : (req,res)=>{
         res.render('./forgotPassword.ejs');
    }
};

module.exports=mainController;