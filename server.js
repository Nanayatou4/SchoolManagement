const express = require('express');
const sequelize = require('sequelize')
const app = express();
const bodyParser = require('body-parser');
const db = require('./Models/sequelize');
const PORT = 2700;
const UsersRoute = require('./Routers/UsersRoute');

app.set('view engine', 'ejs');
app.set("views", "./Views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req,res)=>{
    res.render('login');
});

app.get('/register', (req,res)=>{
    res.render('register');
});

app.get('/password', (req,res)=>{
    res.render('forgotPassword');
})



app.use('/',UsersRoute);

app.use("/publics", express.static("publics"));

db.sequelize.authenticate().then(()=>{
    console.log('Successfully');
}).catch((err)=>{
    console.log(err);
})


db.sequelize.sync({alter: true}).then(()=>{
    console.log("Database synced");
    app.listen(PORT, ()=>{
    console.log("Server enabled..");
});
}).catch((err)=>{
    console.log("Error to sync database");
})

