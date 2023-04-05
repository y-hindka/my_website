function wipe_transition(event)
{
    event.preventDefault();
    document.getElementById("PageTransition").classList.add("WipeAnimation");
    window.setTimeout(function() {
        //window.location.href = event.target.href;
        
    }, 2000);
};