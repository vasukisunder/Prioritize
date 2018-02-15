
var data = require('../itemData.json');

/*
 * GET home page.
 */
exports.view = function(req, res){
	console.log(data);
  	res.render('index');
};