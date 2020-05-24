// Variables

let knap = document.querySelector('#knap')
let wrapperdiv = document.querySelector('#wrapper')

knap.addEventListener('click', KenFunction)

function KenFunction (){
    wrapperdiv.style.backgroundColor = "lightgreen";
    knap.style.backgroundColor = "blue";
    knap.style.color = "white";
    knap.disabled = true; 
     
}