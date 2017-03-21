
window.onload = function(){
	// modal image popup
	var images = document.getElementsByClassName("img");
	var modal = document.getElementById("myModal");
	var modalImg = document.getElementById("img01");
	var close = document.getElementById("close");

	for(i = 0; i < images.length; i++){
		images[i].addEventListener('click', function(e){
			modal.style.display = "block";
			modalImg.src = this.src;
			for(j = 0; j < images.length; j++){
				images[j].style.display = "none";
			}
		});
	}

	close.addEventListener('click', function(e){
		modal.style.display = "none";
		for(j = 0; j < images.length; j++){
			images[j].style.display = "block";
		}
	});

}
