var express = require('express');
var router = express.Router();

var Article = require('../models/article.js');

router.get('/', function(req, res, next) {
  Article.getArticles(function(err, articles) {
    if (err) console.log(err);
    res.json(articles);
  });
});

router.get('/details/:id', function(req, res, next) {
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
  var title =     req.body.title;
  var category =  req.body.category;
  var body =      req.body.body;
  
  // Article object
  var newArticle = new Article({
    title:    title, 
    category: category,
    body:     body
  });
  
  // Create the article
  Article.createArticle(newArticle, function(err, article) {
    if (err) console.log(err);
    res.location('/articles');
    res.redirect(200, '/articles');
  });
});

router.put('/edit', function(req, res, next) {
  var id = req.body.id;
  var data = {
    title: req.body.title,
    category: req.body.category,
    body: req.body.body
  };
  
  // Update the article
  Article.updateArticle(id, data, function(err, article) {
    if (err) console.log(err);
  });
  
    res.location('/articles');
    res.redirect(200, '/articles');
});

router.delete('/:id', function(req, res, next) {
  var id = req.params.id;
  
  // Delete the article
  Article.removeArticle(id, function(err, article) {
    if (err) console.log(err);
    res.location('/articles');
    res.redirect(200, '/articles');
  });
});

module.exports = router;
