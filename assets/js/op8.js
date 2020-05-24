
let seasonimage = document.querySelector('#seasonimage')
let seasontext = document.querySelector('#seasontext')
let d = new Date();
let month = d.getMonth() + 1

// Javascript tæller månederne fra 0 til 11, hvor 0 er januar, 1 er februar osv.
// Ved at skrive d.getMonth() + 1 i vores variable kan vi bruge det senere i vores funktion hvor 1 er januar, 2 er februar osv.

// month = 15

if (month == 12 || month == 1 || month == 2) {
    seasontext.innerHTML = "Det er vinter"
    seasonimage.src = "./img/winter.jpg"
}
else if (month == 3 || month == 4 || month == 5) {
    seasontext.innerHTML = "Det er forår"
    seasonimage.src = "./img/spring.jpg"
}
else if (month == 6 || month == 7 || month == 8) {
    seasontext.innerHTML = "Det er sommer"
    seasonimage.src = "./img/summer.jpg"
}
else if (month == 9 || month == 10 || month == 11) {
    seasontext.innerHTML = "Det er efterår"
    seasonimage.src = "./img/autumn.jpg"
}
else {
    seasontext.innerHTML = "Der er sket en fejl"
    seasonimage.src = "./img/default.jpg"
}
