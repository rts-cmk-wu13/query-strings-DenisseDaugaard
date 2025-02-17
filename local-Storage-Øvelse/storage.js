
let navn = "Svampebob Firkant"
localStorage.setItem("brugerNavn", navn)

// hent data 
let gemtNavn = localStorage.getItem("brugerNavn")
console.log("Gemt brugernavn:", gemtNavn);

// manglende data-----

let kage = localStorage.getItem("cheeseCake")
console.log("Gemt kage:", kage);

// konvertere data I

let farver = ["rød" ,"grøn", "blå"]
localStorage.setItem("farveArray", JSON.stringify(farver))

// konvertere data II

let hentedeFarver = JSON.parse(localStorage.getItem("farveArray"))
console.log(hentedeFarver);

// slette data 
localStorage.removeItem("brugerNavn")

