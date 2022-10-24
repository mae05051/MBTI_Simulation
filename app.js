const express = require('express') 
const app = express()
const port = 5000
const path = __dirname + '/views';

app.get('/', (req, res) => { 
  res.send('Hello MBTI TEST!')
})

app.get('/test', (req, res) => { 
  res.sendFile(path+"/1.html")
})

app.get('/test/2', (req, res) => { 
  res.sendFile(path+"/2.html")
})

app.get('/test/3', (req, res) => { 
  res.sendFile(path+"/3.html")
})


app.get('/result', (req, res) => { 
    res.sendFile(path+"/result.html")
})

app.use('/view', express.static(path))

app.listen(port, () => {
  console.log(`MBTI TEST http://localhost:${port}`)
})