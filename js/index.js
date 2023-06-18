var contentContainers = document.getElementsByClassName("Content");
comeIn(contentContainers);

window.onscroll = function() {
    comeIn(contentContainers);
};