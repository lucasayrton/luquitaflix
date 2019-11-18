setTimeout(function () {
  var video = document.getElementById("video-background");
  video.classList.add("video-fadeIn");
  video.play();
}, 5000);

function slideLeft() {
  var elmnt = document.getElementById("slide");
  elmnt.scrollBy({ top: 0, left: -250, behavior: 'smooth' });
}

function slideRight() {
  var elmnt = document.getElementById("slide");
  elmnt.scrollBy({ top: 0, left: 250, behavior: 'smooth' });
}