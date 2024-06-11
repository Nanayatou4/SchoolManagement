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


                log = {
                    login: req.body.email,
                    motdepasse: req.body.password,
                    EtudiantId: null
                }
                req.session.infoLogin = log;
                req.session.infoUser = data;

                db.Filiere.findAll().then(filiers => {

                    res.render('./student_views/learn_sector.ejs', {filiers});

                })


            }

        } else {
            res.redirect('/register');
        }

    },
    create_student: (req, res) => {
        const filiere = req.body.Code;

        const infolog = req.session.infoLogin;
        const infouser = req.session.infoUser;
    console.log(filiere);
        const dataUser={
            status:infouser.status,
            nom: infouser.nom,
            prenom:infouser.prenom,
            email:infouser.email,
            FiliereId:filiere
        }
        console.log(dataUser);

        db.Etudiant.create(dataUser).then(() => {

console.log('--------------------------------');
            db.Etudiant.findOne({where: {email: dataUser.email}}).then(student => {

                const dataAccount={
                    login:infolog.login,
                    motdepasse: infolog.motdepasse,
                    EtudiantId:student.id
                }
            console.log(dataAccount);
                db.Compte.create(dataAccount).then(() => {
                        res.redirect('/');
                }).catch(error => {
                    res.render('./login_views/register.ejs',{message:'This account exist already !!'});
                });
            }).catch(error => {
                           res.render('./login_views/register.ejs',{message:'error is produced !!'});
                       });
        }).catch(error => {
            res.render('./login_views/register.ejs',{message:'error is produced !!'});
        });

    },
    login: (req, res) => {
        res.render('./login_views/login.ejs',{message: "Login"});
    },
    connect: (req, res) => {
        let data = {
            email: req.body.email,
            password: req.body.password
        }
        db.Compte.findByPk(data.email).then(compte => {
            if (compte) {
                if (data.password !== compte.motdepasse) {
                    res.render('./login_views/login.ejs',{message:'Passeword is not correct '});
                } else {
                    if (compte.AdministrateurId !== null) {
                        db.Administrateur.findOne({where:{email:data.email}}).then(user=>{
                            req.session.adminData=user;
                            res.redirect('/adminPage');
                        });

                    } else if (compte.ProfesseurId != null) {
                        db.Professeur.findOne({where:{email:data.email}}).then(user=>{
                            req.session.profData=user;
                            res.redirect('/profPage');
                        });

                    } else if (compte.EtudiantId !== null) {
                        db.Etudiant.findOne({where:{email:data.email}}).then(user=>{
                            req.session.studentData=user;
                            res.redirect('/studentPage');
                        }).catch(()=>{

                        });
                    }else {
                        res.render('./login_views/login.ejs',{message:'An error is produced !!'});
                    }
                }
            } else {
                res.render('./login_views/login.ejs',{message:'Account not found !!'});

            }
        })

    },

    pwd: (req, res) => {


        res.render('./login_views/forgotPassword.ejs',{message: 'New password '});
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
    }

};

module.exports = mainController;