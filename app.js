const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');

const app = express();

const {getHomePage} = require('./routes/index.js');
const {addPlayerPage,addPlayer, deletePlayer, editPlayer, editPlayerPage} = require('./routes/player');


// const PORT = 7777;

const db = mysql.createConnection({
    host:   "localhost",
    user:   'root',
    password:   '',
    database:   'socka'
})

db.connect((err)=>{
    if (err) throw err
    console.log("connect database successfully")
})

global.db = db

// app.set('PORT', process.env.port || PORT)
app.set('views',__dirname + '/views');
app.set('views engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());


app.get('/', getHomePage);
app.get('/add',addPlayerPage);
app.get('/edit/:id', editPlayerPage);
app.get('/delete/:id', deletePlayer);
app.post('/add',addPlayer);
app.post('/edit/:id',editPlayer);


app.listen(3000, ()=> {
    console.log('server running')
});