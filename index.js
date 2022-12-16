const express = require('express')
const app = express()
const port = 3000
// ejs view engine
let ejs = require('ejs');
app.set('view engine', 'ejs');

// routes
app.get('/', (req, res) => {
  res.send('Employees')
})

app.get('/employees', (req, res)=>{
  res.send('employees')
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})