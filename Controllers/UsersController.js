const {Administrateur, Compte, Professeur, Etudiant} = require('../Models/sequelize');

const inscription = async (req,res)=>
{
    const {nom, prenom, email, statut} = req.body;
    console.log('Donnees: ', req.body);
    try{
        let user;
        let typeUser;
        if(statut === 'admin'){
            typeUser = Administrateur;
        
        }else if(statut === 'prof'){
          typeUser = Professeur;
            
        }else if(statut === 'etudiant'){
           typeUser = Etudiant;
            
        }else{
            return res.status(400).json({message: 'Statut invalide'});
        }
        console.log("Creation de l'utilisateur :");
        user = await typeUser.create({
            nom,
            prenom,
            email});
        alert("Welcome "+typeUser+" "+prenom); 
        console.log("Utilisateur cree"); 
        
console.log("Creation du compte");
       res.render('login', {
            login: '',
            password: '',
        });

    }catch(err){
        console.log(err);
        res.status(400).send("Erreur lors de l'inscription!");
    }
};

module.exports = {
    inscription,
};

