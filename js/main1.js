/*let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-container");
let formBtn = document.querySelector("#login-btn");
let loginForm = document.querySelector(".login-form-container");
let formClose = document.querySelector("#form-close");

window.onscroll = () =>{
    searchBtn.classlist.remove("fa-times");
    searchBtr.classlist.remove("active");
}
searchBtn.addEventListener("click",(),=>{
    searchBtn.classlist.toggle("fa-times");
    searchBtr.classlist.toggle("active");
});

formBtn.addEventListener("click",(),=>{
    
    searchBtr.classlist.add("active");
});

formClose.addEventListener("click",(),=>{
    
    searchBtr.classlist.remove("active");
});*/


var swiper = new Swiper(".review-slider", {
    spaceBetween:20,
    loop:true,
});

function clickReservation() {
    let reponse = confirm("Êtes-vous sûr de vouloir faire la réservation ?");
    
    if (reponse) {
        // Action si l'utilisateur clique sur "OK"
        console.log("Réservation confirmée");
    } else {
        // Action si utilisateur clique "Annuler"
        console.log("Réservation annulée");
    }
}

