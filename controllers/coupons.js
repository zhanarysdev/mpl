var mongoose = require("mongoose");
var Coupons = require("../models/Coupons");

var couponsController = {};



exports.couponsIndex = function(req, res) {
		Coupons.find((err, coupons)=>{
			res.render('coupons', {
				context: coupons
			});
		})
  };

exports.couponsController = function(req, res) {
  res.render('createCoupons', {
    title: 'Create'
  });
  };

exports.newCoupons = function(req, res) {
  console.log(req.body);
	var coupons;
	
	coupons = new Coupons({
		title: req.body.title,
    description: req.body.description,
    text: req.body.text,
	});
	
	coupons.save(function (err) {
		if (!err) {
			return console.log("created");
		} else {
			//TODO: return page with errors
			return console.log(err);
		}
	});
	res.end();
	//TODO: return to list page, if saved
	res.redirect('/coupons');
	//return res.send(driver);	
}


exports.show = (req, res) => {

	Coupons.find({ _id: req.params._id} ,(err, obj)=>{
		res.render('singleCoupons', {context: obj})
	})

	
}