const express = require('express')
const app = express()
const cors = require('cors')
port = 5000
const connection = require('./database')
let counter = 0

app.use(cors())

app.get('/', (req,res) => {
    res.send('Welcome to the Household Power Consumption Data Server. Click /data to see the results')
})

// api for data transfer 
app.get('/data', (req,res) => {
    // query to select data and limit to fetch first 200 records to reduce network load
    let sqlquery = 'SELECT * FROM epower LIMIT 0, 5000' 
    connection.query(sqlquery, (error, results) => {
        if(error) throw error
        res.send(results)
        counter++
        //a counter to maintain the number of calls received to the server
        console.log(`Database call ${counter} time`)
    })
})

// connection is established here
app.listen(port, () => {
    console.log(`Listening on port: ${port} at http://localhost/${port}`)
    connection.connect((err) => {
        if(err) throw err
        console.log('Database Connected')
    })    
})

