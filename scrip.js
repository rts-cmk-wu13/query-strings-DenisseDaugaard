fetch("data/destinations.json")
.then(response => response.json()).

then(data => {
    let bodyElm = document.querySelector("body")
    let apartaments = document.createElement("section")
    apartaments.classList.add("apartaments")
    apartaments.innerHTML = `<h1 class="headline" >Apartaments for rent</h1>
                            <section class="apartament">
                            ${data.destinations.map(destination => `
                            <div class="apartament__card"> 
                                <figure class="apartament__card__img__container"> 
                                <img src="img/${destination.image}" alt="Apartament image">
                                </figure>
                                <section class="apartament__card__text">
                                <i class="fa-solid fa-heart"></i><a href="destination.html?id=${destination.id}"> MORE</a>
                                </section>
                            </div>
                            `).join("")}</section>`

    bodyElm.append(apartaments)
})