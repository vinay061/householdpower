const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'dbhousehold',
    user: 'root',
    password: ''
})

module.exports = connection