var scroll_top = 0;

// retrieve top NavBar
var navbar_top = document.getElementById("NavBarTop");

// retrieve scrolled NavBar
var navbar_scrolled = document.getElementById("NavBarScrolled");
var page_links = document.getElementById("NavBarPageLinks")

// retrieve PostBar pos
var postbar_y = document.getElementById("PostBar").getBoundingClientRect().y;

function navbar_scroll()
{
    // retrieve scroll position
    var scroll_pos = window.scrollY;

    if ( scroll_pos <= 0 )
    {
        // change NavBar styling if scrolled all the way at the top

        // show top NavBar
        navbar_top.style.visibility = 'visible';

        // hide smaller, scrolled NavBar
        navbar_scrolled.style.visibility = 'hidden';
        navbar_scrolled.style.top = '-100%';
    }
    else if ( scroll_pos > scroll_top )
    {
        // change NavBar styling if scrolling down

        // hide top NavBar
        navbar_top.style.visibility = 'hidden';

        // show smaller, scrolled NavBar
        navbar_scrolled.style.visibility = 'visible';
        navbar_scrolled.style.top = '0';

        // make links invisible
        page_links.classList.remove("display-contents");
        page_links.classList.add("display-none");
    }
    else if ( scroll_pos < scroll_top && scroll_pos + window.innerHeight < postbar_y )
    {
        // change NavBar styling if scrolling up

        // make links visible
        page_links.classList.remove("display-none");
        page_links.classList.add("display-contents");
    }

    scroll_top = scroll_pos;
}

document.addEventListener(
    'scroll',
    navbar_scroll
);