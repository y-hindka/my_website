var currSlide = 0;
var prevSlide = null;
var containers = document.getElementsByClassName("Container");

update_carousel();

function update_carousel() {
    if (prevSlide != null) containers[prevSlide].style.display = "none";
    containers[currSlide].style.display = "inline-block";
}

function round_clicked(increment) {
    prevSlide = currSlide;
    currSlide = (currSlide + increment) % containers.length;
    if (currSlide < 0) currSlide = containers.length - 1;
    update_carousel();
}