function comeIn(elems, threshold = 0) {
    var windowPos = window.scrollY + window.innerHeight;
    console.log(elems[2].offsetTop - windowPos);
    for (var i = 0; i < elems.length; i++)
    {
        if (elems[i].offsetTop - windowPos < threshold)
        {
            elems[i].classList.add("comeIn");
        }
    }
}