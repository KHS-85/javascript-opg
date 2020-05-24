let GoogleLink = document.querySelector("#GoogleLink")
let BingLink = document.querySelector("#BingLink")

GoogleLink.addEventListener('click', GoogleAlert)
BingLink.addEventListener('click', BingAlert)

function GoogleAlert(){
    alert("Du bliver nu sendt videre til Google")
}

function BingAlert(){
    let c = confirm("Er du sikker på at du vil gå videre til Bing?")
    if (c == true){
        // BingLink.href = "http://bing.com"
        // BingLink.target = "_blank"
    }
    else if (c == false){
        BingLink.href = " "
        BingLink.target = "_self"

    }
}