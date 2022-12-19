const express = require('express')
const app = express()
const port = 3000
// ejs view engine
let ejs = require('ejs');
app.set('view engine', 'ejs');

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