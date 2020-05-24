/////////////////////////////////////////////////////////////////////
// Variable og function der skifter til nyt billede ved mouseover //

let teletubbyImg = document.querySelector('#myImg')

teletubbyImg.addEventListener('mouseover', NewImg)

function NewImg() {
    document.getElementById("myImg").src = "./img/tt2.gif"
}

// Function der skifter tilbage til det originale billede, når man fjerner musen //

teletubbyImg.addEventListener('mouseout', OriginalImg)

function OriginalImg() {
    document.getElementById("myImg").src = "./img/tt1.gif"
}


/////////////////////////////////////////////////////////////////////////////////////
// ** Her er en anden måde at gøre det på, som kigger på- og ændrer img source ** //
// ** Ved at bruge if/else kan det gøres med én function i stedet for to **      //
//////////////////////////////////////////////////////////////////////////////////

// let teletubbyImg = document.querySelector('#myImg')

// teletubbyImg.addEventListener('mouseover', Animate)
// teletubbyImg.addEventListener('mouseout', Animate)

// function Animate(){
//     if(teletubbyImg.src.match("tt1")){
//         teletubbyImg.src = "/img/tt2.gif"
//     }
//     else{
//         teletubbyImg.src = "img/tt1.gif"
//     }
// }