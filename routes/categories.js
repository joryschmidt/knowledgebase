var express = require('express');
var router = express.Router();

var Category = require("../models/category.js");

router.get('/', function(req, res, next) {
  Category.getCategories(function(err, categories) {
    if (err) console.log(err);
    res.json(categories);
  })
});

router.get('/:id', function(req, res, next) {
  Category.getCategoryById(req.params.id, function(err, category) {
    if (err) console.log(err);
    res.json(category);
  })
});

router.post('/', function(req, res, next) {
  var newCategory = new Category({
    name: req.body.name,
    description: req.body.description
  });
  
  Category.createCategory(newCategory, function(err) {
    if (err) console.log(err);
    res.location('/categories');
    res.redirect(200, '/categories');
  });
});

router.delete('/:id', function(req, res, next) {
  var id = req.params.id;
  
  Category.removeCategory(id, function(err) {
    if (err) console.log(err);
    res.location('/categories');
    res.redirect(200, '/categories');
  });
});

module.exports = router;
