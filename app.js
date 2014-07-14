$(document).ready(function() {
	$("form").submit(function (event) {
		event.preventDefault();
		// clear the gallery before a submit
		$(".gallery-wrapper").html("");
		var hashtag=$(this).find('input[name="tags"]').val();
		searchWorld(hashtag);
	}); //end submit
}); //end ready	

var searchWorld = function(hashtag) {
		
		var getPhotos = $.ajax ({
			url:"https://api.instagram.com/v1/media/popular?client_id=920d83e2718741b885af9d6323a498b4",
			dataType:"jsonp",
			type:"GET"
		})
		.done(function(getPhotos) {

			var results = $('<div class="gallery-wrapper">');
			
			$.each(getPhotos.data, function(index, photo) {
				results += '<div class="imageWrapper">';
				results += '<img src="' + photo.images + '"/>';
				//results += '<div class="location"' + photo.location + '</div';
				results += '</div>';
			});
		
			$(".gallery-wrapper").html(results);
		});
};


