const express = require('express');
const mysql = require('mysql');

const app = express();

var db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "",
    database:"socka"
});

db.connect((err)=>{
    if (err) throw err;
    console.log("connected to database")

    //insert
    // sql = "insert into players (first_name, last_name, position) values('supanut', 'ldm', 'forward')"
    // db.query(sql, (err, result) => {
    //     if (err) throw err
    //     console.log("Insert complete")
    // })

    sql = "select first_name, last_name from players"
    db.query(sql,(err,res)=> {
        if (err) throw err
        console.log(res)
    })

})

app.listen(3000, ()=>{
    console.log("server online")
})