
let pacman = document.querySelector('#pacman')

let hoejre = document.querySelector('#hoejre')
let venstre = document.querySelector('#venstre')
let op = document.querySelector('#op')
let ned = document.querySelector('#ned')

let x = 50
let y = 50


//////////////////////////////
// Arrow icon click events //
////////////////////////////

hoejre.addEventListener('click', MoveRight)
venstre.addEventListener('click', MoveLeft)
op.addEventListener('click', MoveUp)
ned.addEventListener('click', MoveDown)


/////////////////////////////////////////
// Pacman move functions (MouseClick) //
///////////////////////////////////////

function MoveRight() {
    x += 10
    let posX = x + "px"
    pacman.style.left = posX
}

function MoveLeft() {
    x += -10
    let posX = x + "px"
    pacman.style.left = posX
}

function MoveUp() {
    y += -10
    let posY = y + "px"
    pacman.style.top = posY
}

function MoveDown() {
    y += 10
    let posY = y + "px"
    pacman.style.top = posY
}

///////////////////////////////////////
// Pacman move functions (Keyboard) //
/////////////////////////////////////

document.addEventListener('keydown', (e) => {

    if (e.code === "ArrowRight") {
        x += 10
        let posX = x + "px"
        pacman.style.left = posX
    }
    else if (e.code === "ArrowLeft") {
        x += -10
        let posX = x + "px"
        pacman.style.left = posX
    }
    else if (e.code === "ArrowUp") {
        y += -10
        let posY = y + "px"
        pacman.style.top = posY
    }
    else if (e.code === "ArrowDown") {
        y += 10
        let posY = y + "px"
        pacman.style.top = posY
    }
        
  });