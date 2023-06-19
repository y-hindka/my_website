var contentContainers = document.getElementsByClassName("Content");
var threshold = -50;
comeIn(contentContainers, threshold);

window.onscroll = function() {
    comeIn(contentContainers, threshold);
};