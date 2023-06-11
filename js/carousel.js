var carouselContainer = document.getElementById("Carousel-container");
var containers = document.getElementsByClassName("Container");
var currActive = 1;

carouselContainer.addEventListener('scroll', function () {
    for (var i = 0; i < containers.length; i++)
    {
        if (Math.abs(containers[i].getBoundingClientRect().left - carouselContainer.getBoundingClientRect().left) <= 75)
        {
            containers[currActive].classList.remove("active");
            containers[i].classList.add("active");
            currActive = i;
        }
    }
});

var pianoImg = document.getElementById("piano_img");
var pianoVid = document.getElementById("piano_vid");

pianoImg.addEventListener('mouseenter', function() {
    pianoVid.style.display = 'inherit';
    pianoImg.style.display = 'none';
});

pianoVid.addEventListener('mouseleave', function() {
    pianoVid.style.display = 'none';
    pianoImg.style.display = 'inherit';
});