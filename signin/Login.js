const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();
const bcrypt = require('bcrypt');


const corsOptions = {
    origin: 'http://localhost:8080',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hyoyeonlee',
    password: 'Password1!',
    database: 'TheraGo',
});

connection.connect((err) =>{
   if (err){
       console.error('Error connecting to MySQL:', err);
       return;
   }
   console.log('Connected to MySQL server');
});

app.post('/register', async (req, res) => {
    const fName = req.body.items[0];
    const lName = req.body.items[1];
    const age = req.body.items[2];
    const username = req.body.items[3];
    const password = req.body.items[4];

    const hashedPwd = await bcrypt.hash(password, 10);

    console.log('Original password:', password);
    console.log('Hashed password: ', hashedPwd);

    const query = 'INSERT INTO User (firstname, lastname) VALUES (?, ?)';
    connection.query(query, [fName, lName], (error, results) => {
        if (error) {
            console.error('Error adding item to customer: ', error);
            res.status(500).json({message: 'Internal Server Error'});
            return;
        }
        const customerID = results.insertId;

        const query2 = 'INSERT INTO UserLogin (
    });
});

app.listen(8080, () =>{
    console.log('Server running...');
});