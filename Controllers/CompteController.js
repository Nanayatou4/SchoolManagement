db = require('../Models/sequelize');

const controllers_Compte = {
    change_pass_word: (req, res)=> {
        const {newpassword,confpassword,email}=req.body;
        if (newpassword===confpassword){
            db.Compte.findByPk(email).then(compte=>{
                if (compte){
                    compte.update({motdepasse : newpassword});
                    res.render('/');
                }else {
                    res.render('./login_views/forgetPassword.ejs',{message: 'This account is not found'});
                }
            })
        }else {
            res.render('./login_views/forgetPassword.ejs',{message: 'Your write !!'});
        }
    }
};

module.exports = controllers_Compte;