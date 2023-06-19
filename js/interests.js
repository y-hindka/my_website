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

var interests = document.getElementsByClassName("interest-container");
var hobbies = document.getElementsByClassName("hobby-container");
var interestThreshold = 0;
var hobbyThreshold = 300;

comeIn(interests, interestThreshold);
comeIn(hobbies, hobbyThreshold);

window.onscroll = function() {
    comeIn(interests, interestThreshold);
    comeIn(hobbies, hobbyThreshold);
};

