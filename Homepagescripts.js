var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.background = "linear-gradient(270deg, rgba(255,255,255),rgba(255,255,255) 100%)";
        //slides[i].style.background = "#FFF"
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    //testing
    //console.log(((slideIndex-1)*751.667).toString())

    var slideContainer = document.getElementById("slide-container")
    slideContainer.style.right = ((slideIndex-1)*751.667).toString().concat("px");
    /*document.getElementById("slide-container").style.background = linear-gradient(270deg, rgba(255, 255, 255, 0) 100%);*/
    /*console.log(slides[slideIndex]);*/
    if (slideIndex < 4) {
        slides[slideIndex].style.background = "linear-gradient(270deg, #9C69E2 9.75%, rgba(255, 255, 255) 100%)";
    }


    dots[slideIndex-1].className += " active";
}