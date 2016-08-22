var express = require('express');
var router = express.Router();

var Article = require('../models/article.js');

router.get('/', function(req, res, next) {
  Article.getArticles(function(err, articles) {
    if (err) console.log(err);
    res.json(articles);
  });
});

router.get('/:id', function(req, res, next) {
  Article.getArticleById(req.params.id, function(err, articles) {
    if (err) console.log(err);
    res.json(articles);
  });
});

router.get('/category/:category', function(req, res, next) {
  Article.getArticlesByCategory(req.params.category, function(err, articles) {
    if (err) console.log(err);
    res.json(articles);
  });
});

router.post('/', function(req, res, next) {
  // Get form values
  var title = req.body.title;
  var category = req.body.category;
  var body = req.body.body;
  
  // Article object
  var newArticle = new Article({
    title: title, 
    category: category,
    body: body
  })
  
  // Create the article
  Article.createArticle(newArticle, function(err, article) {
    if (err) console.log(err);
    res.location('/articles');
    res.redirect('/articles');
  });
});

module.exports = router;
