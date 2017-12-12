var express = require('express');
var router = express.Router();
var Assignment = require('../model/assignment');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/addTask', function(req, res, next){

  new Assignment(req.body).save().then(()=>{
    res.redirect('/checklist')
  }).catch((err)=>{
    next(err)
  })

});


router.get('/checklist', function(req, res, next){

  Assignment.find().then((docs)=>{
    console.log('All the assignments are ')
    console.log(docs);
    res.render('checklist', { assignments : docs})
  }).catch((err)=>{
    next(err);
  })

});


router.get('/table', function(req, res, next){
  res.render('gradetable');
})

module.exports = router;
