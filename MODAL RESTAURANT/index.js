let btnMenu = document.querySelector(".btn-menu");
let btnContact = document.querySelector(".btn-contact");
let btnCloseMenu = document.querySelector(".btn-close-menu");
let btnCloseContact = document.querySelector(".btn-close-contact");

function styleBlockMenu() {
    document.getElementById("menu").style.display = "block";
}

function styleBlockContact() {
    document.getElementById("contact").style.display = "block";
}

function styleNoneMenu() {
    document.getElementById("menu").style.display = "none";
}

function styleNoneContact() {
    document.getElementById("contact").style.display = "none";
}

btnMenu.addEventListener("click", styleBlockMenu);
btnContact.addEventListener("click", styleBlockContact);
btnCloseMenu.addEventListener("click", styleNoneMenu);
btnCloseContact.addEventListener("click", styleNoneContact);