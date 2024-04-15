var hobbies = document.getElementsByClassName("hobby-container");
for (var i = 0; i < hobbies.length; i++)
{
    (function() {
        var hobby_description = hobbies[i].getElementsByClassName("hobby-description")[0];
        var hobby_img         = hobbies[i].getElementsByClassName("hobby-img")[0];
        
        // setup event for displaying hobby description
        hobbies[i].addEventListener('mouseenter', function() {
            hobby_description.style.opacity = '100%';
            hobby_img.style.top = '200%';
        });

        // setup event for hiding hobby description
        hobbies[i].addEventListener('mouseleave', function() {
            hobby_description.style.opacity = '0%';
            hobby_img.style.top = '0%';
        });
    })();
}

var interests = document.getElementsByClassName("interest-container");
var interestThreshold = 0;

comeIn(interests, interestThreshold);

window.onscroll = function() {
    comeIn(interests, interestThreshold);
};

