let params = new URLSearchParams(window.location.search)
//console.log(params);
let id = params.get("id")
console.log(id);


fetch(`/data/${id}.json`)
.then(response => response.json()).

then(destinationsData => {
    console.log(destinationsData);  
    let destinationsBodyElm = document.querySelector("body")
    console.log(destinationsBodyElm);
    
    let destinations = document.createElement("section")
    destinations.classList.add("destinations")
    destinations.innerHTML = `
                                <div class="destination__card" id="${destinationsData.id}">
                                <figure class="destination__card__img__container"> 
                                <img src="img/${destinationsData.image}" alt="Apartament image">
                                </figure>
                                <div class="destination__card__favorite">
                                <i class="fa-solid fa-heart favorite" data-place="${destinationsData.title}"></i>
                                <p>FAVORIT</p>
                                </div>
                                <section class="destination__card__info">
                                <h3 class="destination__name">${destinationsData.destination}</h3>
                                <h2>${destinationsData.title}</h2>
                                <span class="destination__subtitle">${destinationsData.subtitle}</span>
                                <p>${destinationsData.text}</p>
                                <h3>Faciliteter</h3>
                                <ul>
                                ${destinationsData.facilities.map(facility => `<li>${facility}</li>`).join("")}
                                </ul>
                                </section>
                                </div>`
    destinationsBodyElm.append(destinations)

})
