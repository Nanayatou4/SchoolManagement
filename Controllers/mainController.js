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
        }
        let log = null;

       if(req.body.password === req.body.passwordconf){
        if(data.status === 'admin'){
           db.Administrateur.create(data).then(()=>{
             db.Administrateur.findOne({where: {
                email: data.email
             }}).then(user =>{
              log = {
                login: req.body.email,
                pass: req.body.password,
                AdministrateurId: user.id
              }
              console.log("Admin enregistre avec succes");
              db.Compte.create(log).then(()=>{
                console.log("Compte enregistre avec succes");
                res.redirect('/');
              }).catch(err =>{
                res.render('./register.ejs', {message: 'Account already exist !'});
              });
             }).catch(err =>{
                res.render('./register.ejs', {message: 'Error! try again'});
             });
           });
            
         }else if (data.status === 'teacher') {
            db.Professeur.create(data).then(()=>{
                db.Professeur.findOne({where: {
                   email: data.email
                }}).then(user =>{
                 log = {
                   login: req.body.email,
                   pass: req.body.password,
                   ProfesseurId: user.id
                 }
                 console.log(" enregistre avec succes");
                 db.Compte.create(log).then(()=>{
                   console.log("Compte enregistre avec succes");
                   res.redirect('/');
                 }).catch(err =>{
                   res.render('./register.ejs', {message: 'Account already exist !'});
                 });
                }).catch(err =>{
                   res.render('./register.ejs', {message: 'Error! try again'});
                });
              });
 
         
         }else if (data.status === 'student') {
            db.Etudiant.create(data).then(()=>{
                db.Etudiant.findOne({where: {
                   email: data.email
                }}).then(user =>{
                 log = {
                   login: req.body.email,
                   pass: req.body.password,
                   EtudiantId: user.id
                 }
                 console.log("Etudiant enregistre avec succes");
                 db.Compte.create(log).then(()=>{
                   console.log("Compte enregistre avec succes");
                   res.redirect('/');
                 }).catch(err =>{
                   res.render('./register.ejs', {message: 'Account already exist !'});
                 });
                }).catch(err =>{
                   res.render('./register.ejs', {message: 'Error! try again'});
                });
              });
              }
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
         const recup={
            pass: req.body.password,
            confpass: req.body.password 
         }

         console.log(recup);
         res.redirect('/');
    }
};

module.exports=mainController;