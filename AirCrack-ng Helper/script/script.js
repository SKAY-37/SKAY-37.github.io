function copyToClipboard(b) {
    const copyText = document.querySelectorAll(".commandField p:nth-child(1)")[b];
    var coppingmess = document.getElementById("coppingmess");
    var message = document.getElementById("Message");
    coppingmess.style.display = "flex"
    message.style.animation = "CoppingShow 1s ease-in-out"
    message.style.bottom = "0px"
    setTimeout(function(){
      message.style.animation="CoppingHide 2s"
      message.style.bottom = "-200px"
      setTimeout(function(){
        coppingmess.style.display="none"
      }, 1000);
      // coppingmess.style.display="none"
    }, 2000);
    // Create a temporary textarea to copy the text
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = copyText.textContent;
    document.body.appendChild(tempTextArea);
    
    // Select the text within the temporary textarea
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the selected text to the clipboard
    document.execCommand("copy");
  
    // Remove the temporary textarea
    document.body.removeChild(tempTextArea);
  
    // Provide feedback to the user (you can customize this)
    // alert("Copied to clipboard: " + copyText.textContent);
  }


  function field() {
    var essid = document.getElementById("essid")
    var channel= document.getElementById("channel")
    var path = document.getElementById("path")
    var cessid= document.getElementById("cessid")
    var EssidField3 = document.getElementById("EssidField3")

    var essidF = document.getElementById("EssidField")
    var channelF = document.getElementById("ChannelField")
    var pathF = document.getElementById("PathField")
    var cessidF = document.getElementById("EssidField2")

    essidF.innerText = essid.value
    EssidField3.innerText = essid.value
    channelF.innerText = channel.value
    pathF.innerText = path.value
    cessidF.innerText = cessid.value
  }

  function informations(infoDiv) {
    var ininformationDivgo = document.querySelectorAll(".InfoSection")
    var target = ininformationDivgo[infoDiv];
    var ShowOption = target.style.display
    if (ShowOption === "block") {
      target.style.display = 'none'
    }else{
      target.style.display = 'block'
    }
    
    console.log(target)
  }