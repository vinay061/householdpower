const express = require('express')
const app = express()
const cors = require('cors')
port = 5000
const connection = require('./database')
let counter = 0

app.use(cors())

app.get('/data', (req,res) => {
    let sqlquery = 'SELECT * FROM temperature'
    connection.query(sqlquery, (error, results) => {
        if(error) throw error
        res.send(results)
        counter++
        console.log(`Database call ${counter} time`)
        console.log(typeof(results))
    })
})

app.listen(port, () => {
    console.log(`Listening on port: ${port} at http://localhost/${port}`)
    connection.connect((err) => {
        if(err) throw err
        console.log('Database Connected')
    })    
})

