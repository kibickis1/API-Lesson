$.getJSON("https://picsum.photos/v2/list", function(data){
	console.log(data);

	$.each(data, function(index, value) {
		console.log(value);

		var name = value.author;
		var width = value.width;
		var height = value.height;
		var imageURL = value.download_url;

		// $('.author').text(name);
		// $('.width').text(width);
		// $('.height').text(height);
		// $('img').attr('src', imageURL);

		$('.gallery_sub').append('<h1 class="author">' + name + '</h1><h6 class="width">' + width + '</h6><h6 class="height">' + height + '</h6><img src="' + imageURL + '">');
	});
});


	var bigImg = document.getElementById('gallery_big');
	var subImg = document.getElementById('gallery_sub').getElementsByTagName('img');

	for(var i = 0; i < subImg.length; i++) {
		subImg[i].addEventListener('click', full_image);
	}

	function full_image() {
		var imgSrc = this.gettAttribute('src');

		bigImg.innerHTML = "<img src="+imgSrc+">";
	}


