// set index to 1
let slideIndex = 1;

// call showSlides using slideIndex as an input
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n)
}
//
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// showSlides function
// create a function with an input (n)
function showSlides(n) {
    let i;
    // import the in a variable my block of images
    let slides = document.querySelectorAll(".images");
    let dots = document.querySelectorAll(".dot"); 
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    
    //  hide all the slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
    // 
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
    // 
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";

}

