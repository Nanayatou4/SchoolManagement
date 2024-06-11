const db=require('../Models/sequelize');

module.exports = {
    sector_page:(req,res)=>{
        db.Filiere.findAll().then(sectors=>{
            res.render('./admin_views/sectorManagement.ejs',{sectors});
        }).catch(error=>{
            res.send("error");
        });
    },
    edite_sector_page:(req,res)=>{
        const id=req.params.id;
        db.Filiere.findByPk(id).then(sector=>{
            res.render('./admin_views/modifierFiliere.ejs',{sector});
        }).catch(error=>{
            res.send("error");
        });
    },
    add_sector_page: (req,res)=>{
        res.render('./admin_views/ajoutFiliere.ejs');
    }
}