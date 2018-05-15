/**
 * GET /
 */

var News = require('../models/News');
exports.index = function(req, res) {
  News.find(function(err, news) {
    
    res.render('home', {news: news});
  });
};
