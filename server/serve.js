const express = require("express");
const Login     = express();
const mysql   = require('mysql');
const cors    = require('cors');

Login.get("/" ,(req,res) => {
    res.send("The server is running!");
});

Login.use(cors());
Login.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '1234',
    database: 'react_project',
})

Login.post('/register', (req,res) => {
    const username = req.body.username
    const password = req.body.password
  
    db.query(
        'INSERT INTO login (username,password) VALUES (?,?)' , 
        [username, password], 
        (err, result) => 
        {
            if (err) 
            {
                console.log(err);
            } 
            else 
            {
                res.send("Values Inserted");
            }
        }
        );
});

Login.post('/login',(req, res) => {
    const username = req.body.username
    const password = req.body.password
  
    db.query(
        'SELECT * from login WHERE username = ? AND password = ?' , 
        [username, password], 
        (err, result) => 
        {
            if (err) 
            {
                res.send({err:err});
            } 

            if (result.lenght>0)
            {
                res.send(result);
            } 
            
            else 
            {
                res.send({message: "Wrong username/password!!"});
            }
            
        }
        );
})


Login.listen(3001, () => {
    console.log("The Server is now running!!");
});