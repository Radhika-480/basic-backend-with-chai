const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('laddudotcom')
})

app.get('/login', (req, res) => {
    res.send('<h1>login page</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>chai or code</h2>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

