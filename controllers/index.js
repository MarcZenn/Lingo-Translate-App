var request = require('request')


var indexController = {
	index: function(req, res) {
		res.render('index');
	}, 

	translate : function(req,res){
		var query = req.query
		console.log(query)

		// FIGHT!!!!  BEWARE, BELOW HACK CAUSED BY LACK OF WWW IN ORIGINAL URL
			// DUMB
		// var queryString = '?key=' + query.key +'&source=' + query.source + '&target=' + query.target + '&q=' + query.q
		// // console.log(queryString)

		// var url = "https://www.googleapis.com/language/translate/v2" + queryString;
		// console.log(url)

		request( {
			url : "https://www.googleapis.com/language/translate/v2",
			qs : req.query,
			method : "GET"

		} , function(err, response, body){

			if (!err && response.statusCode === 200) {
				// console.log(response)
				console.log(body)
                //>send the body back to the ajax request
				res.send(body);
			}
		})
	}












};

module.exports = indexController;