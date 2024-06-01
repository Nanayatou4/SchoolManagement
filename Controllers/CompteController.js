db = require('../Models/sequelize');

const controllers_Compte = {
    create_compte(req, res) {

    },
    change_pass_word(req, res) {

    },
    login(req, res) {
        db.Compte.findAll({'where': `email = ${req.body.name} and password = ${req.body.password}`}).then(()=>{
            res.redirect('/');
        }).catch(()=>{
            
        });

    }
};

module.exports = controllers_Compte;