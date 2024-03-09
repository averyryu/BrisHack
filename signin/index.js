const app = express();
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 63342;

app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyoyeonlee',
  password: 'Password1!',
  database: 'TheraGo'
});

app.post('/register', (req, res) => {
  const { firstname, lastname, age, username, password } = req.body;

  const query1 = 'INSERT INTO User (firstname, lastname, age) VALUES (?, ?, ?)';
  const userVal = [firstname, lastname, age];

  connection.query(query1, userVal, (userErr, userResult) => {
    if (userErr) {
      console.error('Error inserting into User table: ', userErr);
      res.status(500).send('Internal Server Error');
      return;
    }

    const loginQuery = 'INSERT INTO UserLogin (username, hashpwd, customerID) VALUES (?, ?, ?)';
    const loginVal = [username, password, userResult.insertId];

    connection.query(loginQuery, loginVal, (loginErr) => {
      if (loginErr) {
        console.error('Error inserting into UserLogin table: ', loginErr);
        res.status(500).send('Internal Server Error');
      } else {
        console.log('Data inserted successfully!');
        res.status(200).send('Registration successful!');
      }
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
