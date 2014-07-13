$(document).ready(function() {
	// clear the gallery before a submit
	$(".gallery-wrapper").html("");
	$("form").sumbit(function () {
		var hashtag=$(this).find('input[name="tags"]');
		getPhotos(hashtag);
	}); //end submit
}); //end ready

var getPhotos = function() {

}; //end getPhotos