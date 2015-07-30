




$(function(){

    // append p tags with translated words
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

    // on submit event of form
	$('.transForm').on('submit',function(event){
		event.preventDefault()
		
		console.log($(this).serialize())

        // ajax request to translate a word
		$.ajax({
			method : "GET",
			url : "/translate", // route you define
			data :$(this).serialize() +  '&key=AIzaSyB45lmg3rb9SqYMqXoMjKbfI_DQghWvq1Y',
			success : function(dataObj){

                // Need to parse the string we get sent back into a js object
				var obj = JSON.parse(dataObj);

				// console.log(obj)
				// console.log(obj.data)

				var translationArray = obj.data.translations
				// console.log(translationArray)

				addTheTranslation(translationArray);

				// console.log( translationArray)
			}
		});
	});
});