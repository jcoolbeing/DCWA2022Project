const express = require('express')
const app = express()
const port = 3000

// ejs view engine
let ejs = require('ejs');
app.set('view engine', 'ejs');
// body parser
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
// mysql and setting up connection pool
const mysql = require('mysql');
  mysql.createPool({
      connectionLimit : 3,
                 host : 'localhost',
                 user : 'root',
             password : 'root',
             database : 'proj22'
        })
        .then(p=>{
          pool = p
          console.log("Connected to MYSQL database")
      })
    .catch(e => {
     console.log("pool error:" + e)
  })

// routes
app.get('/', (req, res) => {
  // ejs was not working for me will try again later
  res.render("home")
  //res.sendFile(__dirname + "/views/home.html")
  //fixed wont need send file anymore
})

app.get('/employees', (req, res)=>{
  res.render("employees")
  //res.sendFile(__dirname + "/views/employees.html")
  //fixed 
})

app.get('/departments', (req, res)=>{
  res.render("departments")
})

app.get('/employeesMongoDB', (req, res) => {
  res.render("employeesMongoDb")
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})