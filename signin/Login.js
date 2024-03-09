const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();


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

