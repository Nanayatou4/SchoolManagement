const AdminModel = require('../Models/AdminModel');
const { Administrateur } = require('../Models/sequelize');

 db = require('../Models/sequelize');

const mainController={
    save: (req, res)=>{
        const data={
            status : req.body.status,
            nom:req.body.nom,
            prenom:req.body.prenom,
            email:req.body.email,
            username: req.body.username,
            password: req.body.password
        }

       /*  let log ={
            username: data.username,
            password : data.password,
            ProsseurId: null,
            AdministrateurId : null,
            EtudiantId: null
        };*/
        
        if(data.status == 'admin'){
           
           const admin = db.Administrateur.create(data);
           
           if (admin) {
            db.Compte.create({
                username: data.username,
                password: data.password,
                proprietaire: data.status
            });
           }           
            //db.Compte.create(log);
            res.redirect('/');
           
        }else if (data.status == 'teacher') {
            const prof = db.Professeur.create(data);
           
            if (prof) {
             db.Compte.create({
                 username: data.username,
                 password: data.password,
                 proprietaire: data.status
             });
            }           
             //db.Compte.create(log);
            res.redirect('/');

        
        }else if (data.status == 'student') {
              const etudiant = db.Etudiant.create(data);
           
           if (etudiant) {
            db.Compte.create({
                username: data.username,
                password: data.password,
                proprietaire: data.status
            });
           }           
            //db.Compte.create(log);
            res.redirect('/');

        }

    },
    login: (req,res)=>{
           res.render('/login');
        const con={
            log: req.body.username,
            pass: req.body.password, 
            pro: req.body.proprietaire
        }
        if (con.pro == 'admin') {
            res.redirect('/adminpage');
        }else if(con.pro == 'teacher'){
            res.redirect('/profpage');
        }else if(con.pro == 'student'){
            res.redirect('/studentpage');
        }
             
      
    },
    pwd : (req,res)=>{
         res.render('./forgotPassword.ejs');
    }
};

module.exports=mainController;