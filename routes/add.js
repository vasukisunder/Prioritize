var item_data = require('../itemData.json');

exports.addItem = function(req, res) {  
	// Your code goes here
	var newItem =  {
		item_name: req.query.item_name,
		item_price: req.query.item_price,
		item_priority: req.query.item_priority
	};
	item_data.itemDatabase.push(newItem);
	res.render('index', item_data);
}