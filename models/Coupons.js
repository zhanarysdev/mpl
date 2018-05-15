var mongoose = require('mongoose');
var newsSchema = new mongoose.Schema({
    title: String,
    description: String,
    text: String,
});


module.exports = mongoose.model('Coupons', newsSchema);
