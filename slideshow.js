//skal vise fra nummer 1
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides"); //80 referer til HTML slides
  var dots = document.getElementsByClassName("dot"); // 175 referer til HTML prikkerne "dot"
  
  if (n > slides.length) {slideIndex = 1} //når til enden begynd forfra
  if (n < 1) {slideIndex = slides.length} // når til den anden ende begynd forfra

  for (i = 0; i < slides.length; i++) { //++ er forøgelsen med 1 hver gang
      slides[i].style.display = "none"; //ccs gemmer alle slide fra DOM
  }
  for (i = 0; i < dots.length; i++) { //++ er forøgelsen med 1 hver gang
      dots[i].className = dots[i].className.replace(" active", ""); //display none i css
  }
  slides[slideIndex-1].style.display = "block"; //css
  dots[slideIndex-1].className += " active";
}