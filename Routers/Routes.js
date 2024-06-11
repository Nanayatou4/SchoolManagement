const express = require("express");
const controllers_student=require("../Controllers/EtudiantController")
const controllers_Compte=require("../Controllers/CompteController")
const controllers_main=require("../Controllers/mainController")
const exam_controller=require("../Controllers/ExamenController")
const prof_controller=require("../Controllers/ProfController")
const note_controller=require("../Controllers/NoteController");
const controllers_Admin=require('../Controllers/AdminController')
const controllers_Sector=require('../Controllers/FiliereController')
const Route = express.Router();

Route.get('/',controllers_main.login);

//route for compte
Route.get('/register', controllers_student.register);
Route.post('/login',controllers_main.connect);
Route.post('/enregistrer',controllers_main.save);
Route.get('/change_password-page',controllers_main.pwd);
Route.put('/change_passwod',controllers_Compte.change_password_forgot);


Route.post('/create_student',controllers_main.create_student);
Route.get('/learn_sector',controllers_main.learn_sector);

//route for exam
Route.get('/exam',exam_controller.exam_Page);
Route.get('/add-exam-page',exam_controller.add_exam_page);
Route.put('/edit-exam-page/:id',exam_controller.edit_exam_page);
Route.delete('/delete-exam/:id',exam_controller.delete_exam);

Route.post('/add-exam',prof_controller.exam_add);

Route.post('/edit-exam',exam_controller.edit_exam);




//route for note
Route.put('/edit-note/:id',prof_controller.edit_note);
Route.get('/add-note/:id',prof_controller.add_note);
Route.delete('/delete-note/:id',prof_controller.delete_note);
Route.get('/note-page',note_controller.note_page);
Route.get('/delete-note-page/:id',note_controller.confirm_delete_note);
Route.get('/edit-note-page/:id',note_controller.edit_note_page);
Route.get('/add-note-page/:id',note_controller.add_note_page);
Route.get('/prof-page',prof_controller.prof_page);
Route.get('/students-notes',prof_controller.students_notes);


Route.get('/adminPage',controllers_main.pageAdmin);
Route.get('/studentPage',controllers_main.pageStudent);
Route.get('/profPage',controllers_main.pageProf);


//sector Management
Route.get('/sectorManage',controllers_Admin.sectorManage );
Route.post('/addSector', controllers_Admin.add_sector);
Route.put('/editSector', controllers_Admin.edit_sector);
Route.delete('/deleteSector', controllers_Admin.delete_sector);



Route.get('/edit_sector_page/:id', controllers_Sector.edite_sector_page);
Route.get('/add_sector_page', controllers_Sector.add_sector_page);
Route.get('/sector_page', controllers_Sector.sector_page);


//subject Management
Route.get('./subjectManage', controllers_Admin.subjectManage_page);
Route.post('/addSubject', controllers_Admin.add_subject);
Route.put('/editSubject', controllers_Admin.edit_subject);
Route.delete('/deleteSubject', controllers_Admin.delete_subject);

//student Management
Route.get('/studentManage', controllers_Admin.studentManage);
Route.post('/addStudent', controllers_Admin.add_student);
Route.put('/editStudent', controllers_Admin.edit_student);
Route.delete('/deleteSudent', controllers_Admin.delete_student);

//teacher Management
Route.get('/teacherManage', controllers_Admin.teacherManage);
Route.post('/addTeacher', controllers_Admin.add_teacher);
Route.put('/editTeacher', controllers_Admin.edit_teacher);
Route.delete('/deleteTeacher', controllers_Admin.delete_teacher);
module.exports=Route;