// Her definerer vi de to variabler vi skal bruge. Én til at vælge den bestemte paragraph og én til at vælge knappen.
let tekst = document.querySelector('#teksten')
let knap = document.querySelector('#knap')

// når der klikkes på button med id = 'knap', så kalder den funktionen: MakeItalic
knap.addEventListener('click', MakeItalic)

// Her bliver <p> elementet lavet om til: class="i", som potentielt overskriver andre class names den måtte have.
// Denne class er så defineret i vores css stylesheet til font-style: italic
// ---------------------------
// function MakeItalic (){
//   tekst.setAttribute('class', 'i')
// }

// Her bliver der tilføjet et ekstra class name til <p> elementet, hvilket IKKE overskriver andre class names.
// ---------------------------
// function MakeItalic (){
//   tekst.className = tekst.className + ' i'
// }

// Her ændrer vi på den indre html, hvor vi tager den originale tekst/paragraph og putter <em> tags udenom.
// ---------------------------
// function MakeItalic (){
//   tekst.innerHTML = '<em>' + tekst.innerHTML + '</em>'
// }

// Her bruger vi en HTML DOM event: toggle, til at tilføje en class: 'i' til vores paragraph.
// Det smarte ved denne toggle event er, at man kan slå den til og fra.
function MakeItalic (){
  tekst.classList.toggle('i')
}

// Kenneth Sørensen
