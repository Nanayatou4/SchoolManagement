const express = require("express");
const controllers_student=require("../Controllers/EtudiantController")
const controllers_Compte=require("../Controllers/CompteController")
const controllers_main=require("../Controllers/mainController")
const exam_controller=require("../Controllers/ExamenController")

const Route = express.Router();

Route.get('/',(req,res)=>{
    res.render('./login.ejs');
});

Route.get('/register', controllers_student.register);
Route.post('/login', controllers_Compte.login);
Route.post('/enregistrer',controllers_main.save)
Route.get('/', controllers_main.login);
Route.get('/password',controllers_main.pwd);

Route.get('/exam',exam_controller.exam_Page)

module.exports=Route;