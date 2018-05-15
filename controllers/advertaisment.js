var mongoose = require("mongoose");
var Advertaisment = require("../models/Advertaisment");

var advertaismentController = {};



exports.advertaismentIndex = function(req, res) {
		Advertaisment.find((err,advertaisment)=>{
			console.log(advertaisment)
			res.render('advertaisment', {
				context: advertaisment
			});
		})
  };

exports.advertaismentController = function(req, res) {
  res.render('createAdvertaisment', {
    title: 'Create'
  });
  };

exports.newAdvertaisment = function(req, res) {
  console.log(req.body);
	var advertaisment;
	
	advertaisment = new Advertaisment({
		title: req.body.title,
    description: req.body.description,
    text: req.body.text,
	});
	
	advertaisment.save(function (err) {
		if (!err) {
			return console.log("created");
		} else {
			//TODO: return page with errors
			return console.log(err);
		}
	});
	res.end();
	//TODO: return to list page, if saved
	res.redirect('/advertaisment');
	//return res.send(driver);	
}


exports.show = (req, res) => {

	Advertaisment.find({ _id: req.params._id} ,(err, obj)=>{
		res.render('singleAdvertaisment', {context: obj})
	})

	
}