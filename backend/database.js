const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'testdb',
    user: 'root',
    password: ''
})

module.exports = connection