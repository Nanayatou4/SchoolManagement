const express = require('express');
const sequelize = require('sequelize')
const app = express();
const bodyParser = require('body-parser');
const db = require('./Models/sequelize');
const session = require('express-session')
const PORT = 2800;
const route = require("./Routers/Routes");

app.use(session({
    secret: 'sessionSecret',
    resave: true,
    saveUninitialized: true
}))

module.exports=express;
app.set('view engine', 'ejs');
app.set("views", "./Views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/publics", express.static("publics"));

app.use('/',route);


db.sequelize.authenticate().then(()=>{
    console.log('Successfully');
}).catch((err)=>{
    console.log(err);
})

db.sequelize.sync({alter: false}).then(()=>{
    console.log("Database synced");
    app.listen(PORT, ()=>{
    console.log("Server enabled..");
});
}).catch((err)=>{
    console.log("Error to sync database");
})

