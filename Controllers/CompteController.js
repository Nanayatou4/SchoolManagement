db = require('../Models/sequelize');

const controllers_Compte = {
    change_password_forgot: (req, res)=> {
        const {newpassword,confpassword,email}=req.body;
        if (newpassword===confpassword){
            db.Compte.findByPk(email).then(compte=>{
                if (compte){
                    compte.update({motdepasse : newpassword});
                    res.redirect('/');
                }else {
                    res.render('./login_views/forgotPassword.ejs',{message: 'This account is not found'});
                }
            })
        }else {
            res.render('./login_views/forgetPassword.ejs',{message: 'Your write !!'});
        }
    }
};

module.exports = controllers_Compte;