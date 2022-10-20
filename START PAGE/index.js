let btnBars = document.querySelector(".btn-bars");

function openNav() {
    let aux = document.getElementById("bars");
    if (aux.className.indexOf("w3-show") === -1) {
        aux.className += " w3-show";
    } else {
        aux.className = aux.className.replace(" w3-show", "");
    }
}

btnBars.addEventListener("click", openNav);