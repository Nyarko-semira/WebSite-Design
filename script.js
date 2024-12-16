const menuBtn = document.getElementById("menuBtn");
const sideNav = document.getElementById("sideNav");
const menu = document.getElementById("menu");

sideNav.style.right = "-250px"
menuBtn.addEventListener("click", showSideNav);


function showSideNav() {
    if (sideNav.style.right == "-250px") {
        sideNav.style.right = "0";
        menu.src = "images/img/close.png";

    }

    else {
        sideNav.style.right = "-250px";
        menu.src = "images/img/menu.png";
    }
}


var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
    loader.style.display = "none";

})