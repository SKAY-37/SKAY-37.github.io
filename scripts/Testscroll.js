    function pageScroll() {
        window.scrollBy(0,40);
        scrolldelay = setTimeout(pageScroll,10);
    }
    var body = document.getElementById("heroBanner")
    body.onclick = ()=>{
        setInterval(pageScroll(),1000)
    }
