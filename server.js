const express = require('express');
const sequelize = require('sequelize')
const app = express();
const bodyParser = require('body-parser');
const db = require('./Models/sequelize');
const methodOverride = require('method-override');
const PORT = 3000;
const route = require("./Routers/Routes");

module.exports=express;
app.set('view engine', 'ejs');
app.set("views", "./Views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/publics", express.static("publics"));

app.use('/',route);

app.use(methodOverride('_method'))



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
    console.log(err);
    console.log("Error to sync database");
})

