const express = require("express");

const controllers_student=require("../Controllers/EtudiantController")
const controllers_Compte=require("../Controllers/CompteController")
const controllers_main=require("../Controllers/mainController")
const exam_controller=require("../Controllers/ExamenController")
const controller_admin=require("../Controllers/AdminController.js");

const Route = express.Router();

Route.get('/',(req,res)=>{
    res.render('./login.ejs');
});

//student Management
Route.get('/studentManage', controller_admin.studentManage);
Route.post('/addStudent', controller_admin.add_student);
Route.put('/editStudent', controller_admin.edit_student);
Route.delete('/deleteSudent', controller_admin.delete_student);

//teacher Management
Route.get('/teacherManage', controller_admin.teacherManage);
Route.post('/addTeacher', controller_admin.add_teacher);
Route.put('/editTeacher', controller_admin.edit_teacher);
Route.delete('/deleteTeacher', controller_admin.delete_teacher);


//sector Management
Route.get('/sectorManage', controller_admin.sectorManage);
Route.post('/addSector', controller_admin.add_sector);
Route.put('/editSector', controller_admin.edit_sector);
Route.delete('/deleteSector', controller_admin.delete_sector);

//subject Management
Route.get('./subjectManage', controller_admin.subjectManage);
Route.post('/addSubject', controller_admin.add_subject);
Route.put('/editSubject', controller_admin.edit_subject);
Route.delete('/deleteSubject', controller_admin.delete_subject);

Route.post('/enregistrer',controllers_main.save);
Route.post('/login',controllers_main.login);




Route.get('/register', controllers_student.register);




Route.get('/password',controllers_main.pwd);

Route.get('/exam',exam_controller.exam_Page)

module.exports=Route;




