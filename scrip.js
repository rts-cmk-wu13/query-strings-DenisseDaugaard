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

    
        let favoriteIcons = document.querySelectorAll(".favorite")
        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

        // 
        favoriteIcons.forEach(icon => {
          let destinationId = icon.getAttribute("data-id")// 
            if (favorites.includes(destinationId)) {
                icon.classList.add("favorited")
            }

            icon.addEventListener("click", () => {
                addRedColor(destinationId, icon)
            })
        })


        function addRedColor(destinationId, icon) { // here we add some css to the icons or delete from local storage with each click
            let index = favorites.indexOf(destinationId);

            if (index === -1) { // this is what happens with every click if index is not found in the local storage !!
                favorites.push(destinationId)
                icon.classList.add("favorited")
            } else {
                favorites.splice(index, 1)
                icon.classList.remove("favorited")
            }

            // Save the items in the local storage!
            localStorage.setItem("favorites", JSON.stringify(favorites));
        }
})


