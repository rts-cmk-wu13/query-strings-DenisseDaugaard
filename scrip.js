fetch("data/destinations.json")
.then(response => response.json()).

then(data => {
    let bodyElm = document.querySelector("body")
    console.log(bodyElm);
    
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
                                <i class="fa-solid fa-heart favorite" data-id="${destination.id}"></i><a href="destination.html?id=${destination.id}"> MORE</a>
                                </section>
                            </div>
                            `).join("")}</section>`
                            

    bodyElm.append(apartaments)

    markAsFavorite ()
})



/* -------------------choose a favorit ekstra opgave -------------------- */
let addedFavorites = JSON.parse(localStorage.getItem("favorites")) || []
//console.log(addedFavorites);




function markAsFavorite (){
    let favorites = document.querySelectorAll(".favorite")
    console.log(favorites);

    favorites.forEach( favorite => {
        favorite.addEventListener("click", event => {
            if (event.target){
                favorite.style.color ="red"
                let favoriteId = favorite.dataset.id
                localStorage.setItem("favorites", JSON.stringify(favoriteId))

                if(localStorage.getItem("favorites")){
                    console.log("hello");
                    console.log(JSON.parse(localStorage.getItem("favorites")));
                    console.log(favorite);
                    
                }
            }
        })
    })


}
