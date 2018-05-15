var mongoose = require("mongoose");
var News = require("../models/News");

var newsController = {};


exports.newsController = function(req, res) {
  res.render('createNews', {
    title: 'Create'
  });
  };

exports.newNews = function(req, res) {
  console.log(req.body);
	var news;
	
	news = new News({
		title: req.body.title,
    description: req.body.description,
    text: req.body.text,
	});
	
	news.save(function (err) {
		if (!err) {
			return console.log("created");
		} else {
			//TODO: return page with errors
			return console.log(err);
		}
	});
	res.end();
	//TODO: return to list page, if saved
	res.redirect('/');
	//return res.send(driver);	
}


exports.show = (req, res) => {

	News.find({ _id: req.params._id} ,(err, obj)=>{
		res.render('singleNews', {context: obj})
	})

	
}