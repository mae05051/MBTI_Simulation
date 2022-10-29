const express = require('express') 
const app = express()
const port = 5000
const path = __dirname + '/views';

app.use(express.json());

app.use(express.urlencoded({extended: false}))

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

var cnt1 = 0
app.get('/check/page1', (req, res) => {
  cnt1++
  res.json({cnt:cnt1})
})

var cnt2 = 0
app.get('/check/page2', (req, res) => {
  cnt2++
  res.json({cnt:cnt2})
})

app.get('/result', (req, res) => { 
    res.sendFile(path+"/result.html")
})

var lst1
app.post('/result/1', (req, res) => {
  lst1 = req.body.lst;
  console.log(lst1);
  res.send(lst1);
})

var lst2
app.post('/result/2', (req, res) => {
  lst2 = req.body.lst;
  console.log(lst2);
  res.send(lst2);
})

var lst3
app.post('/result/3', (req, res) => {
  lst3 = req.body.lst;
  console.log(lst3);
  res.send(lst3);
})

app.get('/result/mbti', (req, res) => {
  var arr = lst1.concat(lst2,lst3)

  var i_cnt = arr.filter(item => item === 'I').length
  var e_cnt = arr.filter(item => item === 'E').length

  var s_cnt = arr.filter(item => item === 'S').length
  var n_cnt = arr.filter(item => item === 'N').length

  var t_cnt = arr.filter(item => item === 'T').length
  var f_cnt = arr.filter(item => item === 'F').length
  
  var j_cnt = arr.filter(item => item === 'J').length
  var p_cnt = arr.filter(item => item === 'P').length

  if (i_cnt>e_cnt){
    var ie='I'
  }else{
    var ie='E'
  }

  if (s_cnt>n_cnt){
    var sn='S'
  }else{
    var sn='N'
  }
  
  if (t_cnt>f_cnt){
    var tf='T'
  }else{
    var tf='F'
  }
  
  if (j_cnt>p_cnt){
    var jp='J'
  }else{
    var jp='P'
  }

  var mbti_str=ie+sn+tf+jp
  //console.log(mbti_str)
  res.json({mbti: mbti_str});
})

app.use('/view', express.static(path))

app.listen(port, () => {
  console.log(`MBTI TEST http://localhost:${port}`)
})