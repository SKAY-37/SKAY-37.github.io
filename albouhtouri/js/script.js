var MenuBtn = document.getElementById("MenuBtn");

var Closed = document.getElementById("Close");
var Opened  = document.getElementById("Open");

var HiddenMenu = document.getElementById("HiddenMenu");

var MenuStatus = 0;

var Bluring = document.getElementById("Bluring");






MenuBtn.onclick = function(){

    if (MenuStatus === 0) {
        HiddenMenu.style.left = "0px";
        HiddenMenu.style.animation = "ShowTheMenu .3s ease-in";
        Opened.style.display ="none";
        Closed.style.display ="block";
        Bluring.style.filter ="blur(50px)"
        Bluring.style.transition =".3s"
        MenuStatus = 1;
    }
    else{
        HiddenMenu.style.left = "-100%";
        HiddenMenu.style.animation = "HideTheMenu .3s ease-in-out";
        Opened.style.display ="block";
        Closed.style.display ="none";
        Bluring.style.filter ="blur(0px)"
        Bluring.style.transition =".3s"
        MenuStatus = 0;
    }

}
