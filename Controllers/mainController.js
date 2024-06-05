db = require('../Models/sequelize');

const mainController = {
    save: function (req, res) {
        let data = {
            status: req.body.status,
            nom: req.body.nom,
            prenom: req.body.prenom,
            email: req.body.email,
        }
        let log = null;

        if (req.body.password === req.body.confpassword) {
            if (data.status === 'teacher') {

                db.Professeur.create(data);
                db.Professeur.findOne({where: {email: req.body.email}}).then(user => {
                    log = {
                        login: req.body.email,
                        motdepasse: req.body.password,
                        ProfesseurId: user.id
                    }
                    db.Compte.create(log);
                    res.redirect('/');
                }).catch(error => {
                    res.send("error");
                });


            } else if (data.status === 'administrator') {
                db.Administrateur.create(data);
                db.Administrateur.findOne({where: {email: req.body.email}}).then(user => {
                    log = {
                        login: req.body.email,
                        motdepasse: req.body.password,
                        AdministrateurIp: user.id
                    }
                    db.Compte.create(log);
                     res.redirect('/');
                }).catch(error => {
                    res.send("error");
                });


            } else if (data.status === 'student') {


                db.Etudiant.findOne({where: {email: req.body.email}}).then(user => {

                    console.log(user.id);
                    log = {
                        login: req.body.email,
                        motdepasse: req.body.password,
                        EtudiantId: user.id
                    }
                    req.session.infoLogin=log;
                    req.session.infoUser=data;

                    db.Filiere.findAll().then(filiers=>{

                        res.render('./student_views/learn_sector.ejs',{filiers});

                    })


                }).catch(error => {
                    res.send("error");
                });
            }

        } else {
            res.redirect('/register');
        }

    },
    login: (req, res) => {
        res.render('./login_views/login.ejs');
    },
    connect: (req, res) => {


    },
    pwd: (req, res) => {
        res.render('./login_views/forgotPassword.ejs');
    },
    pageProf: (req, res) => {
        res.render('./prof_views/ProfPage.ejs');
    },
    pageAdmin: (req, res) => {
        res.render('./admin_views/AdminPage.ejs');
    },
    pageStudent: (req, res) => {
        res.render('./student_views/StudentPage.ejs');
    },
    learn_sector: (req, res) => {
        res.render('./student_views/learn_sector.ejs');
    },
    create_student: (req, res) => {
        const filiere=req.body.sector;

        res.json(req.session.infoLogin);

        /*db.Etudiant.create(req.session.infoUser).then(( ) => {

            req.session.infoLogin.FiliereId=req.body.sector;
            res.json(req.session.infoLogin);
            *//*db.Compte.create(req.session.infoLogin).then(( ) => {

                     }).catch(error => {
                                        res.send("error");
                                    });
         }).catch(error => {
                            res.send("error");
                        });
                        res.redirect('/');*//*
        })*/
    }
};

module.exports = mainController;