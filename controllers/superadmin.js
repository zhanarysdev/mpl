var User = require('../models/User');

exports.index = function(req, res, next) { 
    // if(req.user.name === 'superadmin') {
        res.render('superadmin', {
            title: 'superadmin'
          });
    // } else {
    //         res.redirect('/login');
    // }   

  };
  