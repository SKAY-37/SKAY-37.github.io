var MenuBtn = document.getElementById("MenuBtn");

var Closed = document.getElementById("Close");
var Opened  = document.getElementById("Open");

var HiddenMenu = document.getElementById("HiddenMenu");

var Bluring = document.getElementById("Bluring");

var Container = document.getElementById("container");

var MenuStatus = 0;



MenuBtn.onclick = function(){

    if (MenuStatus === 0) {
        
        HiddenMenu.style.left = "0px";
        HiddenMenu.style.animation = "ShowTheMenu .3s ease-in";
        HiddenMenu.style.display ="flex";
        Opened.style.display ="none";
        Closed.style.display ="block";
        Bluring.style.filter ="blur(50px)"
        Bluring.style.transition =".3s"
        MenuStatus = 1;
       
        // Change Bluring Position
        // Bluring.style.animation ="ChangeBluringPlace .3s"
        // Bluring.style.position ="absolute"
        // Bluring.style.left="70%"
        // Bluring.style.top="50%"
        // Bluring.style.transition=".3s"
        Container.style.height ="105vh"
        Container.style.overflow = "hidden"


    }
    else{
        Bluring.onclick = function(){
            HiddenMenu.style.left = "-100%";
            HiddenMenu.style.animation = "HideTheMenu .3s ease-in-out";
            Opened.style.display ="block";
            Closed.style.display ="none";
            Bluring.style.filter ="blur(0px)"
            Bluring.style.transition =".3s"
            MenuStatus = 0;
            Container.style.height ="100%"
            Container.style.height ="100vh"
            Container.style.overflow = "visible"
    
        }
        Bluring.style.backgroundColor ="red"
        HiddenMenu.style.left = "-100%";
        HiddenMenu.style.animation = "HideTheMenu .3s ease-in-out";
        Opened.style.display ="block";
        Closed.style.display ="none";
        Bluring.style.filter ="blur(0px)"
        Bluring.style.transition =".3s"
        MenuStatus = 0;
        Container.style.height ="100%"
        Container.style.height ="100vh"
        Container.style.overflow = "visible"

        
        
// Reset Bluring Position
        // Bluring.style.animation ="ResetBluringPlace .3s"
        // Bluring.style.position ="static"
        // Bluring.style.left="0px"
        // Bluring.style.top="0%"
        // Bluring.style.transition=".3s"



    }

}

Menu = document.getElementById("Menu")

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("upBar").style.animation = "DownUpBar .5s";
    document.getElementById("upBar").style.position = "fixed";
    document.getElementById("upBar").style.top = "0px";
    document.getElementById("upBar").style.transition = "bottom .3s";
    document.getElementById("logo").style.animation = "LogoTrans 1s ease-in";
    document.getElementById("logo").style.width = "100%";
    document.getElementById("H1Logo").style.animation = "LogoTrans 1s ease-in";
    document.getElementById("H1Logo").style.textAlign = "center";
    Menu.style.display ="none";

  } else {
    document.getElementById("upBar").style.animation = "UpUpBar .5s";
    document.getElementById("upBar").style.position = "static";
    document.getElementById("logo").style.animation = "LogoReset 1s ease-in-out";
    document.getElementById("logo").style.width = "auto";
    document.getElementById("H1Logo").style.animation = "LogoReset 1s ease-in-out";
    document.getElementById("H1Logo").style.textAlign = "center";
    HiddenMenu.style.display ="none";
    Menu.style.display ="";
  }
}


function Smoothing() {
    HiddenMenu.style.left = "-100%";
    HiddenMenu.style.animation = "HideTheMenu .3s ease-in-out";
    Opened.style.display ="block";
    Closed.style.display ="none";
    Bluring.style.filter ="blur(0px)"
    Bluring.style.transition =".3s"
    MenuStatus = 0;
    Container.style.height ="100%"
    Container.style.height ="100vh"
    Container.style.overflow = "visible"
}


function Hello(x){
    $("#Bluring").load(x); 
    Smoothing()
  }

  var HomeAlb = document.getElementById("HomeAlb");
  var HomeAlbRef = document.getElementById("HomeAlbRef");
  function rep() {
   setInterval(sendMessage,3000);
  }
  function sendMessage() {
    var words = ["ALBOUHTORI","The Home","The Family","The House"]
    var random = words[Math.floor(Math.random() * words.length)] 
    HomeAlb.innerText = random
    HomeAlbRef.innerText = random
  }

  HomeAlb.onmouseover = ()=>{
    HomeAlb.innerText = "ALBOUHTORI"
    HomeAlbRef.innerText = "ALBOUHTORI"


  }

window.onload = ()=>{
    rep() 
}