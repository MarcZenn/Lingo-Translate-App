




$(function(){

	function addTheTranslation(array) {

		$('.translation-container').empty();

		var $p = $('<p>');

		_.each(array, function(obj) {

			console.log(obj.translatedText) 

			$translationP = $p.clone();

			$translationP.text(obj.translatedText);

			$('.translation-container').append($translationP)
		});
	}

	$('.transForm').on('submit',function(event){
		event.preventDefault()
		
		// var data = {
		// 	source : req.body.source,
		// 	target : req.body.target,
		// 	q      : req.body.q
		// }

		console.log($(this).serialize())

		$.ajax({
			method : "GET",
			url : "/translate", // route you define
			data : 'key=AIzaSyB45lmg3rb9SqYMqXoMjKbfI_DQghWvq1Y&' + $(this).serialize(),
			success : function(dataObj){

				var obj = JSON.parse(dataObj);

				// console.log(obj)
				// console.log(obj.data)

				var translationArray = obj.data.translations
				console.log(translationArray)

				addTheTranslation(translationArray);

				// console.log( translationArray)
				// $('#translation').text(obj.)
			}
		})
	})
})