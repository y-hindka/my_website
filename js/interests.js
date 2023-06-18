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

var elements = document.querySelectorAll(".interest-container,.hobby-container");
var threshold = 300;
comeIn(elements, threshold);

window.onscroll = function() {
    comeIn(elements, threshold);
};

