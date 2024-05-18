const express = require("express")
const app = express()

const mysql = require('mysql')
const bodyparser=require('body-parser')

const cors = require('cors')
const port = process.env.PORT||3003;
app.use(cors());


app.listen(port,()=>{
    console.log('server running on port',port);
})
app.use(bodyparser.json()); 

const con = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"piltovr"

})
con.getConnection((err)=>{
    if(err) throw err
    else{
        console.log("connection is established")
        con.query("select * from students",(err,result)=>{
            if(err) throw err
            else{
                console.log(result);
                
            }
        })
    }
})

app.post('/signup', (req, res) => {
    const formData = req.body.formData;
    const { id, name, email, phone, address, dob, course } = formData;
    const q = 'INSERT INTO students (id, name, email, phone, address, dob, course) VALUES (?, ?, ?, ?, ?, ?, ?)';
    con.query(q, [id, name, email, phone, address, dob, course], (err, result) => {
        if (err) {
            console.error("Error:", err);
            res.status(500).send("Error inserting data into the database");
        } else {
            console.log("Data successfully inserted");
            res.send(["valid", result]);
        }
    });
});

app.get('/students', (req, res) => {
    const q = 'SELECT * FROM students';
    con.query(q, (err, results) => {
        if (err) {
            console.error("Error fetching data:", err);
            res.status(500).send("Error fetching data from the database");
        } else {
            res.json(results);
        }
    });
});