function upDate(previewPic){
        x = document.getElementById("image");
        u = previewPic.getAttribute('src');

        x.style.backgroundImage = 'url('+u+')';
        t = previewPic.getAttribute('alt');
        x.innerHTML = t;
	}

	function unDo(){
        x = document.getElementById("image");
        x.style.backgroundImage = 'url("")';
        x.innerHTML = "Hover over an image below to display here.";
    }
    
    