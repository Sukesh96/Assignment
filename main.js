//Carousel
var slideIndex = 1;
showSlides(slideIndex);

function slides(n){
    showSlides(slideIndex += n);
}
function showSlides(n){
    var i;
    var slides = document.querySelectorAll(".carousel-slides");
    if (n > slides.length){
        slideIndex = 1;
    }
    if (n < 1){
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

//Popup
var popupContainer = document.querySelector(".popup-container");
var popup = document.querySelector(".popup");
var popbtn = document.querySelector(".popbtn");

function displayPopup(){
    popupContainer.classList.add("show-backdrop");
    popup.classList.add("show-popup");
}

function closePopup(){
    if(popupContainer){
        popupContainer.style.display="none";
        popup.style.display="none";
    }
    popupContainer.classList.add("show-backdrop");
}

