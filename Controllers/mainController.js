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

                db.Professeur.create(data).then(() => {


                    db.Professeur.findOne({where: {email: data.email}}).then(user => {
                        log = {
                            login: req.body.email,
                            motdepasse: req.body.password,
                            ProfesseurId: user.id
                        }
                        console.log("Prof enregistrer avec succee ");
                        db.Compte.create(log).then(() => {
                            console.log("Compte enregistrer avec succee ");
                            res.redirect('/');
                        }).catch(error => {
                            res.render('./login_views/register.ejs', {message: 'Acount already exist !'});
                        });

                    }).catch(error => {
                        res.render('./login_views/register.ejs', {message: 'Error ! Try again'});
                    });

                });


            } else if (data.status === 'administrator') {
                db.Administrateur.create(data).then(() => {


                    db.Administrateur.findOne({where: {email: data.email}}).then(user => {
                        log = {
                            login: req.body.email,
                            motdepasse: req.body.password,
                            AdministrateurId: user.id
                        }
                        console.log("admin enregistrer avec succee ");
                        db.Compte.create(log).then(() => {
                            console.log("Compte enregistrer avec succee ");
                            res.redirect('/');
                        }).catch(error => {
                            res.render('./login_views/register.ejs', {message: 'Acount already exist !'});
                        });

                    }).catch(error => {
                        res.render('./login_views/register.ejs', {message: 'Error ! Try again'});
                    });


                });


            } else if (data.status === 'student') {


                db.Etudiant.findOne({where: {email: data.email}}).then(user => {

                    console.log(user.id);
                    log = {
                        login: req.body.email,
                        motdepasse: req.body.password,
                        EtudiantId: user.id
                    }
                    req.session.infoLogin = log;
                    req.session.infoUser = data;

                    db.Filiere.findAll().then(filiers => {

                        res.render('./student_views/learn_sector.ejs', {filiers});

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
        let data = {
            email: req.body.email,
            password: req.body.password

        }
        db.Compte.findByPk(data.email).then(compte => {
            if (compte) {
                if (data.password !== compte.motdepasse) {

                    res.status(401).send('Mot de passe incorrect ');

                } else {
                    if (compte.AdministrateurId !== null) {
                        res.redirect('/adminPage');
                    } else if (compte.ProfesseurId != null) {
                        res.redirect('/profPage');
                    } else if (compte.EtudiantId !== null) {
                        res.redirect('/studentPage');
                    }

                }
            } else {
                res.status(400).send('Compte introuvable !');
            }
        })

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
        const filiere = req.body.sector;

        res.json(req.session.infoLogin);

        db.Etudiant.create(req.session.infoUser).then(() => {

            req.session.infoLogin.FiliereId = req.body.sector;
            res.json(req.session.infoLogin);
            db.Compte.create(req.session.infoLogin).then(() => {
                res.redirect('/');
            }).catch(error => {
                res.send("error");
            });
        }).catch(error => {
            res.send("error");
        });


    }
};

module.exports = mainController;