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
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    document.getElementById("heroBanner").style.opacity = "0";

  } else {
    document.getElementById("heroBanner").style.opacity = "1";
  }
}







function loaded() {
    document.getElementById("Loading").style.transition =".5s"
    document.getElementById("Loading").style.opacity ="0"
    document.getElementById("Loading").style.zIndex ="-60"
    document.getElementById("heights").style.height ="auto"
}

// var icon = document.getElementsByTagName("link")
// var iconType = "light"
// icon[0].href = "images/FavIcon.svg"
//   setInterval(()=>{
//     if (iconType === "light") {
//       icon[0].href = "images/lightIcon.svg"
//       iconType = "dark"
      
//     }else{
//       icon[0].href = "images/FavIcon.svg"
//       iconType = "light"

//     }
//   },1000)
 
// Send Sms
 
  let tg = {
    token: "6977486939:AAECweAevjUTbIbfK1R7AEDZ1DZgjS_puz4", // Your bot's token that got from @BotFather
    chat_id: "5167299841" // The user's(that you want to send a message) telegram chat id

}

/**
 * By calling this function you can send message to a specific user()
 * @param {String} the text to send
 *
*/
function sendMessage(text,name)
{
    const url = `https://api.telegram.org/bot${tg.token}/sendMessage?chat_id=${tg.chat_id}&text=${text}`; // The url to request
    // const url = `https://api.telegram.org/bot${tg.token}/sendPhoto?chat_id=${tg.chat_id}&photo=${text}`; // The url to request
    const xht = new XMLHttpRequest();
    xht.open("GET", url);
    xht.send();
    localStorage.setItem("TetsMess", "true");
    localStorage.setItem("name", name);
}

// Now you can send any text(even a form data) by calling sendMessage function.
// For example if you want to send the 'hello', you can call that function like this:
var Send = localStorage.getItem("TetsMess");
var namex = localStorage.getItem("name");
// console.log("Test Message is : "+ Send)
if (Send === "true") {
// var sayHi = document.getElementById("SayHi");
// var About = document.getElementById("About");
// var fotter = document.getElementById("fotter");
//     sayHi.style.display = "none"
//     About.style.backgroundColor = "#202020"
//     fotter.style.backgroundColor ="#272727"
// }else{
//   sayHi.style.display = "flex"
//     About.style.backgroundColor = "#272727"
//     fotter.style.backgroundColor ="#202020"
  var ThereName = document.getElementById("ThereName")
    ThereName.innerText = namex
    form.style.display = "none"
    finallyMessage.style.display = "block"
}
document.getElementById("send").onclick = () =>{
  if (Send != "true") {
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var message = document.getElementById("message").value
    var ThereName = document.getElementById("ThereName")
    var form = document.getElementById("form")
    var finallyMessage = document.getElementById("finallyMessage");
    ThereName.innerText = name
    form.style.display = "none"
    finallyMessage.style.display = "block"
    let mess = `New Message :%0A_____________________%0AName    : ${name} ,%0AEmail   : ${email} ,%0AMessage : ${message} ;`
    sendMessage(mess,name);
    
  }
  else {
    
    console.log("its not")
  }
  

  
}