var transitionLen = 500; // 0.5 seconds

window.onload = override_window_on_load();

function override_window_on_load()
{
    // update navbar
    var active = document.getElementById(document.getElementById("PageName").textContent);
    active.style.color = "darkgrey";
    active.style.borderBottom = "1pt solid darkgrey";

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

    // else transition to requested page
    document.getElementById("PageTransition").classList.add("is-active");
    window.setTimeout(function() {
        window.location.href = event.target.href;
        document.getElementById("PageTransition").classList.remove("is-active"); // to allow back button compatability
    }, transitionLen);
}