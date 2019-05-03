var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors') // Cross Origin Domain Sharing
var mysql = require('mysql')

var app = express()
app.use(cors())
app.use(bodyParser.json()) 
var Hostname = 'localhost'
var Port = '3306'
/* var connection = mysql.createConnection({
    host: 'localhost',
    user: 'JS_Course_User',
    password: 'c0nygre' , 
    database: 'conygre'
})
 */



 app.get('/albums' ,function(req,res) {  // req - Request , res - Response */
    console.log( ' Got a get ' )
        /* connection.query(
            'SELECT * FROM compact_discs' , // WHERE id = ' + req.params.id 
            function(error, results, fields) {  res.json(results) }
        ) */
    } 
)


// Get one record
/*
app.get('/albums/:id' ,function(req,res) {  // req - Request , res - Response 

    connection.query(
        'SELECT * FROM compact_discs  WHERE id = ' + req.params.id  , 
        function(error, results, fields) {  res.json(results) }
    )
} 
)
*/
/*
// Delete 
app.delete('/albums/:id' ,function(req,res) {  // req - Request , res - Response 
let sql =  'DELETE FROM compact_discs  WHERE id = ' + req.params.id 
    connection.query(
        sql  , 
        function(error, results, fields) {   res.end('Album removed if it existed ') }
    )
} 
)

*/

var server = app.listen(8081, function() { 
var host =  server.address().address
var port = server.address().port

})  
 console.log("Howdy Doody") 