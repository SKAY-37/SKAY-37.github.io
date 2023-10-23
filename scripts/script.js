window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    document.getElementById("virtualUpBar").style.display = "flex";
    document.getElementById("virtualUpBar").style.opacity = "1";
    document.getElementById("virtualUpBar").style.animation = "socialMediaLanding1 .5s";
  } else {
    document.getElementById("virtualUpBar").style.animation = "socialMediaLanding2 .5s";
    document.getElementById("virtualUpBar").style.opacity = "0";

  }
}

function loaded() {
    document.getElementById("Loading").style.transition =".5s"
    document.getElementById("Loading").style.opacity ="0"
    document.getElementById("Loading").style.zIndex ="-60"
    document.getElementById("heights").style.height ="auto"
}