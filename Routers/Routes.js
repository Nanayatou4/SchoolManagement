const express = require("express");
const controllers_student=require("../Controllers/EtudiantController")
const controllers_Compte=require("../Controllers/CompteController")
const controllers_main=require("../Controllers/mainController")
const exam_controller=require("../Controllers/ExamenController")
const prof_controller=require("../Controllers/ProfController")
const note_controller=require("../Controllers/NoteController")

const Route = express.Router();

Route.get('/',controllers_main.login);

//route for compte
Route.get('/register', controllers_student.register);
Route.post('/login',controllers_main.connect)
Route.post('/enregistrer',controllers_main.save)
Route.get('/',controllers_main.login);
Route.get('/password',controllers_main.pwd);

Route.post('/create_student',controllers_main.create_student)
Route.get('/learn_sector',controllers_main.learn_sector)

//route for exam
Route.get('/exam',exam_controller.exam_Page);
Route.get('/add-exam',exam_controller.add_exam_page);
Route.put('/edit-exam/:id',exam_controller.edit_exam_page);
Route.delete('/delete-exam/:id',exam_controller.delete_exam);


//route for note
Route.put('/edit-note/:id',prof_controller.edit_note);
Route.get('/add-note/:id',prof_controller.add_note);
Route.delete('/delete-note/:id',prof_controller.delete_note);
Route.get('/note-page',note_controller.note_page)
Route.get('/delete-note-page/:id',note_controller.confirm_delete_note)
Route.get('/edit-note-page/:id',note_controller.edit_note_page)
Route.get('/add-note-page/:id',note_controller.add_note_page)
Route.get('/prof-page',prof_controller.prof_page)
Route.get('/students-notes',prof_controller.students_notes)
Route.get('/confirmation-delete',)


Route.get('/adminPage',controllers_main.pageAdmin);
Route.get('/studentPage',controllers_main.pageStudent);
Route.get('/profPage',controllers_main.pageProf);
module.exports=Route;