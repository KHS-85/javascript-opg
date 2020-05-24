let knap = document.querySelector('#knap')
let dato = document.querySelector('#dato')
let slagsdag = document.querySelector('#slagsdag')
let d = new Date();
let weekday = d.getDay()

knap.addEventListener('click', DatoFunction)

// weekday = 5

// Javascript tæller ugedagene fra 0 til 6, hvor 0 er søndag, 1 er mandag osv.

function DatoFunction() {

    dato.innerHTML = d.toLocaleDateString()
    
    if (weekday === 0) {
        slagsdag.innerHTML = "Søndag - Hurra! Det er weekend!"
    }
    else if (weekday === 1) {
        slagsdag.innerHTML = "Mandag - Øv! Det er hverdag!"
    }
    else if (weekday === 2) {
        slagsdag.innerHTML = "Tirsdag - Øv! Det er hverdag!"
    }
    else if (weekday === 3) {
        slagsdag.innerHTML = "Onsdag - Øv! Det er hverdag!"
    }
    else if (weekday === 4) {
        slagsdag.innerHTML = "Torsdag - Øv! Det er hverdag!"
    }
    else if (weekday === 5) {
        slagsdag.innerHTML = "Fredag - Hverdag, men næsten weekend!"
    }
    else if (weekday === 6) {
        slagsdag.innerHTML = "Lørdag - Hurra! Det er weekend!"
    }
    else {
        slagsdag.innerHTML = "Der er sket en fejl"
    }
}


