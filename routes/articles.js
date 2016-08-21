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

module.exports = router;