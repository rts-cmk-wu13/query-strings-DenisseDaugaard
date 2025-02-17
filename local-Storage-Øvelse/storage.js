
let navn = "Svampebob Firkant"
localStorage.setItem("brugerNavn", navn)

// hent data 
let gemtNavn = localStorage.getItem("brugerNavn")
console.log("Gemt brugernavn:", gemtNavn);

// manglende data-----

let kage = localStorage.getItem("cheeseCake")
console.log("Gemt kage:", kage);

