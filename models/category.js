var mongoose = require("mongoose");

var categorySchema = mongoose.Schema({
    name: {
        type: String,
        index: true,
        required: true
    },
    description: {
        type: String
    }
});

var Category = module.exports = mongoose.model('Category', categorySchema);

// Get all categories
module.exports.getCategories = function (callback) {
    Category.find(callback);
};

// Get category by ID
module.exports.getCategoryById = function(id, callback) {
    Category.findById(id, callback);
};

// Create a category
module.exports.createCategory = function(newCategory, callback) {
    newCategory.save(callback);
};

// Delete a category
module.exports.removeCategory = function(id, callback) {
    Category.findById(id).remove(callback);
};