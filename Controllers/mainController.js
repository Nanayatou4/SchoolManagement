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

                    res.render('./student-views/learn-sector', {log, data});
                }).catch(error => {
                    res.send("error");
                });


            }


            res.redirect('/');
        } else {
            res.redirect('/register');
        }

    },
    login: (req, res) => {
        res.render('./login-views/login.ejs');
    },
    connect: (req, res) => {


    },
    pwd: (req, res) => {
        res.render('./login-views/forgotPassword.ejs');
    },
    pageProf: (req, res) => {
        res.render('./prof-views/ProfPage.ejs');
    },
    pageAdmin: (req, res) => {
        res.render('./admin-views/AdminPage.ejs');
    },
    pageStudent: (req, res) => {
        res.render('./student-views/StudentPage.ejs');
    },
    learn_sector: (req, res) => {
        res.render('./student-views/learn_sector.ejs');
    },
    create_student: (req, res) => {
        res.render('./student-views/learn_sector.ejs');
    }
};

module.exports = mainController;