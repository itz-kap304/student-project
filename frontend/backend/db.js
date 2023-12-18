const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'shivank',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  }
  console.log('Connected to MySQL');
});

connection.on('error', (err) => {
  console.error('MySQL error:', err);
});

process.on('exit', () => {
  connection.end();
});

module.exports = connection;
