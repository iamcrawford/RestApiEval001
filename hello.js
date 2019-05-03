var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors') // Cross Origin Domain Sharing
var mysql = require('mysql')

var app = express()
app.use(cors())
app.use(bodyParser.json()) 

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'c0nygre' , 
    database: 'conygre'
})




app.get('/albums' ,function(req,res) {  // req - Request , res - Response 

        connection.query(
            'SELECT * FROM compact_discs' , // WHERE id = ' + req.params.id 
            function(error, results, fields) {  res.json(results) }
        )
    } 
)

app.get('/albums/:id' ,function(req,res) {  // req - Request , res - Response 

    connection.query(
        'SELECT * FROM compact_discs  WHERE id = ' + req.params.id  , 
        function(error, results, fields) {  res.json(results) }
    )
} 
)
// Delete 
app.delete('/albums/:id' ,function(req,res) {  // req - Request , res - Response 
let sql =  'DELETE FROM compact_discs  WHERE id = ' + req.params.id 
    connection.query(
        sql  , 
        function(error, results, fields) {   res.end('Album removed if it existed ') }
    )
} 
)

// Post 
app.post('/albums' ,function(req,res) {  // req - Request , res - Response 
let sql = 'INSERT INTO compact_discs ( title,artist,price,tracks )  '
sql = sql + " VALUES( '"  + req.body.title + "','"
+ req.body.artist + "','"
+ req.body.price + "','"
+ req.body.tracks + "')" 
console.log ( sql)
connection.query(
    sql  , 
    function(error, results, fields) {   res.end('Added new item ') }
    )
} 
)


var server = app.listen(8081, function() { 
var host =  server.address().address
var port = server.address().port


})
// console.log("Howdy Doody") 