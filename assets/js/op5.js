let knap = document.querySelector("#knap")
let knap2 = document.querySelector("#knap2")
let ekko = document.querySelector("#svar")

knap.addEventListener('click', EchoFunction)
knap2.addEventListener('click', DeleteFunction)

function EchoFunction() {

    var text = "";
    var i;
    for (i = 0; i < 5; i++) {
        text += "pøller ";
    }
    ekko.innerHTML += text;

}

function DeleteFunction() {

    ekko.innerHTML = "";

}
