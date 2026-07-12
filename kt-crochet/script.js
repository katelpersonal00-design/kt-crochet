alert("JS WORKS");
function openPopup(title, text, image){

    const popup = document.getElementById("popup");

    popup.style.display = "flex";


    document.getElementById("popup-title").innerHTML = title;


    document.getElementById("popup-text").innerHTML = text;


    document.getElementById("popup-img").src = image;


    document.getElementById("popup-download").href = image;

}



function closePopup(){

    document.getElementById("popup").style.display = "none";

}




window.onclick = function(event){

    const popup = document.getElementById("popup");


    if(event.target == popup){

        popup.style.display = "none";

    }

}
function openVideo(videoURL){

document.getElementById("video-popup").style.display="flex";

document.getElementById("video-player").src =
videoURL + "?autoplay=1";

}



function closeVideo(){

document.getElementById("video-popup").style.display="none";

document.getElementById("video-player").src="";

}