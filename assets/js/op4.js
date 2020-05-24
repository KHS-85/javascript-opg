
let overskrift = document.querySelector('#overskrift')


function overskriftSkift() {
    if (overskrift.innerHTML === "En overskrift") {
        overskrift.innerHTML = "Ny overskrift!";
    } else {
        overskrift.innerHTML = "En overskrift";
    }
}