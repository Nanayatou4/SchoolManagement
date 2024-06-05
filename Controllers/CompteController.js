db = require('../Models/sequelize');

const controllers_Compte = {
    create_compte(req, res) {

    },
    change_pass_word(req, res) {

    },
    login(req, res) {

        const email = req.body.email;
        const password=req.body.password;

        console.log(email+" "+password);

        	const compte = db.Compte.findOne({where: {login: email}});

        	if (compte) {
        		res.status(401).send('compte introuvable ! ');
        	} else {
        	    res.json(compte);
        		/*if (password !== compte.motdepasse) {

        			res.status(401).send('Mot de passe incorrect ');

        		} else {
        		    if(compte.AdministrateurId!==null){
        		        res.status(200).send('admin');
        		    }
        			else if(compte.ProfesseurId!=null){
        			    res.status(200).send('teacher');
        			}
        			else if(compte.EtudiantId!==null){
        			    res.status(200).send('student');
        			}
        			res.redirect('/');
        		}*/
        	}

    }
};

module.exports = controllers_Compte;