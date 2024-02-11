var transitionLen = 250; // 0.25 seconds

window.onload = on_load();

function on_load()
{ 
    // update navbar
    var activePage = document.getElementById(document.getElementById("PageName").textContent);
    if (activePage) {
        activePage.style.color = "white";
        var underline = activePage.getElementsByClassName("underline")[0];
        underline.style.width = "100%";
    }

    slide_transition_in();
}

function slide_transition_in()
{
    window.setTimeout(function() {
        document.getElementById("PageTransition").classList.remove("is-active");
    }, transitionLen);
}

function slide_transition_out(event)
{
    event.preventDefault();
    
    // return if already on the requested page
    if (event.target.href == window.location.href) return;

    // else set page transition to active
    document.getElementById("PageTransition").classList.add("is-active");

    window.setTimeout(function() {
        // navigate to new page
        window.location.href = event.target.href;

        // remove page transition from page we navigated away from to allow back button compatability
        document.getElementById("PageTransition").classList.remove("is-active");
    }, transitionLen);
}