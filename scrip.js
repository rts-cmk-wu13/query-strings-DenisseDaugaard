let favorites = readFromLocalStorage("favoritePlaces") || []
//console.log(favorites);
//if (!favorites) favorites = []


fetch("data/destinations.json") 
.then(response => response.json()).

then(data => {
    let bodyElm = document.querySelector("body")
    //console.log(bodyElm);

    let headerElm = document.createElement("header")
    headerElm.innerHTML = `<nav>
                                <div class="ckeck-box__container">
                                    <label for="">Go to dark mode</label>
                                    <label class="switch">
                                    <input type="checkbox" id="switch__elm">
                                    <span class="slider round"></span>
                                    </label>
                                </div>
                           </nav>`
    
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
                                <i class="fa-solid fa-heart favorite ${favorites.includes(destination.id.toString())? "favorited" : ""}" data-id="${destination.id}"></i><a href="destination.html?id=${destination.id}"> MORE</a>
                                </section>
                            </div>
                            `).join("")}</section>`
                            
    apartaments.querySelectorAll(".favorite").forEach(function(heart){
        heart.addEventListener("click", function(event){
            let currentId = event.target.dataset.id

           if(favorites.includes(currentId)) {
            let newFavorites = favorites.filter(id => id != currentId)
            favorites = newFavorites
            event.target.classList.remove("favorited")
            //console.log(favorites);
           } else{
            favorites.push(currentId)
            event.target.classList.add("favorited")
            console.log(favorites);
           }

           saveToLocalStorage("favoritePlaces", favorites)
            
        })
    })
               
    bodyElm.append(headerElm,apartaments)
    darkMode()
    })
                            


    /**
     * 
     * @param {string} key -key to be use in local storage 
     * @param {string / number / boolean / object / any[] } value -value to be saved
     * @returns {string}
     */
    function saveToLocalStorage (key, value){

        localStorage.setItem(key, JSON.stringify(value))
        return "Data was saved with the key" + key
    }


    /**
     * 
     * @param {string} key -key to be use from loca storage 
     * @returns {string / number / boolean / object / any[] }
     */

    function readFromLocalStorage (key){
        return JSON.parse(localStorage.getItem(key))
    }


    function deleteFromLocalStorage (key){
        localStorage.removeItem(key)
       return "the element" + key + "was deleted."
    }



    let success = saveToLocalStorage()
    //console.log(success);
    
   let myfavorites = readFromLocalStorage("favorites")
   //console.log(myfavorites);

   let deletedSuccess =  deleteFromLocalStorage("favorites")
   //console.log(deletedSuccess);
   
