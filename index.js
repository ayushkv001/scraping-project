const Insta = require('scraper-instagram');
const InstaClient = new Insta();


  
const express = require('express')
 
const bodyparser = require('body-parser')
 
const app = express()
 
app.use(bodyparser.urlencoded({ extended: false }))
 
app.use(bodyparser.json())
 
app.set('view engine','ejs')
 
app.get('/', (req, res) => {
    res.render('index',{data:''})
})
 
app.post('/getprofile', (req, res) => {
  // using username for scraping
  InstaClient.getProfile(req.body.username).then((result) => {
    res.render('index',{data:result})
  }).catch(err => console.log(err) );
})
 
app.listen(5000, () => {
    console.log('App is listening on Port 5000')
})